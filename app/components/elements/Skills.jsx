"use client";
import Image from "next/image";
import React from "react";
import { fredoka, roboto } from "../../fonts/fonts";
import { Fade } from "react-awesome-reveal";

const Skills = (props) => {
  const { src, alt, title, lists } = props;

  return (
    <div>
      <Fade cascade>
        <h3
          className={`${fredoka.className} text-center lg:text-[2.5rem] text-violet-700 pb-2`}
        >
          {title}
        </h3>
        <Image className="pb-8" src={src} width={200} height={200} alt={alt} />
        <div className="pb-6">
          {lists.map((list, index) => (
            <div key={index} className="flex flex-col">
              {list.items.map((item, itemIndex) => (
                <span
                  className={`${roboto.className} text-center pl-4 border-l-4 font-bold text-slate-700 border-violet-700 lg:text-[1.5rem]`}
                  key={itemIndex}
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default Skills;
