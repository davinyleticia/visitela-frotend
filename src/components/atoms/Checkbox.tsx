type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({ ...props }: CheckboxProps) => (
  <input type="checkbox" className="w-4 h-4 text-black rounded" {...props} />
);