import React from "react";

interface InputToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const InputToggle = ({ checked, onChange }: InputToggleProps) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input 
        type="checkbox" 
        className="sr-only peer" 
        checked={checked} 
        onChange={(e) => onChange(e.target.checked)} 
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition"></div>
    </label>
  );
};