import { TitleSign } from "@/components/atoms/TitleSign";
import { Text } from "@/components/atoms/Text";
import { ButtonBlack } from "@/components/atoms/ButtonBlack";
import Link from "next/link";
import { InputField } from "../molecules/InputField";
import { useState } from "react";

export const NewUsernameForm = () => {

  const [username, setUsername] = useState("");
  
  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // proximo url
    window.location.href = `/criar-conta?username=${username}`;
  };
  
  return(
      <div className="w-full max-w-md mx-auto mt-16 px-4 py-6 sm:p-6 border border-gray-200 rounded-lg shadow-sm">
    <TitleSign>Bem-vindo!</TitleSign>
    <Text>
      Escolha seu nome de usuário, você pode alterar depois se quiser.
    </Text>
    <form>
      <InputField
        id="username"
        label="Nome de usuário"
        placeholder="Visite.la/nomedeusuário"
      />
      <ButtonBlack onClick={handlePrev}>Continuar</ButtonBlack>
    </form>
    <div className="text-center mt-4">
      <Link href="/login" className="text-sm text-black underline">
        Voltar para a área de Login
      </Link>
    </div>
  </div>
  )};
