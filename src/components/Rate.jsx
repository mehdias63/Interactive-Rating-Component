import React from "react";

export default function Rate({ text, onClick, isSelected }) {
  return (
    <div
      className={`${
        isSelected
          ? "bg-light-gray , text-white"
          : "bg-dark-blue text-light-gray"
      } w-9 h-9 lg:w-[3.1875rem] lg:h-[3.1875rem] rounded-full bg-dark-blue flex justify-center items-center text-light-gray hover:bg-orange hover:text-white cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
