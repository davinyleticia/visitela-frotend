"use client";
import { NewPasswordForm  } from "@/components/organisms/NewPasswordForm";
import Headers from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

export default function NewPassword() {
  return (
    <>
      <Headers />
      <main className="min-h-screen bg-white flex items-center justify-center px-4">
        <NewPasswordForm  />
      </main>
      <Footer />
    </>
  );
}