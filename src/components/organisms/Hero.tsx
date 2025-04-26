import Image from "next/image";
import ShortLinkForm from "../molecules/ShortLinkForm";
import { useRouter } from 'next/navigation';

export default function Hero() {

    const router = useRouter();
  
    const handleCreate = () => {
      router.push('/criar-conta?username=');
    };

  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-4 py-20 gap-10">
        
        {/* Texto e formulário */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Venha se aconchegar no nosso servidor e tenha seu espaço online!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">
          Se junta ao universo visitela, com o seu: nome, comércio, banda, influencer e partilhe com quem quiser.
          </p>
          <ShortLinkForm handleCreate={handleCreate}/>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/pc-start.svg"
            width={500}
            height={400}
            alt="Visite.la"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg"
          />
        </div>
        
      </div>
    </div>
  );
}
