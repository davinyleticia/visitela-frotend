// tag de cor fundo #FEF3F2 e texto #B42318 e borda redonda 16px

import React from "react";
import { useMemo } from "react";

interface TagProps {
  text: string;
  className?: string;
}

const TagFeature: React.FC<TagProps> = ({ text, className }) => {
  
  const tagStyles = useMemo(() => {
    return `bg-[#FEE3E7] text-[#B42321] rounded-[16px] px-4 py-2 my-3 flex items-center ${className}`;
}, [className]);
  
  return (
    <div className={tagStyles}>
      <span>{text}</span>
    </div>
  );
};
export default TagFeature;
