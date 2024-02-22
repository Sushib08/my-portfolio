import React from "react";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import Skills from "../components/elements/Skills";
import { fredoka } from "../fonts/fonts";
import Button from "../components/elements/Button";
import TitlePage from "../components/elements/TitlePage";
import Link from "next/link";

const About = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className=" py-6 flex flex-col gap-24">
        <div className="text-center flex flex-col px-12 gap-8">
          <TitlePage title="A PROPOS DE MOI" />
          <p className=" text-slate-700 lg:text-lg text-[0.8rem]">
            Après avoir occupé un poste de responsabilité dans le secteur de la
            vente alimentaire pendant une longue période, j'ai ressenti le
            besoin de me renouveler et de relever de{" "}
            <span className={`${fredoka.className} text-violet-700`}>
              Nouveaux Défis
            </span>
            . Passionné depuis toujours par l'
            <span className={`${fredoka.className}  text-violet-700`}>
              Informatique
            </span>
            , les jeux vidéo et les dernières avancées technologiques, j'ai
            entrepris pendant plus de deux ans une formation{" "}
            <span className={`${fredoka.className}  text-violet-700`}>
              Autodidacte
            </span>{" "}
            afin d'acquérir de nouvelles compétences et d'approfondir mes
            connaissances dans ce domaine.
          </p>
          <p className=" text-slate-700 lg:text-lg text-[0.8rem]">
            Ma démarche inclut également une{" "}
            <span className={`${fredoka.className}  text-violet-700`}>
              Veille Active
            </span>{" "}
            sur les nouveaux langages de programmation et les technologies
            émergentes, dans le but de devenir le plus{" "}
            <span className={`${fredoka.className}  text-violet-700`}>
              Polyvalente
            </span>{" "}
            possible et d'enrichir mon expérience existante. Mon objectif est de
            pouvoir offrir un service de{" "}
            <span className={`${fredoka.className}  text-violet-700`}>
              Qualité
            </span>
            , empreint de{" "}
            <span className={`${fredoka.className}  text-violet-700`}>
              Passion
            </span>{" "}
            et de{" "}
            <span className={`${fredoka.className}  text-violet-700`}>
              Savoir-Faire
            </span>
            , résultat de cette démarche continue d'apprentissage et de
            perfectionnement.
          </p>
        </div>
        <div className="bg-white mb-[-4vh] py-8 flex flex-col gap-8 items-center">
          <TitlePage title="MES COMPÉTENCES" />
          <div className="flex flex-col lg:flex-row gap-44">
            <Skills
              src="/img/user-experience.webp"
              alt="Frontend"
              title="FRONTEND"
              lists={[
                {
                  items: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "TypeScript",
                    "ReactJS",
                    "NextJS",
                    "TailwindCSS",
                    "JQuery",
                    "Sass",
                  ],
                },
              ]}
            />
            <Skills
              src="/img/backend.webp"
              alt="Backend"
              title="BACKEND"
              lists={[
                {
                  items: [
                    "Node.js",
                    "SQL",
                    "MongoDB",
                    "ExpressJS",
                    "PHP",
                    "MariaDB",
                    "FireBase",
                  ],
                },
              ]}
            />
            <Skills
              src="/img/web-optimization.webp"
              alt="Tools"
              title="OUTILS"
              lists={[
                {
                  items: [
                    "Visual Studio Code",
                    "Git",
                    "Github",
                    "Postman",
                    "Vercel",
                    "Swagger",
                  ],
                },
              ]}
            />
          </div>
          <Link className="py-8" href="/projects">
            <Button text={"Mes Projets"} />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
