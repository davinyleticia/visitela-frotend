import { ButtonWhite } from "../atoms/ButtonWhite";
import { Share2, CalendarClock } from "lucide-react";

interface Props {
  setOpenShare: (open: boolean) => void;
}

export const ProfileActions = ({ setOpenShare }: Props) => (
  <div className="flex justify-center my-14 flex-wrap gap-2 mt-2 sm:flex-nowrap">
    <ButtonWhite>Área de membros</ButtonWhite>
    <ButtonWhite variant="outline">
      {" "}
      <div className=" flex items-center gap-1">
        Agenda <CalendarClock className="w-4 h-4" />{" "}
      </div>
    </ButtonWhite>

    <ButtonWhite   onClick={() => setOpenShare(true)} variant="outline">
      <div className=" flex items-center gap-1">
        Compartilhar <Share2 className="w-4 h-4" />
      </div>
    </ButtonWhite>
  </div>
);
