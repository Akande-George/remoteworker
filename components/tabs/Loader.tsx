import React from "react";

const Loader: React.FC = () => (
  <div className="flex justify-center items-center h-[300px]">
    <svg
      className="animate-spin"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <circle
        className="opacity-20"
        cx="24"
        cy="24"
        r="20"
        stroke="#E9358F"
        strokeWidth="6"
      />
      <path
        d="M44 24c0-11.046-8.954-20-20-20"
        stroke="#E9358F"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

export default Loader;
