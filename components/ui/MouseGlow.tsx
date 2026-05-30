"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MouseGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    function handleMouseMove(e: MouseEvent) {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, []);

  return (
    <motion.div

      animate={{
        x: position.x - 150,
        y: position.y - 150,
      }}

      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
      }}

      className="pointer-events-none fixed left-0 top-0 z-0 h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-3xl"
    />
  );
}