import Image from "next/image";

export default function Logo() {
    return (
      <Image src="/logo.svg" alt="Visite.la"  width={100} height={10} className="h-8" />
    );
  }