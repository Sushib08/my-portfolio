import React from "react";
import { fredoka } from "../../fonts/fonts";

const Technos = ({ technos }) => {
  return (
    <div className="flex flex-wrap lg:flex-row gap-4 pt-6 pb-12">
      {technos.map((techno, index) => (
        <button
          key={index}
          className={`${fredoka.className} bg-[#eae7e7] text-sm lg:text-[1.1rem] cursor-default border px-4 py-2 rounded-lg shadow-lg text-violet-700`}
        >
          {techno}
        </button>
      ))}
    </div>
  );
};

export default Technos;
