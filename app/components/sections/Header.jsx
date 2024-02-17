"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { roboto } from "../../fonts/fonts";

const Header = () => {
  const [isClick, setIsClick] = useState(false);

  const toogleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <header
      className={`${roboto.className} bg-white font-bold lg:text-lg text-slate-700 py-6 px-14`}
    >
      <div className=" flex justify-between items-center">
        <Link
          href="/"
          className=" flex flex-row items-center gap-2 hover:text-[#b89f59]"
        >
          <Image
            src="/img/profil.webp"
            className="rounded-full"
            width={50}
            height={50}
            alt="Logo"
          />
          MAÉVA LAGROST
        </Link>

        <div className="hidden md:flex gap-6 px-2 ">
          <Link href="/" className="hover:text-[#b89f59]">
            HOME
          </Link>
          <Link href="/about" className="hover:text-[#b89f59]">
            A PROPOS
          </Link>
          <Link href="/projects" className="hover:text-[#b89f59]">
            PROJETS
          </Link>
          <Link href="/contact" className="hover:text-[#b89f59]">
            CONTACT
          </Link>
        </div>

        <div className=" md:hidden">
          <button
            className="inline-flex items-center text-slate-700 focus:outline-none focus:ring-2 focus:ring-inset"
            onClick={toogleNavbar}
          >
            {isClick ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden">
          <div className="pt-6 pb-3 space-y-1">
            <div className="flex flex-col gap-6">
              <Link href="/" className="hover:text-[#b89f59]">
                HOME
              </Link>
              <Link href="/about" className="hover:text-[#b89f59]">
                A PROPOS
              </Link>
              <Link href="/projects" className="hover:text-[#b89f59]">
                PROJETS
              </Link>
              <Link href="/contact" className="hover:text-[#b89f59]">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
