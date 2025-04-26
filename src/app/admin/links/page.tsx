"use client";
import { useState } from "react";
import { CardSecurityBanner } from "@/components/molecules/CardSecurityBanner";
import { SensitiveWarning } from "@/components/molecules/SensitiveWarning";
import { LinksList } from "@/components/organisms/LinksList";
import { AddLinkSection } from "@/components/organisms/AddLinkSection";
import { Modal } from "@/components/atoms/Modal";
import { AddLinkForm } from "@/components/molecules/AddLinkForm";
import { AdminNavigation } from "@/components/molecules/AdminNavigation";
import { Title } from "@/components/atoms/Title";
import Spacer from "@/components/atoms/Space";
import { Footer } from "@/components/organisms/Footer";

export default function AdminLinksPage() {
  const [isSensitive, setIsSensitive] = useState(false);
  const [links, setLinks] = useState([
    { id: 1, title: "Minhas redes", url: "https://meusite.com" },
    { id: 2, title: "Design Library", url: "https://library.relume.io" },
    { id: 3, title: "Design Library", url: "https://library.relume.io" },
    { id: 4, title: "Design Library", url: "https://library.relume.io" },
    { id: 5, title: "Design Library", url: "https://library.relume.io" },
    { id: 6, title: "Design Library", url: "https://library.relume.io" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("links");


  const handleAddLink = () => {
    setIsModalOpen(true);
  };

  const handleSaveLink = (title: string, url: string) => {
    const id = links.length + 1;
    setLinks([...links, { id, title, url }]);
    setIsModalOpen(false);
  };

  const handleEditLink = (id: number) => {
    console.log("Editar link", id);
  };

  const handleDeleteLink = (id: number) => {
    setLinks(links.filter(link => link.id !== id));
  };

  return (<>
    <div className="p-6 mx-auto space-y-6 max-w-[500px] lg:max-w-[800px]">

      <CardSecurityBanner />
      <Title className="text-center text-2xl font-bold mb-4">
        Administração de Links
      </Title>
      <SensitiveWarning isSensitive={isSensitive} onToggle={setIsSensitive} />
      <AddLinkSection onAdd={handleAddLink} />
      <LinksList links={links} onEdit={handleEditLink} onDelete={handleDeleteLink} />
      <AdminNavigation onTabChange={setCurrentTab} currentTab={currentTab} />

      {/* Modal para adicionar novo link */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Adicionar Novo Link">
        <AddLinkForm onSave={handleSaveLink} onCancel={() => setIsModalOpen(false)} />
      </Modal>
    </div>
    <Footer/>
    <Spacer/></>
  );
};


