import Button from "../atoms/Button";

interface AddLinkSectionProps {
  onAdd: () => void;
}

export const AddLinkSection = ({ onAdd }: AddLinkSectionProps) => {
  return (
    <div className="flex justify-center mt-4">
      <Button onClick={onAdd} variant="outline" className="w-full sm:w-auto">
        + Adicionar link
      </Button>
    </div>
  );
};