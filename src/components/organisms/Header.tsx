import { useState } from "react";
import Logo from "../atoms/Logo";
import Navbar from "../molecules/Navbar";
import Button from "../atoms/Button";
import { useRouter } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/login");
  };
  const handleCreate = () => {
    router.push("/");
  };

  const handleHome = () => {
    router.push("/");
  };

  const handleMeVisite = () => {
    router.push("/mevisitela");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white w-full shadow-sm">
      <div className="mx-auto max-w-7xl p-4 flex justify-between items-center">
        <Logo src="/logo.svg" alt="Logo" height={100} width={100} onClick={handleHome} />

        {/* Botão de menu mobile */}
        <button
          className="sm:hidden text-2xl text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Navbar em telas maiores */}
        <nav className="hidden sm:block">
          <Navbar handleHome={handleHome} handleMeVisite={handleMeVisite} />
        </nav>

        {/* Ações em telas maiores */}
        <div className="hidden sm:flex space-x-2">
          <Button
            text="Iniciar sessão"
            variant="outline"
            onClick={handleSignUp}
          />
          <Button text="Inscreva-se gratuitamente" onClick={handleCreate} />
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-4">
          <Navbar mobile={true} handleHome={handleHome} handleMeVisite={handleMeVisite}/>
          <div className="flex flex-col space-y-2">
            <Button
              text="Iniciar sessão"
              variant="outline"
              onClick={handleSignUp}
            />
            <Button text="Inscreva-se gratuitamente" onClick={handleCreate} />
          </div>
        </div>
      )}
    </header>
  );
}
