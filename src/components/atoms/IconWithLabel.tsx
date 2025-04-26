import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  label: string;
}

export const IconWithLabel = ({ icon, label }: Props) => (
  <div className="flex items-center gap-2">
    {icon}
    <span>{label}</span>
  </div>
);