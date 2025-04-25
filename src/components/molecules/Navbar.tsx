import React from "react";
import NavItem from "../atoms/Navbar";

interface NavbarType {
  mobile?: boolean; 
  handleHome: () => void;
  handleMeVisite: () => void;
}

const Navbar: React.FC<NavbarType> = ({ mobile = false, handleHome, handleMeVisite}) => {
  return (
    <>
      {mobile ? (
        <nav className="flex flex-col space-x-4">
          <NavItem onClick={handleHome} text="🏠 Home" />
          <NavItem onClick={handleMeVisite} text="🔍 Me Visitela" />
          <NavItem text="📙 Sobre" />
        </nav>
      ) : (
      <nav className="flex space-x-4">
        <NavItem onClick={handleHome} text="🏠 Home" />
        <NavItem text="🔍 Me Visitela" />
        <NavItem text="📙 Sobre" />
      </nav>)}
    </>
  );
}

export default Navbar