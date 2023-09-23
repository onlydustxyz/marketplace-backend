default: build

### CI
install:
	@which rustup >/dev/null || curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
	rustup toolchain install nightly

clean:
	cargo clean

fmt:
	cargo +nightly fmt --all -- --check

fmt/fix:
	cargo +nightly fmt --all

check:
	cargo check

clippy:
	cargo clippy --bins --tests --examples -- -D warnings

build:
	cargo build --workspace

unit-tests:
	cargo test --lib

integration-tests:
	cargo test --test '*'

coverage/unit-tests:
	cargo tarpaulin --workspace --skip-clean  --target-dir tarpaulin_target --lib --out xml

coverage/integration-tests:
	cargo tarpaulin --workspace --skip-clean --target-dir tarpaulin_target --test '*' --out xml

coverage/ci: clean fmt check clippy build coverage/unit-tests coverage/integration-tests

ci: clean fmt check clippy build unit-tests integration-tests

### Docker
infra/down:
	docker compose down

infra/clean:
	docker compose down -v

infra/up:
	docker compose up

infra/re: clean up

### Backends
api:
	cargo run -p api

quotes-syncer:
	cargo run -p api --bin quotes_syncer

events-sanity-checks:
	cargo run -p api --bin events_sanity_checks

event-listeners:
	cargo run -p event-listeners --bin listeners

github-indexer:
	cargo run -p event-listeners --bin github-indexer

github-indexer-api:
	cargo run -p event-listeners

.PHONY: install clean fmt check clippy build unit-tests integration-tests ci api quotes-syncer events-sanity-check event-listeners github-indexer github-indexer-api
