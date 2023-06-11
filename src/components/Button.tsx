import React from "react";

interface buttonState {
  className: string;
  title: string | React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<buttonState> = ({ className, title, onClick }) => {
  return (
    <button
      className={"rounded-md px-5 py-3 uppercase text-white ".concat(className)}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
