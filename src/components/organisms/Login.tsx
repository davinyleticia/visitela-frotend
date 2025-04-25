import { TitleSign } from "@/components/atoms/TitleSign";
import { Text } from "@/components/atoms/Text";
import { UsernameField } from "@/components/molecules/UsernameField";
import { ButtonBlack } from "@/components/atoms/ButtonBlack";
import Link from "next/link";
import { PasswordField } from "../molecules/PasswordField";

export const Login = () => (
  <div className="w-full max-w-md mx-auto mt-16 px-4 py-6 sm:p-6 border border-gray-200 rounded-lg shadow-sm">
    <TitleSign>Faça login com sua conta</TitleSign>
    <Text>Por favor, insira seus dados.</Text>
    <form>
      <UsernameField />
      <PasswordField />
      <div className="text-center m-4">
        <Link href="/redefinir-senha" className="text-sm text-black underline">
          Esqueceu senha
        </Link>
      </div>
      <ButtonBlack type="submit">Login</ButtonBlack>
    </form>
    <div className="text-center mt-4">
      Não tem uma conta?{" "}
      <Link href="/criar-conta" className="text-sm text-black underline">
        Inscrever-se
      </Link>
    </div>
  </div>
);
