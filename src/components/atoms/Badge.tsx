import React from "react";

interface BadgeProps {
  label: string;
}

export const Badge = ({ label }: BadgeProps) => {
  return (
    <span className="bg-gray-300 text-gray-800 text-xs font-bold px-2 py-1 rounded">
      {label}
    </span>
  );
};