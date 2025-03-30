import { useState } from "react";
import PrefixInput from "../atoms/PrefixInput";
import Button from "../atoms/Button";

export default function ShortLinkForm() {
  const [name, setName] = useState("");

  const handleCreate = () => {
    console.log("Criando link:", `Visite.la/${name}`);
  };

  return (
    <div className="flex gap-2">
      <PrefixInput value={name} onChange={(e) => setName(e.target.value)} />
      <Button text="Criar" onClick={handleCreate} />
    </div>
  );
}