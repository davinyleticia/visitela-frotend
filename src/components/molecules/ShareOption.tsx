import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface Props {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

export const ShareOption = ({ icon, label, onClick }: Props) => (
  <button
    onClick={onClick}
    className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-100 rounded"
  >
    <div className="flex items-center gap-3">
      {icon}
      <span className="text-gray-800">{label}</span>
    </div>
    <ChevronRight className="w-4 h-4 text-gray-400" />
  </button>
);