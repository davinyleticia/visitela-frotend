"use client"
import { SignupForm } from "@/components/organisms/SignupForm/SignupForm";
import Headers from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

export default function CadastroPage() {
  return (
    <>
      <Headers />
      <main className="min-h-screen bg-white flex items-center justify-center px-4">
        <SignupForm />
      </main>
      <Footer />
    </>
  );
}
