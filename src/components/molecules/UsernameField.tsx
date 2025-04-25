import { Input } from "@/components/atoms/Input";

export const UsernameField = () => (
  <div className="mb-4">
    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
      Nome de usuário
    </label>
    <Input id="username" placeholder="Visite.la/nomedeusuário" />
  </div>
);