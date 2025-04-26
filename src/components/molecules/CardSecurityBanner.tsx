import Button from "../atoms/Button";
import { IconDafult } from "../atoms/IconDafult";

export const CardSecurityBanner = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-100 to-red-100 p-6 rounded-lg flex flex-col items-start relative">
      <div className="absolute top-2 right-2">
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div> {/* Placeholder para avatar */}
      </div>
      <div className="mb-4">
        <IconDafult name="lock" />
      </div>
      <h2 className="text-lg font-bold mb-2">Proteja seus links e garanta a segurança dos seus dados</h2>
      <p className="text-sm mb-4">Experimente nossa solução de autenticação única com usuário e senha.</p>
      <Button>Quero me proteger</Button>
    </div>
  );
};
