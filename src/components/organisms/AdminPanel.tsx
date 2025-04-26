import { CardSecurityBanner } from "../molecules/CardSecurityBanner";
import { SensitiveWarning } from "../molecules/SensitiveWarning";
import { LinksList } from "./LinksList";
import { AddLinkSection } from "./AddLinkSection";
import { useState } from "react";

export const AdminPanel = () => {
  const [isSensitive, setIsSensitive] = useState(false);
  const [links, setLinks] = useState([
    { id: 1, title: "Minhas redes", url: "https://meusite.com" },
    { id: 2, title: "Design Library", url: "https://library.relume.io" },
    { id: 3, title: "Design Library", url: "https://library.relume.io" },
    { id: 4, title: "Design Library", url: "https://library.relume.io" },
  ]);

  const handleAddLink = () => {
    const id = links.length + 1;
    setLinks([...links, { id, title: "Novo link", url: "https://novo.com" }]);
  };

  const handleEditLink = (id: number) => {
    console.log("Editar link", id);
  };

  const handleDeleteLink = (id: number) => {
    setLinks(links.filter(link => link.id !== id));
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-6">
      <CardSecurityBanner />
      <SensitiveWarning isSensitive={isSensitive} onToggle={setIsSensitive} />
      <AddLinkSection onAdd={handleAddLink} />
      <LinksList links={links} onEdit={handleEditLink} onDelete={handleDeleteLink} />
    </div>
  );
};