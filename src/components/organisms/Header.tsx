import Logo from "../atoms/Logo";
import Navbar from "../molecules/Navbar";
import Button from "../atoms/Button";

export default function Header() {
 
    const handleCreate = () => {
        console.log("Criando link:", `Visite.la/${name}`);
      };

    const handleSingUp = () => {
        console.log("Criando link:", `Visite.la/${name}`);
      };
 
 
    return (
    <header className="bg-white mx-auto max-w-7xl p-2">
    <div className="flex justify-between items-center p-4">
      <Logo />
      <Navbar />
      <div className="flex space-x-2">
        <Button text="Iniciar sessão" variant="outline" onClick={handleSingUp} />
        <Button text="Inscreva-se gratuitamente" onClick={handleCreate} />
      </div>
      </div>
    </header>
  );
}