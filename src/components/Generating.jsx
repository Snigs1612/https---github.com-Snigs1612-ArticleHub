import React from "react";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4" src='./src/assets/loading.png' alt="Loading" />
      Your article is being generated...
    </div>
  );
};

export default Generating;