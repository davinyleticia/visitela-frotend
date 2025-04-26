"use client";
import { useState } from "react";
import { ProfileCard } from "@/components/organisms/ProfileCard";
import { ShareModal } from "@/components/organisms/ShareModal";


export default function PerfilPage() {

  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <ProfileCard setOpenShare={setOpen}/>
      <ShareModal visible={open} onClose={() => setOpen(false)} />
    </main>
  );
}