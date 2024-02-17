import Image from "next/image";
import Link from "next/link";
import React from "react";
import { fredoka } from "../../fonts/fonts";

const Footer = () => {
  return (
    <footer className="bg-black py-3">
      <div className="flex flex-col gap-4">
        <h3
          className={`${fredoka.className} text-white text-[2.5rem] text-center font-bold`}
        >
          SOCIAL
        </h3>
        <div className="flex justify-center gap-6 pb-2">
          <Link
            href="http://linkedin.com/in/maéva-lagrost-727ba3249"
            className="rounded-full transition-transform duration-300 hover:scale-125"
          >
            <Image
              src="/img/linkedin.svg"
              className="rounded-full"
              width={50}
              height={50}
              alt="Linkedin"
            />
          </Link>
          <Link
            href="https://github.com/Sushib08"
            className="rounded-full transition-transform duration-300 hover:scale-125"
          >
            <Image
              src="/img/github.svg"
              className="rounded-full"
              width={50}
              height={50}
              alt="Github"
            />
          </Link>
          <Link
            href="https://www.instagram.com/maevak8b/"
            className="rounded-full transition-transform duration-300 hover:scale-125"
          >
            <Image
              src="/img/instagram.svg"
              className="rounded-full"
              width={50}
              height={50}
              alt="Instagram"
            />
          </Link>
        </div>
        <div className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Maéva LAGROST - Tous droits
          réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
