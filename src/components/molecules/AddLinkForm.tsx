// components/molecules/AddLinkForm.tsx
import React, { useState } from "react";
import Button from "../atoms/Button";

interface AddLinkFormProps {
  onSave: (title: string, url: string) => void;
  onCancel: () => void;
}

export const AddLinkForm = ({ onSave, onCancel }: AddLinkFormProps) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && url.trim()) {
      onSave(title, url);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">URL</label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="mt-1 w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>

      <div className="flex justify-end gap-2">
        <Button  onClick={onCancel} variant="outline">Cancelar</Button>
        <Button >Salvar</Button>
      </div>
    </form>
  );
};
