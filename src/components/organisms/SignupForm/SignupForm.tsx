import { InputField } from "@/components/molecules/InputField";
import { SelectField } from "@/components/molecules/SelectField";
import { Checkbox } from "@/components/atoms/Checkbox";
import { ButtonBlack } from "@/components/atoms/ButtonBlack";
import { tiposConta } from "./data";

export const SignupForm = () => (
  <div className="w-full max-w-md mx-auto mt-16 px-4 py-6 sm:p-6 border border-gray-200 rounded-lg shadow-sm">
    <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">Junte-se ao Visite.la</h1>
    <p className="text-center text-gray-600 mb-4 text-sm">Inscreva-se gratuitamente!</p>

    <form>
      <InputField id="email" label="E-mail" type="email" placeholder="Digite seu e-mail" />
      <InputField id="username" label="Nome de usuário" placeholder="Visite.la/nomedeusuário" />
      <InputField id="nome" label="Nome completo" placeholder="Seu nome" />
      <InputField id="senha" label="Senha" type="password" placeholder="Digite sua senha" />
      <InputField id="confirmar" label="Repetir senha" type="password" placeholder="Confirme sua senha" />
      <SelectField id="tipo-conta" label="Tipo de conta" options={tiposConta} />
      <InputField id="cpf-cnpj" label="CPF ou CNPJ" placeholder="000.000.000-00 ou 00.000.000/0001-00" />

      <div className="flex items-start mb-4">
        <Checkbox id="ofertas" />
        <label htmlFor="ofertas" className="ml-2 text-sm text-gray-700">
          Aceito receber ofertas, novidades e atualizações da Visite.la
        </label>
      </div>

      <ButtonBlack type="submit">Criar conta</ButtonBlack>

      <p className="text-xs text-gray-600 text-center mt-4">
        Ao clicar em Criar conta, você concorda com os <a href="#" className="underline">Termos e Condições</a> e confirma que leu o nosso <a href="#" className="underline">Política de Privacidade</a>.
      </p>
    </form>
  </div>
);
