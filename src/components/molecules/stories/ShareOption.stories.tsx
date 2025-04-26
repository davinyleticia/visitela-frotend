import { FaWhatsapp } from "react-icons/fa";
import type { Meta, StoryObj } from "@storybook/react";
import { ShareOption } from "../ShareOption";

const meta: Meta<typeof ShareOption> = {
  title: "Molecules/ShareOption",
  component: ShareOption,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ShareOption>;

export const Default: Story = {
  args: {
    icon: <FaWhatsapp className="text-green-500" />,
    label: "WhatsApp",
    onClick: () => alert("Compartilhar via WhatsApp"),
  },
};
