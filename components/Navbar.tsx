"use client";

import React from "react";
import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";
import { FloatingNav } from "./ui/FloatingNavbar";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skill" },
  { name: "Project", link: "#project" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="relative">
      <div className="absolute inset-0 max-w-6xl mx-auto p-5">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="z-[9999]"
          >
            <Link href="/" className="flex items-center cursor-pointer">
              <Image
                src="/favicon.svg"
                alt="img"
                width={20}
                height={20}
                className="w-10 h-10 md:w-20 md:h-20"
              />
              <h1 className="text-xs md:text-xl font-bold text-cyan-400">
                Bunseu
              </h1>
            </Link>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-x-3 font-bold text-gray-200 cursor-pointer z-[9999]"
          >
            <li className="hover:text-whiter md:pr-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/bunseujjy"
                className="flex items-center md:space-x-2"
              >
                <IconBrandGithub />
                <span className="text-xs md:text-base">Github</span>
              </a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link href="/resume" className="flex items-center md:space-x-2">
                <Image src="/resume.png" alt="resume" width={22} height={22} />
                <span className="text-xs md:text-base">Resume</span>
              </Link>
            </li>
          </motion.ul>
        </div>
      </div>
      <div className="container mx-auto px-4 flex items-center justify-end fixed top-0 left-0 right-0 z-50 h-20 bg-transparent">
        <FloatingNav navItems={links} />
      </div>
    </nav>
  );
};

export default Navbar;
