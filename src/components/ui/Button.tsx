"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";
type ButtonType = "primary" | "outlined";
type ButtonProps = {
  children: ReactNode;
  type?: ButtonType;
};
const Button: FC<ButtonProps> = ({ children, type = "primary" }) => {
  const [btnType, setBtnType] = useState<string>();

  useEffect(() => {
    const typeHandler = () => {
      let style: string = "";
      switch (type) {
        case "primary":
          style = "bg-primary-blue text-white";
          break;
        case "outlined":
          style = "text-gray-600 border-gray-500  border-2";
          break;
        default:
          style = "text-gray-600 bg-gray-200";
          break;
      }
      setBtnType(style);
    };
    typeHandler();
  }, [type]);
  return (
    <button className={`px-8 py-2 rounded-full ${btnType}`}>{children}</button>
  );
};

export default Button;
