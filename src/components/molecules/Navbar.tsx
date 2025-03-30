import NavItem from "../atoms/Navbar";

export default function Navbar() {
  return (
    <nav className="flex space-x-4">
      <NavItem text="🏠 Home" />
      <NavItem text="🔍 Me Visitela" />
      <NavItem text="📙 Sobre" />
    </nav>
  );
}