"use client";
import Image from "next/image";
import React from "react";
import { fredoka } from "../../fonts/fonts";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const Project = ({ link, title, desc, src, alt, isReverse }) => {
  return (
    <Fade cascade>
      <div
        className={` lg:py-16 pt-8 pb-6 px-12 flex justify-center items-center gap-12 lg:flex-row flex-col${
          isReverse ? "" : "-reverse"
        }`}
      >
        {!isReverse ? (
          <Link href={link}>
            <Image
              className="shadow-lg transition-transform duration-300 transform hover:scale-105"
              src={src}
              width={900}
              height={900}
              alt={alt}
            />
          </Link>
        ) : null}
        <div className="lg:w-[50%]">
          <h3
            className={`${fredoka.className} text-violet-700 lg:text-[2rem] text-lg font-bold pb-4 `}
          >
            {title}
          </h3>
          <p className=" text-slate-700 text-[0.8rem] lg:text-[1rem]">{desc}</p>
        </div>
        {isReverse ? (
          <Link href={link}>
            <Image
              className="shadow-lg transition-transform duration-300 transform hover:scale-105"
              src={src}
              width={900}
              height={900}
              alt={alt}
            />
          </Link>
        ) : null}
      </div>
    </Fade>
  );
};

export default Project;
