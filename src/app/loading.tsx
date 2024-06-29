import React from "react";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 z-10">
      <ClipLoader color="#2f80ed" />
    </div>
  );
};

export default Loading;
