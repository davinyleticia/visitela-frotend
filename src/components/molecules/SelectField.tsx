import { Label } from "@/components/atoms/Label";
import { Select } from "@/components/atoms/Select";

export const SelectField = ({ id, label, options }: { id: string; label: string; options: string[] }) => (
  <div className="mb-4">
    <Label htmlFor={id}>{label}</Label>
    <Select id={id}>
      <option value="">Selecione uma opção</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </Select>
  </div>
);
