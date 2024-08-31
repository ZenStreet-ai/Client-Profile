import React from "react";
import { cn } from "@shadcn/ui";
import { Error } from "@shadcn/ui"; // Assuming these components are available in the library
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
        className={cn(
          "border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500",
          error ? "border-red-500" : "border-gray-300"
        )}
      />
      {error && <Error className="text-red-500 text-sm">{error}</Error>}
    </div>
  );
};

export default CustomInput;
