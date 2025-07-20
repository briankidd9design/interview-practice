import React from "react";
// import "./index.css";
// import clsx from "clsx";
import "./index.css";
const Button = ({
  variant = "primary",
  onClick,
  disabled = false,
  children,
  ...props
}) => {
  // Define variant styles
  const variantStyles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white border border-blue-600",
    secondary:
      "bg-gray-600 hover:bg-gray-700 text-white border border-gray-600",
    outline:
      "bg-transparent hover:bg-blue-50 text-blue-600 border border-blue-600",
    danger: "bg-red-600 hover:bg-red-700 text-white border border-red-600",
    success:
      "bg-green-600 hover:bg-green-700 text-white border border-green-600",
    ghost:
      "bg-transparent hover:bg-gray-100 text-gray-700 border border-transparent",
  };

  // Base styles that apply to all variants
  const baseStyles =
    "px-4 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Disabled styles
  const disabledStyles = "opacity-50 cursor-not-allowed hover:bg-current";

  // Combine styles
  const buttonClasses = `
    ${baseStyles}
    ${variantStyles[variant] || variantStyles.primary}
    ${disabled ? disabledStyles : ""}
  `.trim();

  return (
    <button
      className={buttonClasses}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
