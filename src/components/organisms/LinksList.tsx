import { LinkItem } from "../molecules/LinkItem";

interface Link {
  id: number;
  title: string;
  url: string;
}

interface LinksListProps {
  links: Link[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const LinksList = ({ links, onEdit, onDelete }: LinksListProps) => {
  return (
    <div className="mt-4">
      {links.map(link => (
        <LinkItem 
          key={link.id} 
          title={link.title} 
          url={link.url} 
          onEdit={() => onEdit(link.id)} 
          onDelete={() => onDelete(link.id)} 
        />
      ))}
    </div>
  );
};