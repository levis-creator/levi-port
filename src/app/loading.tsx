import React from "react";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <ClipLoader color="#2f80ed" />
    </div>
  );
};

export default Loading;
