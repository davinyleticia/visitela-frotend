export const Avatar = ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} className="w-20 h-20 rounded-full object-cover" />
);