import { useState } from "react";
import PrefixInput from "../atoms/PrefixInput";
import Button from "../atoms/Button";

interface ShortLinkFormProps {
  handleCreate: () => void; // Tipo de handleCreate
}

export default function ShortLinkForm({ handleCreate }: ShortLinkFormProps) {
  const [name, setName] = useState("");


  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 items-center sm:items-start">
      <PrefixInput 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        className="w-full sm:w-auto p-2"
      />
      <Button 
        text="Criar" 
        onClick={handleCreate} 
        className="w-full sm:w-auto " 
      />
    </div>
  );
}

