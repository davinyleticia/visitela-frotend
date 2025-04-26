import { IconDafult } from "../atoms/IconDafult";

interface LinkItemProps {
  title: string;
  url: string;
  onEdit: () => void;
  onDelete: () => void;
}

export const LinkItem = ({ title, url, onEdit, onDelete }: LinkItemProps) => {
  return (
    <div className="flex items-center justify-between p-4 border rounded mb-2">
      <div className="flex flex-col">
        <span className="font-semibold">{title}</span>
        <span className="text-sm text-gray-500">{url}</span>
      </div>
      <div className="flex gap-2">
        <button onClick={onEdit} className="text-blue-500"><IconDafult name="edit" /></button>
        <button onClick={onDelete} className="text-red-500"><IconDafult name="delete" /></button>
      </div>
    </div>
  );
};