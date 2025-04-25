import Image from "next/image";


export const Avatar = ({ src, alt }: { src: string; alt: string }) => (
    <Image width={250} height={250} src={src} alt={alt} className="rounded-full object-cover" />
);