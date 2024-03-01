"use client";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Button from "./components/elements/Button";
import Link from "next/link";
import { fredoka } from "./fonts/fonts";
import dynamic from "next/dynamic";

const TextAnime = dynamic(() => import("./components/elements/TextAnime"));

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex justify-center items-center">
        <div className="text-center py-8 px-4 text-slate-700 flex flex-col gap-8">
          <h1 className="lg:text-[3rem] text-[1.5rem]">
            HELLO, JE SUIS
            <br />
            <TextAnime
              className={`${fredoka.className} text-violet-700 bg-white inline-block lg:text-[3rem]`}
              sequence={[
                "MAÉVA LAGROST",
                2000,
                "DÉVELOPPEUSE FULLSTACK",
                2000,
                "MAÉVA LAGROST",
                2000,
                "DÉVELOPPEUSE FULLSTACK",
                2000,
              ]}
              wrapper={"span"}
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <h2 className="lg:text-xl">
            Passionnée par le développement web, je suis prête à vous
            accompagner dans vos projets.
          </h2>
          <div className="flex justify-center gap-8">
            <Link href="/contact">
              <Button text={"Me contacter"} />
            </Link>
            <Button
              text={"Mon CV"}
              onClick={() => window.open("/cv_maeva_la.pdf", "_blank")}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
