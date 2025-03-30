interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: "primary" | "outline";
}

export default function Button({ text, variant = "primary", onClick }: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-red-500 text-white"
      : "border border-red-500 text-red-500";

  
  
  return (
    <button 
      onClick={onClick} 
      className={`px-4 py-2 rounded-md ${styles}`}
    >
      {text}
    </button>
  );
}
