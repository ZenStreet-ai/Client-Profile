import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Toast } from "./ui/toast";

interface CustomInputProps {
  label: string;
  placeholder?: string;
  error?: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder = "",
  error,
  value,
  onChange,
  type = "text",
}) => {
  return (
    <div className="space-y-2">
      <Label className="text-gray-700 font-semibold">{label}</Label>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          ${error ? "border-red-500" : "border-gray-300"}`}
      />
      {error && <Toast className="text-red-500 text-sm">{error}</Toast>}
    </div>
  );
};

export default CustomInput;
