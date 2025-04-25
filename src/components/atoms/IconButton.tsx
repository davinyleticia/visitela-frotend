import { LucideIcon } from "lucide-react";

export const IconButton = ({ icon: Icon, ...props }: { icon: LucideIcon } & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className="p-2 rounded-full hover:bg-gray-100" {...props}>
    <Icon className="w-5 h-5" />
  </button>
);