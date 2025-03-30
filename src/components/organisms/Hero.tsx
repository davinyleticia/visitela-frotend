import Image from "next/image";
import ShortLinkForm from "../molecules/ShortLinkForm";

export default function Hero() {
  return (
    <div className=" bg-white">
      <div className="flex flex-row items-center justify-center max-w-7xl py-40 mx-auto px-1">
        <div>
          <h1 className="text-4xl font-bold mb-4">Lorem ipsum dolor sit amet consectetur.</h1>
          <p className="text-lg mb-8">
          Lorem ipsum dolor sit amet consectetur. Nascetur nisl et sodales non aliquet vel blandit. In eu blandit eu commodo. Ut aliquam id in porta amet. Eget egestas.
          </p>
          <ShortLinkForm />
        </div>
        <Image src="/pc-start.svg"  width={500} height={60} alt="Visite.la"/>
      </div>
    </div>
  );
}
