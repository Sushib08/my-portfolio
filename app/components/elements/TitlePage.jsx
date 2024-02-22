import React from "react";
import { fredoka } from "../../fonts/fonts";

const TitlePage = ({ title }) => {
  return (
    <h2
      className={`${fredoka.className} text-center lg:text-[3rem] text-[1.5rem] text-slate-700`}
    >
      {title}
    </h2>
  );
};

export default TitlePage;
