type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonBlack = ({ children, ...props }: ButtonProps) => (
  <button
    className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition text-sm sm:text-base"
    {...props}
  >
    {children}
  </button>
);
