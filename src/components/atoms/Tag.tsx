// tag de cor fundo #FEF3F2 e texto #B42318 e borda redonda 16px

import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useMemo } from "react";
import { useCallback } from "react";

interface TagProps {
  text: string;
  onDelete?: () => void;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ text, onDelete, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const tagRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const handleDelete = useCallback(() => {
    if (onDelete) {
      onDelete();
    }
  }, [onDelete]);

    const tagStyles = useMemo(() => {
        return `bg-[#FEE3E7] text-[#B42321] rounded-[16px] px-4 py-2 flex items-center ${className}`;
    }, [className]);

    return (

        <div
            ref={tagRef}
            className={tagStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span>{text}</span>
            {isHovered && (
                <button
                    className="ml-2 text-[#B42318] hover:text-red-500"
                    onClick={handleDelete}
                >
                    x
                </button>
            )}
        </div>
    );

}
export default Tag;