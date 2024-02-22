import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="lg:text-2xl border border-slate-700 px-4 py-2 rounded-md hover:text-[#eae7e7] hover:bg-violet-700"
    >
      {text}
    </button>
  );
};

export default Button;
