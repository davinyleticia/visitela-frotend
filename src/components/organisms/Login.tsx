import { TitleSign } from "@/components/atoms/TitleSign";
import { Text } from "@/components/atoms/Text";
import { ButtonBlack } from "@/components/atoms/ButtonBlack";
import Link from "next/link";
import { InputField } from "../molecules/InputField";

export const Login = () => (
  <div className="w-full max-w-md mx-auto mt-16 px-4 py-6 sm:p-6 border border-gray-200 rounded-lg shadow-sm">
    <TitleSign>Faça login com sua conta</TitleSign>
    <Text>Por favor, insira seus dados.</Text>
    <form>
      <InputField id="username" label="Nome de usuário" placeholder="Visite.la/nomedeusuário" />
      <InputField id="senha" label="Senha" type="password" placeholder="Digite sua senha" />
      <div className="text-center m-4">
        <Link href="/redefinir-senha" className="text-sm text-black underline">
          Esqueceu senha
        </Link>
      </div>
      <ButtonBlack type="submit">Login</ButtonBlack>
    </form>
    <div className="text-center mt-4">
      Não tem uma conta?{" "}
      <Link href="/novo-usuario" className="text-sm text-black underline">
        Inscrever-se
      </Link>
    </div>
  </div>
);
