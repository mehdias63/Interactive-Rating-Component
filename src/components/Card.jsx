import React from "react";
import Rate from "./Rate";

export default function Card() {
  return (
    <div className="flex flex-col gap-4 text-white bg-light-black justify-center items-center w-[25.75rem] p-4 font-over">
      <div className="self-start w-12 h-12 bg-dark-blue flex justify-center items-center rounded-full">
        <img src="/images/icon-star.svg" />
      </div>
      <h1 className="self-start">How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex gap-3">
        <Rate text="1" />
        <Rate text="2" />
        <Rate text="3" />
        <Rate text="4" />
        <Rate text="5" />
      </div>
      <button>SUBMIT</button>
    </div>
  );
}
