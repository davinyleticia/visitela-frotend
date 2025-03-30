import Image from "next/image";
import ShortLinkForm from "../molecules/ShortLinkForm";

export default function Hero() {
  return (
    <div className=" bg-white">
      <div className="flex flex-row items-center justify-center max-w-7xl py-40 mx-auto px-1">
        <div>
          <h1 className="text-5xl font-bold mb-4">Venha aconchegar no nosso servidor, ter o seu espaço online</h1>
          <p className="text-3xl mb-8">
          Se junta ao universo visitela, com o seu: nome, comércio, banda, influencer e partilhe com quem quiser.
          </p>
          <ShortLinkForm />
        </div>
        <Image src="/pc-start.svg"  width={500} height={60} alt="Visite.la"/>
      </div>
    </div>
  );
}
