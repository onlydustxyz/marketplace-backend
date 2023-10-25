use chrono::{Duration, Utc};
use olog::info;
use thiserror::Error;

use super::{state::Status, Reason};
use crate::{
	Aggregate, Amount, GithubUserId, PaymentEvent, PaymentId, PaymentReceipt, PaymentReceiptId,
	ProjectId, UserId,
};

pub type Payment = Aggregate<super::state::State>;

#[derive(Debug, Error, PartialEq, Eq)]
pub enum Error {
	#[error("Receipt amount exceeds requested amount")]
	Overspent,
	#[error("Payment is not cancellable")]
	NotCancellable,
	#[error("Payment has been cancelled")]
	Cancelled,
}

impl Payment {
	#[cfg_attr(feature = "cargo-clippy", allow(clippy::too_many_arguments))]
	pub fn request(
		id: PaymentId,
		project_id: ProjectId,
		requestor_id: UserId,
		recipient_id: GithubUserId,
		amount: Amount,
		duration_worked: Option<Duration>,
		reason: Reason,
	) -> Self {
		Self::default().with_pending_events(vec![PaymentEvent::Requested {
			id,
			project_id,
			requestor_id,
			recipient_id,
			amount,
			duration_worked,
			reason,
			requested_at: Utc::now().naive_utc(),
		}])
	}

	pub fn add_receipt(
		self,
		receipt_id: PaymentReceiptId,
		amount: Amount,
		receipt: PaymentReceipt,
	) -> Result<Self, Error> {
		self.only_active()?;

		// TODO: Handle currency conversion when needed
		if self.paid_amount + amount.amount() > self.requested_amount {
			return Err(Error::Overspent);
		}

		info!(
			amount = amount.amount().to_string(),
			already_paid = self.paid_amount.to_string(),
			requested_amount = self.requested_amount.to_string(),
			"New payment receipt added",
		);

		let event = PaymentEvent::Processed {
			id: self.id,
			amount,
			receipt_id,
			receipt,
			processed_at: Utc::now().naive_utc(),
		};

		Ok(self.with_pending_events(vec![event]))
	}

	pub fn cancel(self) -> Result<Self, Error> {
		self.only_active()?;
		self.only_cancellable()?;

		info!(id = self.id.to_string(), "Payment request cancelled",);

		let event = PaymentEvent::Cancelled { id: self.id };

		Ok(self.with_pending_events(vec![event]))
	}

	pub fn mark_invoice_as_received(self) -> Result<Self, Error> {
		self.only_active()?;

		info!(id = self.id.to_string(), "Invoice received",);

		let event = PaymentEvent::InvoiceReceived {
			id: self.id,
			received_at: Utc::now().naive_utc(),
		};

		Ok(self.with_pending_events(vec![event]))
	}

	pub fn reject_invoice(self) -> Result<Self, Error> {
		self.only_active()?;

		info!(id = self.id.to_string(), "Invoice rejected",);

		let event = PaymentEvent::InvoiceRejected { id: self.id };

		Ok(self.with_pending_events(vec![event]))
	}

	fn only_active(&self) -> Result<(), Error> {
		match self.status {
			Status::Active => Ok(()),
			Status::Cancelled => Err(Error::Cancelled),
		}
	}

	fn only_cancellable(&self) -> Result<(), Error> {
		if self.paid_amount.is_zero() {
			Ok(())
		} else {
			Err(Error::NotCancellable)
		}
	}
}

#[cfg(test)]
mod tests {
	use std::str::FromStr;

	use assert_matches::assert_matches;
	use rstest::{fixture, rstest};
	use rust_decimal::Decimal;
	use rust_decimal_macros::dec;
	use uuid::Uuid;

	use super::*;
	use crate::{currencies, EventSourcable, PaymentReceiptId, UserId};

	pub const CONTRACT_ADDRESSES: [&str; 1] = ["0xd8da6bf26964af9d7eed9e03e53415d37aa96045"];

	pub const TRANSACTION_HASHES: [&str; 1] =
		["0x797fb77202901c52094d2544f3631a3535b8ca40009f6a6ac6940b67e6873a4"];

	#[fixture]
	fn payment_receipt_id() -> PaymentReceiptId {
		Uuid::from_str("00000000-aaaa-495e-9f4c-038ec0ebecb1").unwrap().into()
	}

	#[fixture]
	fn requestor_id() -> UserId {
		Uuid::from_str("22222222-aaaa-495e-9f4c-038ec0ebecb1").unwrap().into()
	}

	#[fixture]
	fn project_id() -> ProjectId {
		Uuid::from_str("33333333-aaaa-495e-9f4c-038ec0ebecb1").unwrap().into()
	}

	#[fixture]
	fn recipient_id() -> GithubUserId {
		42u64.into()
	}

	#[fixture]
	fn reason() -> Reason {
		Default::default()
	}

	#[fixture]
	fn payment_id() -> PaymentId {
		Uuid::from_str("44444444-aaaa-495e-9f4c-038ec0ebecb1").unwrap().into()
	}

	#[fixture]
	fn amount() -> Amount {
		Amount::from_decimal(dec!(420), currencies::USD)
	}

	#[fixture]
	fn duration_worked() -> Duration {
		Duration::hours(12)
	}

	#[fixture]
	fn receipt() -> PaymentReceipt {
		PaymentReceipt::Ethereum {
			recipient_address: CONTRACT_ADDRESSES[0].parse().unwrap(),
			recipient_ens: None,
			transaction_hash: TRANSACTION_HASHES[0].parse().unwrap(),
		}
	}

	#[fixture]
	fn cancelled_payment_event(payment_id: PaymentId) -> PaymentEvent {
		PaymentEvent::Cancelled { id: payment_id }
	}

	#[fixture]
	fn requested_payment(
		payment_id: PaymentId,
		project_id: ProjectId,
		requestor_id: UserId,
		recipient_id: GithubUserId,
		amount: Amount,
		duration_worked: Duration,
		reason: Reason,
	) -> Payment {
		Payment::from_events(&[PaymentEvent::Requested {
			id: payment_id,
			project_id,
			requestor_id,
			recipient_id,
			amount,
			duration_worked: Some(duration_worked),
			reason,
			requested_at: Utc::now().naive_utc(),
		}])
	}

	#[fixture]
	fn cancelled_payment(requested_payment: Payment) -> Payment {
		requested_payment.cancel().unwrap()
	}

	#[fixture]
	fn processed_payment(
		requested_payment: Payment,
		payment_receipt_id: PaymentReceiptId,
		amount: Amount,
		receipt: PaymentReceipt,
	) -> Payment {
		requested_payment.add_receipt(payment_receipt_id, amount, receipt).unwrap()
	}

	#[rstest]
	fn test_add_receipt(
		payment_id: PaymentId,
		payment_receipt_id: PaymentReceiptId,
		amount: Amount,
		receipt: PaymentReceipt,
		requested_payment: Payment,
	) {
		let before = Utc::now().naive_utc();
		let events = requested_payment
			.add_receipt(payment_receipt_id, amount.clone(), receipt.clone())
			.expect("Problem when adding receipt")
			.collect::<Vec<_>>();
		let after = Utc::now().naive_utc();

		assert_eq!(events.len(), 1);

		assert_matches!(
			events.first().unwrap(),
			PaymentEvent::Processed {
				id,
				receipt_id,
				amount: event_amount,
				receipt: event_receipt,
				processed_at
			} => {
				assert_eq!(id, &payment_id);
				assert_eq!(receipt_id, &payment_receipt_id);
				assert_eq!(event_amount, &amount);
				assert_eq!(event_receipt, &receipt);
				assert!(before <= *processed_at);
				assert!(after >= *processed_at);
			}
		);
	}

	#[rstest]
	fn test_add_receipt_fails_if_overspent(
		payment_receipt_id: PaymentReceiptId,
		amount: Amount,
		receipt: PaymentReceipt,
		requested_payment: Payment,
	) {
		let result = requested_payment.add_receipt(
			payment_receipt_id,
			Amount::from_decimal(amount.amount() + amount.amount(), amount.currency()),
			receipt,
		);

		assert_eq!(result, Err(Error::Overspent));
	}

	#[rstest]
	fn test_add_receipt_fails_if_double_spent(
		payment_receipt_id: PaymentReceiptId,
		amount: Amount,
		receipt: PaymentReceipt,
		requested_payment: Payment,
	) {
		let payment = requested_payment;
		let payment = payment
			.add_receipt(payment_receipt_id, amount.clone(), receipt.clone())
			.expect("Problem when adding receipt");

		assert_eq!(
			payment.add_receipt(payment_receipt_id, amount, receipt),
			Err(Error::Overspent)
		);
	}

	#[rstest]
	fn test_add_receipt_fails_if_cancelled(
		payment_receipt_id: PaymentReceiptId,
		amount: Amount,
		receipt: PaymentReceipt,
		cancelled_payment: Payment,
	) {
		assert_eq!(
			cancelled_payment.add_receipt(payment_receipt_id, amount, receipt),
			Err(Error::Cancelled)
		);
	}

	#[rstest]
	fn test_cancel(requested_payment: Payment, cancelled_payment_event: PaymentEvent) {
		assert_eq!(
			requested_payment
				.cancel()
				.expect("Problem when cancelling payment")
				.collect::<Vec<_>>(),
			vec![cancelled_payment_event]
		);
	}

	#[rstest]
	fn test_cancel_fails_if_cancelled(cancelled_payment: Payment) {
		assert_eq!(cancelled_payment.cancel(), Err(Error::Cancelled));
	}

	#[rstest]
	fn test_cancel_fails_if_processed(processed_payment: Payment) {
		assert_eq!(processed_payment.cancel(), Err(Error::NotCancellable));
	}

	#[rstest]
	fn test_request(
		payment_id: PaymentId,
		project_id: ProjectId,
		requestor_id: UserId,
		recipient_id: GithubUserId,
		amount: Amount,
		duration_worked: Duration,
		reason: Reason,
	) {
		let before = Utc::now();
		let events = Payment::request(
			payment_id,
			project_id,
			requestor_id,
			recipient_id,
			amount.clone(),
			Some(duration_worked),
			reason.clone(),
		)
		.collect::<Vec<_>>();
		let after = Utc::now();

		assert_eq!(events.len(), 1);
		let requested_at = match &events[0] {
			PaymentEvent::Requested { requested_at, .. } => *requested_at,
			_ => panic!("Should be a Payment::Requested event"),
		};

		assert!(requested_at >= before.naive_utc());
		assert!(requested_at <= after.naive_utc());

		assert_eq!(
			events[0],
			PaymentEvent::Requested {
				id: payment_id,
				project_id,
				requestor_id,
				recipient_id,
				amount,
				duration_worked: Some(duration_worked),
				reason,
				requested_at,
			}
		);
	}

	#[rstest]
	fn test_event_sourced(payment_id: PaymentId, project_id: ProjectId) {
		let event = PaymentEvent::Requested {
			id: payment_id,
			project_id,
			requestor_id: Default::default(),
			recipient_id: Default::default(),
			amount: Amount::from_decimal(Decimal::ZERO, Default::default()),
			duration_worked: None,
			reason: Default::default(),
			requested_at: Default::default(),
		};

		let payment = Payment::from_events(&[event]);
		assert_eq!(payment.id, payment_id);
	}
}
