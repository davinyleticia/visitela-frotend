import Image from 'next/image';
import React from 'react';

interface ImgCustomProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}
const ImgCustom: React.FC<ImgCustomProps> = ({ src, alt, width, height, className }) => {

  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
};
export default ImgCustom;