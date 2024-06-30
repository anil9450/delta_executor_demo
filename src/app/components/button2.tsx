import React from "react";

interface Button2Props {
  children: React.ReactElement;
}

const Button2: React.FunctionComponent<Button2Props> = ({ children }) => {
  return (
    <button>
      <a
        className="bg-[#0054ae] p-3 rounded-lg w-full max-w-52 hover:bg-sky-300
         hover:text-black flex space-x-4 items-center justify-center"
        href="deltaexploit"
      >
        {children}
      </a>
    </button>
  );
};

export default Button2;
