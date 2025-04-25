interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: "primary" | "outline";
  fullWidth?: boolean;
  className?: string;
}

export default function Button({
  text,
  variant = "primary",
  onClick,
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-md text-sm sm:text-base transition-all";

  const variantStyles =
    variant === "primary"
      ? "bg-red-500 text-white hover:bg-red-600"
      : "border border-red-500 text-red-500 hover:bg-red-100";

  const widthStyle = fullWidth ? "w-full" : "w-auto";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${widthStyle}`}
    >
      {text}
    </button>
  );
}

