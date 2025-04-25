

export const Avatar = ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} className="w-50 h-50 rounded-full object-cover" />
);