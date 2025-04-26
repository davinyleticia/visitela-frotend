import { AlignVerticalSpaceAround } from "lucide-react";
import Button from "../atoms/Button";

interface AddLinkSectionProps {
  onAdd: () => void;
}

export const AddLinkSection = ({ onAdd }: AddLinkSectionProps) => {
  return (<div className="flex justify-center mt-4">
    <div className="flex justify-center mt-4 mx-5">
      <Button onClick={onAdd} variant="secondary" className="w-full sm:w-auto">
        + Adicionar link
      </Button>
    </div>
        <div className="flex justify-center mt-4">
        <Button onClick={onAdd} variant="write" className=" w-full sm:w-auto">
        <AlignVerticalSpaceAround width={15} className="mx-2" /> Adicionar cabeçalho
        </Button>
      </div>
      </div>
)};