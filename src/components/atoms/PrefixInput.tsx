import React, { ChangeEvent } from "react";

interface PrefixInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
  
  export default function PrefixInput({ value, className, onChange }: PrefixInputProps) {
    return (
      <div className="flex border border-gray-300 rounded-md overflow-hidden">
        <span className="bg-gray-100 px-3 flex items-center text-gray-500">Visite.la/</span>
        <input 
          type="text" 
          value={value} 
          onChange={onChange} 
          className={`prefix-input ${className}`} 
        />
      </div>
    );
  }