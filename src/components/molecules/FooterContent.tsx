import Logo from "../atoms/Logo";
import { Copyright } from "../atoms/Copyright";

interface FooterContentProps {
  onClick: () => void;
}

export const FooterContent: React.FC<FooterContentProps> = ({ onClick }) => (
  <div className="flex flex-col sm:flex-row justify-between items-center w-full p-4 gap-4 sm:gap-0">
    <Logo src="/logo.svg" alt="Logo" height={100} width={100} onClick={onClick} className="cursor-pointer" />
    <Copyright />
  </div>
);
