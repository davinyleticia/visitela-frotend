import { Input } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";

export const InputField = ({ id, label, ...props }: { id: string; label: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className="mb-4">
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} {...props} />
  </div>
);