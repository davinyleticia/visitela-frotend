interface ButtonProps {
  text?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "secondary" | "danger" | "write";
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

export default function Button({
  text,
  variant = "primary",
  onClick,
  fullWidth = false,
  children,
}: ButtonProps) {
  const baseStyles = "flex flex-row items-center px-4 py-2 rounded-md text-sm sm:text-base transition-all cursor-pointer";

  const variantStyles =
  variant === "primary"
    ? "bg-red-500 text-white hover:bg-red-600"
    : variant === "write"
    ? "bg-white-200 text-gray-800 hover:bg-gray-300 border border-gray-300"
    : variant === "danger"
    ? "bg-red-500 text-white hover:bg-red-600"
    : variant === "secondary"
    ? "bg-black text-white hover:bg-gray-800"
    : "border border-red-500 text-red-500 hover:bg-red-100";


  const widthStyle = fullWidth ? "w-full" : "w-auto";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${widthStyle}`}
    >
      {text || children}
    </button>
  );
}

