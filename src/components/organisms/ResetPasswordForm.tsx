import { TitleSign } from "@/components/atoms/TitleSign";
import { Text } from "@/components/atoms/Text";
import { ButtonBlack } from "@/components/atoms/ButtonBlack";
import Link from "next/link";
import { InputField } from "../molecules/InputField";

export const ResetPasswordForm = () => (
  <div className="w-full max-w-md mx-auto mt-16 px-4 py-6 sm:p-6 border border-gray-200 rounded-lg shadow-sm">
    <TitleSign>Redefinir senha</TitleSign>
    <Text>
      Se você se inscreveu com um nome de usuário e senha, redefina sua senha
      abaixo.
    </Text>
    <form>
       <InputField id="username" label="Nome de usuário" placeholder="Visite.la/nomedeusuário" />
      <ButtonBlack type="submit">Redefinir senha</ButtonBlack>
    </form>
    <div className="text-center mt-4">
      <Link href="/login" className="text-sm text-black underline">
        Voltar para a área de Login
      </Link>
    </div>
  </div>
);
