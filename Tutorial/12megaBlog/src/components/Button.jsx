// It is a common button UI
import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} ${type}`}
      {...props}
    >
      {children}
    </button>
  );
}
{
  /* we use props to receive properties from user if any they want*/
}
