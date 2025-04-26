import { TitleSign } from "@/components/atoms/TitleSign";
import { Text } from "@/components/atoms/Text";
import { ButtonBlack } from "@/components/atoms/ButtonBlack";
import Link from "next/link";
import { InputField } from "../molecules/InputField";

export const NewPasswordForm = () => (
  <div className="w-full max-w-md mx-auto mt-16 px-4 py-6 sm:p-6 border border-gray-200 rounded-lg shadow-sm">
    <TitleSign>Crie uma senha</TitleSign>
    <Text>Escolha senha forte com pelo menos 8 caracteres.</Text>
    <form>
      <InputField
        id="senha"
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
      />
      <InputField
        id="confirmar"
        label="Repetir senha"
        type="password"
        placeholder="Confirme sua senha"
      />
      <ButtonBlack type="submit">Continuar</ButtonBlack>
    </form>
    <div className="text-center mt-4">
      <Link href="/login" className="text-sm text-black underline">
        Voltar para a área de Login
      </Link>
    </div>
  </div>
);
