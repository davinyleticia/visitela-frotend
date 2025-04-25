"use client";
import { FooterContent } from "../molecules/FooterContent";


export const Footer: React.FC = () => { 
  const handleHome = () => {
    window.location.href = "/";
  };
  
  return (
  <footer className=" py-4 bg-white text-center mx-auto max-w-7xl">
    <FooterContent onClick={handleHome} />
  </footer>
)};
