"use client";
import React, { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const MainButton: FC<ButtonProps> = ({ children, className = "", }) => {
  return (
    <button
      className={` rounded-[62px] bg-main  text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default MainButton;
