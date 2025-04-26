import { InputToggle } from "../atoms/InputToggle";

interface SensitiveWarningProps {
  isSensitive: boolean;
  onToggle: (checked: boolean) => void;
}

export const SensitiveWarning = ({ isSensitive, onToggle }: SensitiveWarningProps) => {
  return (
    <div className="bg-gray-100 p-4 rounded flex items-center justify-between">
      <div>
        <p className="text-sm font-medium">Conteúdo sensível</p>
        <p className="text-xs text-gray-600">
          Este link pode levar a conteúdo impróprio para determinadas audiências.
        </p>
      </div>
      <InputToggle checked={isSensitive} onChange={onToggle} />
    </div>
  );
};