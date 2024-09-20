import React from "react";

interface ProgressProps {
  value: number;
  className?: string;
}

const Progress: React.FC<ProgressProps> = ({ value, className }) => {
  return (
    <div
      className={`w-full bg-gray-200 rounded-lg h-1 overflow-hidden ${className}`}
    >
      <div
        className="bg-black h-full transition-all duration-300 ease-linear"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default Progress;
