import { ButtonWhite } from "../atoms/ButtonWhite";
import { Share2 } from "lucide-react";

export const ProfileActions = () => (
  <div className="flex justify-center my-14 flex-wrap gap-2 mt-2 sm:flex-nowrap">
    <ButtonWhite>Área de membros</ButtonWhite>
    <ButtonWhite variant="outline">
      <div className=" flex items-center gap-1">
        Compartilhar <Share2 className="w-4 h-4" />
      </div>
    </ButtonWhite>
  </div>
);