import React from "react";

interface PillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 text-sm rounded-full border ${
        isActive ? "bg-blue-600 text-white" : "bg-white text-gray-700"
      } hover:shadow-md transition`}
    >
      {label}
    </button>
  );
};

export default Pill;
