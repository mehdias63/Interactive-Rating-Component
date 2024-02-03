import React from "react";

export default function Rate({ text }) {
  return (
    <div className="w-9 h-9 rounded-full bg-dark-blue flex justify-center items-center text-light-gray hover:bg-orange hover:text-white cursor-pointer">
      {text}
    </div>
  );
}
