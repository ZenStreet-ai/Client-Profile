import React from "react";
import "./Progress.css"; // Import the CSS file for styling

interface ProgressProps {
  value: number;
  className?: string;
}

const Progress: React.FC<ProgressProps> = ({ value, className }) => {
  return (
    <div className={`progress-bar-container ${className}`}>
      <div className="progress-bar-fill" style={{ width: `${value}%` }}></div>
    </div>
  );
};

export default Progress;
