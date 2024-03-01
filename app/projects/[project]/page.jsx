import React from "react";
import Header from "../../components/sections/Header";
import Footer from "../../components/sections/Footer";
import projectsData from "../../data/projectsData.json";
import Image from "next/image";
import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { fredoka } from "../../fonts/fonts";
import Technos from "../../components/elements/Technos";
import Button from "../../components/elements/Button";

const Project = ({ params }) => {
  const { project } = params;
  const projectData = projectsData[project];

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="py-8">
        <div className="px-12 pb-16 lg:px-24">
          <h2
            className={`${fredoka.className} text-center lg:text-[3rem] py-6 text-[1.5rem] text-slate-700`}
          >
            {projectData.title.toUpperCase()}
          </h2>
          <Image
            className="ml-auto mr-auto shadow-md"
            width={1600}
            height={1600}
            src={projectData.src}
            alt={projectData.alt}
          />
        </div>
        <div className="flex flex-col gap-4 lg:pt-12 px-12 lg:px-24 bg-white w-full mb-[-5vh]">
          <h3
            className={`${fredoka.className} text-center text-[1.5rem] pb-8 lg:text-[2.5rem] text-violet-700 lg:pb-2`}
          >
            APERÇU DU PROJET{" "}
          </h3>
          <h4 className="text-slate-700 lg:text-[2rem] text-[1.2rem] font-bold">
            Description :
          </h4>
          <p className=" text-slate-700 text-[0.7rem] py-4 lg:text-[1rem]">
            {projectData.desc}
          </p>
          <h4 className="text-slate-700 lg:text-[2rem] text-[1.2rem] font-bold">
            Objectif :
          </h4>
          <p className=" text-slate-700 text-[0.7rem] py-4 lg:text-[1rem]">
            {projectData.aim}
          </p>
          <h4 className="text-slate-700 lg:text-[2rem] text-[1.2rem] font-bold">
            Technologies :
          </h4>
          <Technos technos={projectData.technos} />
          <h4 className="text-slate-700 lg:text-[2rem] text-[1.2rem] font-bold">
            Lien(s) :
          </h4>
          <div className=" flex lg:flex-row flex-col gap-4 py-8">
            {projectData.links &&
              Array.isArray(projectData.links) &&
              projectData.links.map((link, index) => (
                <Link href={link.url} key={index}>
                  <Button text={link.text} />
                </Link>
              ))}
          </div>

          <Link
            href="/projects"
            className={`${fredoka.className} text-normal lg:text-[1.5rem] pt-8 pb-12 text-slate-700 flex gap-2 hover:text-violet-700 ml-auto`}
          >
            <ArrowUturnLeftIcon className="w-4 lg:w-6" /> Revenir en arrière
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Project;
