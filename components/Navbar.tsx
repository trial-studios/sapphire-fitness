"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { t, language, setLanguage } = useLanguage();
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
  href="https://github.com/trial-studios"
  target="_blank"
  rel="noopener noreferrer"
  className="transition hover:scale-105"
>

  <h1 className="text-2xl font-bold tracking-widest text-cyan-400">

    SAPPHIRE FITNESS

  </h1>

</a>

        {/* Navigation Links */}
        <div className="hidden gap-8 md:flex">

          <a
            href="#"
            className="transition hover:text-cyan-400"
          >
            {t.navbar.home}
          </a>

          <a
            href="#"
            className="transition hover:text-cyan-400"
          >
            {t.navbar.memberships}
          </a>

          <a
            href="#"
            className="transition hover:text-cyan-400"
          >
            {t.navbar.trainers}
          </a>

          <a
            href="#"
            className="transition hover:text-cyan-400"
          >
            {t.navbar.contact}
          </a>

        <div className="flex gap-2">

    <button
     onClick={() => setLanguage("en")}
     className={`rounded-full px-4 py-2 text-sm transition ${
      language === "en"
        ? "bg-cyan-400 text-black"
        : "border border-white/20"
     }`}
    >
     EN
    </button>

    <button
     onClick={() => setLanguage("hi")}
     className={`rounded-full px-4 py-2 text-sm transition ${
      language === "hi"
        ? "bg-cyan-400 text-black"
        : "border border-white/20"
      }`}
     >
      हिन्दी
     </button>

    </div>
        </div>

      </nav>
      <button
  onClick={() => setIsOpen(true)}
  className="flex flex-col gap-1 md:hidden"
>

  <span className="h-[3px] w-7 rounded-full bg-white" />
  <span className="h-[3px] w-7 rounded-full bg-white" />
  <span className="h-[3px] w-7 rounded-full bg-white" />

</button>
    </header>
  );
  <AnimatePresence>

  {isOpen && (

    <>
      {/* Overlay */}

      <motion.div

        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}

        onClick={() => setIsOpen(false)}

        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
      />

      {/* Sidebar */}

      <motion.div

        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}

        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}

        className="fixed right-0 top-0 z-50 flex h-screen w-[300px] flex-col border-l border-white/10 bg-black/90 p-8 backdrop-blur-xl"
      >

        {/* Close Button */}

        <button
          onClick={() => setIsOpen(false)}
          className="mb-10 self-end text-3xl text-white"
        >
          ×
        </button>

        {/* Links */}

        <div className="flex flex-col gap-6 text-2xl font-semibold">

          <a href="#" className="transition hover:text-cyan-400">
            {t.navbar.home}
          </a>

          <a href="#" className="transition hover:text-cyan-400">
            {t.navbar.memberships}
          </a>

          <a href="#" className="transition hover:text-cyan-400">
            {t.navbar.trainers}
          </a>

          <a href="#" className="transition hover:text-cyan-400">
            {t.navbar.contact}
          </a>

        </div>

        {/* Language Switcher */}

        <div className="mt-10 flex gap-4">

          <button
            onClick={() => setLanguage("en")}
            className={`rounded-full px-4 py-2 transition ${
              language === "en"
                ? "bg-cyan-400 text-black"
                : "border border-white/20"
            }`}
          >
            EN
          </button>

          <button
            onClick={() => setLanguage("hi")}
            className={`rounded-full px-4 py-2 transition ${
              language === "hi"
                ? "bg-cyan-400 text-black"
                : "border border-white/20"
            }`}
          >
            हिन्दी
          </button>

        </div>

      </motion.div>
    </>

  )}

</AnimatePresence>
}