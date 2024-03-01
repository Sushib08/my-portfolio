import React from "react";
import projectsData from "../data/projectsData.json";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/sections/Header"));
const Footer = dynamic(() => import("../components/sections/Footer"));
const TitlePage = dynamic(() => import("../components/elements/TitlePage"));
const Project = dynamic(() => import("../components/elements/Project"));

const Projects = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="py-8 px-3">
        <TitlePage title="PROJETS" />
        <p className="text-slate-700 px-12 lg:text-lg text-[0.8rem] pt-8 pb-8 text-center">
          Explorez mes projets, où je présente mes réalisations personnelles
          ainsi que les travaux effectués lors de mes études, dans le but de
          renforcer mes compétences.
        </p>
        {Object.keys(projectsData).map((key) => (
          <Project
            key={key}
            link={`/projects/${key}`}
            title={projectsData[key].title}
            desc={projectsData[key].desc}
            src={projectsData[key].src}
            alt={projectsData[key].alt}
            isReverse={projectsData[key].isReverse}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
