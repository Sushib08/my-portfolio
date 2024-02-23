import React from "react";

const Button = ({ text, onClick, type, value }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      value={value}
      className="lg:text-2xl border shadow-md border-slate-700 sha px-4 py-2 rounded-md hover:text-[#eae7e7] hover:bg-violet-700"
    >
      {text}
    </button>
  );
};

export default Button;
