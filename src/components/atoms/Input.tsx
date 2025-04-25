type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...props }: InputProps) => (
  <input
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
    {...props}
  />
);