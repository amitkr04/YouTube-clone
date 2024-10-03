import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen relative">
      {/* Spinner moving in a circular path */}
      <div className="relative w-30 h-30">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-500 animate-orbit"></div>
      </div>
      {/* Loading Text */}
      <span className="mt-0 text-2xl font-semibold text-gray-700 absolute bottom-10">
        Loading...
      </span>
    </div>
  );
}

export default Loading;
