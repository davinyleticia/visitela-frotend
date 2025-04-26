import { Pencil, Trash, Lock } from "lucide-react"; // Você pode instalar o pacote lucide-react

interface IconProps {
  name: "edit" | "delete" | "lock";
}

export const IconDafult = ({ name }: IconProps) => {
  const icons = {
    edit: <Pencil size={16} />,
    delete: <Trash size={16} />,
    lock: <Lock size={16} />,
  };

  return icons[name];
};