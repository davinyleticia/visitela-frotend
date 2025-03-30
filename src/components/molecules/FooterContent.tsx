import  Logo  from "../atoms/Logo";
import { Copyright } from "../atoms/Copyright";

export const FooterContent: React.FC = () => (
  <div className="flex justify-between items-center w-full p-4">
    <Logo  />
    <Copyright />
  </div>
);