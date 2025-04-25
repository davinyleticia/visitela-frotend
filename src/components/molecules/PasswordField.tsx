import { Input } from "@/components/atoms/Input";

export const PasswordField = () => (
  <div className="mb-4">
    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
      Senha
    </label>
    <Input id="password" placeholder="Senha" />
  </div>
);