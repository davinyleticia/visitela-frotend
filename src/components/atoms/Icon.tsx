import Image from "next/image";


interface IconProps {
    icon: string;
  }
  
  export const Icon: React.FC<IconProps> = ({ icon }) => <span className="text-xl"><Image src={icon} alt="" width={60} height={40} /></span>;
  