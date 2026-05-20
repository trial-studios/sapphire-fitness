"use client";

import Link from "next/link";

import { motion } from "framer-motion";

export default function NotFound() {

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
    {/* Glitch Scan Lines */}

<div className="pointer-events-none absolute inset-0 opacity-10">

  {Array.from({ length: 25 }).map((_, index) => (

    <motion.div
      key={index}

      animate={{
        x: ["-10%", "10%", "-10%"],
        opacity: [0.08, 0.15, 0.08],
      }}

      transition={{
        duration: 2 + index * 0.1,
        repeat: Infinity,
        ease: "linear",
      }}

      className="absolute h-[2px] w-full bg-cyan-400"
      style={{
        top: `${index * 4}%`,
      }}
    />

  ))}

</div>

      {/* Background Glow */}

      <div className="absolute left-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-3xl" />

      {/* Content */}

      <motion.div

        initial={{
          opacity: 0,
          y: 40,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.8,
        }}

        className="relative z-10 text-center"
      >

        {/* 404 */}

        <div className="relative inline-block">

  {/* Cyan Layer */}

  <motion.h1

    animate={{
      x: [0, -2, 2, -1, 0],
      y: [0, 1, -1, 1, 0],
    }}

    transition={{
      duration: 0.3,
      repeat: Infinity,
      repeatType: "mirror",
    }}

    className="absolute left-0 top-0 text-8xl font-extrabold text-cyan-400 opacity-70 md:text-[10rem]"
  >

    404

  </motion.h1>

  {/* Red Layer */}

  <motion.h1

    animate={{
      x: [0, 2, -2, 1, 0],
      y: [0, -1, 1, -1, 0],
    }}

    transition={{
      duration: 0.25,
      repeat: Infinity,
      repeatType: "mirror",
    }}

    className="absolute left-0 top-0 text-8xl font-extrabold text-red-500 opacity-40 md:text-[10rem]"
  >

    404

  </motion.h1>

  {/* Main Layer */}

  <motion.h1

    animate={{
      opacity: [1, 0.92, 1],
    }}

    transition={{
      duration: 0.15,
      repeat: Infinity,
    }}

    className="relative text-8xl font-extrabold text-white md:text-[10rem]"
  >

    404

  </motion.h1>

</div>

        {/* Title */}

        <h2 className="mt-6 text-4xl font-bold">

          Lost In Space

        </h2>

        {/* Description */}

        <p className="mt-4 max-w-xl text-gray-400">

          The page you’re looking for drifted
          beyond the Sapphire universe.

        </p>

        {/* Button */}

        <Link href="/">

          <button className="mt-10 rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:scale-105">

            Return Home

          </button>

        </Link>

      </motion.div>

    </main>
  );
}