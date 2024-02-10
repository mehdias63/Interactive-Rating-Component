import React, { useState } from "react";
import Rate from "./Rate";

export default function Card() {
  const [isSubmited, setIsSubmited] = useState(false);
  const [rating, setRating] = useState(0);
  const [error, setError] = useState("");

  function handleSubmit() {
    if (rating === 0) {
      setError("Please select a rate first!");
      return;
    }
    setIsSubmited(true);
  }

  return (
    <div className="w-[20.4375rem] flex flex-col gap-4 text-white bg-light-black justify-center items-center lg:w-[25.75rem] p-4 font-over rounded-[0.9375rem] lg:rounded-[1.875rem] lg:p-6">
      {isSubmited ? (
        <>
          <div className="flex flex-col items-center justify-center">
            <img
              src="/images/illustration-thank-you.svg"
              alt="illustration"
              className="w-[9rem] h-[6rem] mb-4 lg:[10.125rem] lg:h-[6.75rem]"
            />
            <p className="text-orange bg-dark-blue px-2 py-1 rounded-full mt-4 text-sm lg:text-[0.9375rem] leading-[1.375rem] mb-4">
              You selected {rating} out of 5
            </p>
            <h1 className="text-2xl lg:text-[1.75rem] font-bold mt-4">
              Thank you!
            </h1>
            <p className="text-gray px-2 text-center mt-4 text-sm lg:text-[0.9375rem] leading-[1.375rem] lg:leading-6">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="self-start w-12 h-12 bg-dark-blue flex justify-center items-center rounded-full ">
            <img src="/images/icon-star.svg" alt="icon" />
          </div>
          <h1 className="self-start text-2xl lg:text-[1.75rem] font-bold lg:mt-4">
            How did we do?
          </h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex gap-5 lg:mt-2">
            <Rate
              text="1"
              onClick={() => setRating(1)}
              isSelected={rating === 1}
            />
            <Rate
              text="2"
              onClick={() => setRating(2)}
              isSelected={rating === 2}
            />
            <Rate
              text="3"
              onClick={() => setRating(3)}
              isSelected={rating === 3}
            />
            <Rate
              text="4"
              onClick={() => setRating(4)}
              isSelected={rating === 4}
            />
            <Rate
              text="5"
              onClick={() => setRating(5)}
              isSelected={rating === 5}
            />
          </div>
          <button
            className="w-[17.4375rem] h-[2.8125rem] lg:w-[21.3125rem] bg-orange font-bold text-sm lg:text-[0.9375rem] rounded-full mt-2 lg:mt-4 hover:bg-white hover:text-orange mb-4 "
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
          {error && <p className="text-orange text-sm">{error}</p>}
        </>
      )}
    </div>
  );
}
