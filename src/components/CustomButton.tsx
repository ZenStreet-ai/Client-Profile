import React from "react";
import { Button, type ButtonProps } from "./ui/button";
import clsx from "clsx";

interface CustomButtonProps extends ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "primary" | "secondary" | "lg";
  active?: boolean;
}

const CustomButton = (props: CustomButtonProps) => {
  const { variant, size, active = true, children, ...rest } = props;
  const baseStyles = "transition-colors duration-200 ease-in-out";
  const activeStyles = active
    ? ""
    : "bg-gray-300 text-gray-500 cursor-not-allowed";

  return (
    <Button
      className={clsx(baseStyles, activeStyles)}
      variant={variant}
      size={size}
      {...rest}
      disabled={!active}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
