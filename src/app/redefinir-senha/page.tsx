"use client";
import { ResetPasswordForm } from "@/components/organisms/ResetPasswordForm";
import Headers from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

export default function RedefinirSenhaPage() {
  return (
    <>
      <Headers />
      <main className="min-h-screen bg-white flex items-center justify-center px-4">
        <ResetPasswordForm />
      </main>
      <Footer />
    </>
  );
}
