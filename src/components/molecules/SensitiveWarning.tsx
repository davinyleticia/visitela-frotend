import { InputToggle } from "../atoms/InputToggle";

interface SensitiveWarningProps {
  isSensitive: boolean;
  onToggle: (checked: boolean) => void;
}

export const SensitiveWarning = ({ isSensitive, onToggle }: SensitiveWarningProps) => {
  return (
    <div className="bg-gray-100 p-4 rounded flex items-center justify-between">
      <div>
        <p className="text-lx font-medium">Conteúdo sensível</p>
        <p className="text-lx text-gray-600">
        Este link pode levar a conteúdo impróprio para determinadas audiências. Recomendamos que os visitantes verifiquem a adequação do material antes de acessá-lo.
        </p>
      </div>
      <InputToggle checked={isSensitive} onChange={onToggle} />
    </div>
  );
};