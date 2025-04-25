type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "outline";
  };
  
  export const ButtonWhite = ({ children, variant = "primary", ...props }: Props) => {
    const base = "text-2xl px-4 py-2 rounded-md transition";
    const styles = variant === "primary"
      ? "bg-black text-white hover:bg-gray-900"
      : "border border-black text-black hover:bg-gray-100";
  
    return <button className={`${base} ${styles}`} {...props}>{children}</button>;
  };