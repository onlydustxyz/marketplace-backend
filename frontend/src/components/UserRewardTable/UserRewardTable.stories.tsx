import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Currency, PaymentStatus } from "src/types";

import UserRewardTable from ".";
import { Reward } from "./Line";
import { daysFromNow } from "src/utils/date";

export default {
  title: "UserRewardTable",
  component: UserRewardTable,
} as ComponentMeta<typeof UserRewardTable>;

const mockPayments: Reward[] = [
  {
    amount: { value: 200, currency: Currency.ETH },
    id: "c0cfdf80-bbba-4512-b5ec-066dfa9529b1",
    requestedAt: daysFromNow(700),
    project: {
      id: "a4441ead-737a-4feb-8700-60f0721776ff",
      title: "Awesome Project",
      logoUrl: "https://avatars.githubusercontent.com/u/25772758?v=4",
    },
    status: PaymentStatus.ACCEPTED,
    workItems: [
      {
        paymentId: "c0cfdf80-bbba-4512-b5ec-066dfa9529b1",
        repoId: 123456,
        issueNumber: 110,
      },
      {
        paymentId: "c0cfdf80-bbba-4512-b5ec-066dfa9529b1",
        repoId: 123456,
        issueNumber: 111,
      },
    ],
    invoiceReceived: false,
  },
  {
    amount: { value: 100, currency: Currency.USD },
    id: "6397226d-0461-4451-962c-a61e36fd324b",
    requestedAt: daysFromNow(1500),
    project: {
      id: "fea3c754-bf35-4f2b-aabc-ff345105322e",
      title: "Good Project",
    },
    workItems: [
      {
        paymentId: "6397226d-0461-4451-962c-a61e36fd324b",
        repoId: 123456,
        issueNumber: 110,
      },
    ],
    status: PaymentStatus.WAITING_PAYMENT,
    invoiceReceived: true,
  },
];

const Template: ComponentStory<typeof UserRewardTable> = args => (
  <UserRewardTable
    rewards={mockPayments}
    payoutInfoMissing={args.payoutInfoMissing}
    invoiceNeeded={args.invoiceNeeded}
  />
);

export const Default = Template.bind({});

Default.args = {
  payoutInfoMissing: false,
  invoiceNeeded: false,
};