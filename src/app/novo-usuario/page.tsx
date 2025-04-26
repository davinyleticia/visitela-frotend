"use client";
import { Footer } from "@/components/organisms/Footer";
import Headers from "@/components/organisms/Header";
import { NewUsernameForm } from "@/components/organisms/NewUsernameForm";

export default function CadastroPage() {
  return (
    <>
      <Headers />
      <main className="min-h-screen bg-white flex items-center justify-center px-4">
        <NewUsernameForm />
      </main>
      <Footer />
    </>
  );
}
