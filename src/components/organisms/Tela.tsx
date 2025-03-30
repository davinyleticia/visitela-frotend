import Image from "next/image";

export const Tela: React.FC = () => (
    <div className="bg-white mx-auto max-w-7xl p-2">
        <Image src="/tela-start.svg" alt="Tela" width={100} height={100} className="w-full h-auto" />
    </div>
);