import Image from "next/image";


export const Avatar = ({ src, alt }: { src: string; alt: string }) => (
    <Image width={50} height={50} src={src} alt={alt} className="rounded-full object-cover" />
);