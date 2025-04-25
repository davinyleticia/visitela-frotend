type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = ({ children, ...props }: SelectProps) => (
  <select
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
    {...props}
  >
    {children}
  </select>
);