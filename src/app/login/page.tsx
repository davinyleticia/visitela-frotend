"use client";
import { Login } from "@/components/organisms/Login";
import Headers from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

export default function RedefinirSenhaPage() {
  return (
    <>
      <Headers />
      <main className="min-h-screen bg-white flex items-center justify-center px-4">
        <Login />
      </main>
      <Footer />
    </>
  );
}
