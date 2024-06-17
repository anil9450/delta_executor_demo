import React from "react";

interface ButtonProps {
  children: React.ReactElement;
}

const Button: React.FunctionComponent<ButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
