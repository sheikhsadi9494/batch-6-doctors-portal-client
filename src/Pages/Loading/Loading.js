import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="min-h-screen">
        <div className="w-2/4 md:w-1/4 mx-auto mt-40">
          <progress className="progress progress-primary w-full mx-auto"></progress>
          <p className="text-center font-bold text-xl">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
