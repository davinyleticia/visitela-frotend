import Logo from "../atoms/Logo";
import { Copyright } from "../atoms/Copyright";

export const FooterContent: React.FC = () => (
  <div className="flex flex-col sm:flex-row justify-between items-center w-full p-4 gap-4 sm:gap-0">
    <Logo />
    <Copyright />
  </div>
);
