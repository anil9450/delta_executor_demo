"use client";
import React from "react";
import Image from "next/image";

const Popup = () => {
  return (
    <div className="p-24 max-w-4xl mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        <Image
          width={300}
          height={150}
          className="h-12 w-12"
          src="/Image/logo.svg"
          alt="Add Logo Pase Here"
        />
      </div>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-slate-500">You have a new message!</p>
      </div>
    </div>
  );
};

export default Popup;
