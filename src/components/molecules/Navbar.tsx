import NavItem from "../atoms/Navbar";

export default function Navbar({ mobile = false }) {
  return (
    <>
      {mobile ? (
        <nav className="flex flex-col space-x-4">
          <NavItem text="🏠 Home" />
          <NavItem text="🔍 Me Visitela" />
          <NavItem text="📙 Sobre" />
        </nav>
      ) : (
      <nav className="flex space-x-4">
        <NavItem text="🏠 Home" />
        <NavItem text="🔍 Me Visitela" />
        <NavItem text="📙 Sobre" />
      </nav>)}
    </>
  );
}
