import type { Meta, StoryObj } from "@storybook/react";
import { FAQItem } from "../FAQItem";

const meta: Meta<typeof FAQItem> = {
  title: "Molecules/FAQItem",
  component: FAQItem,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FAQItem>;

export const Default: Story = {
  args: {
    question: "O que é Visite.la?",
    answer: "É uma plataforma para compartilhar seus links pessoais de forma simples.",
  },
};
