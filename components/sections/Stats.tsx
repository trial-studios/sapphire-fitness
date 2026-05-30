"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    number: 10000,
    suffix: "+",
    label: "Active Members",
  },
  {
    number: 25,
    suffix: "+",
    label: "Elite Trainers",
  },
  {
    number: 15,
    suffix: "+",
    label: "Years Experience",
  },
  {
    number: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

function Counter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {

  const [count, setCount] = useState(0);

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  useEffect(() => {

    if (!isInView) return;

    let start = 0;

    const end = target;

    const duration = 2000;

    const incrementTime = 20;

    const step = end / (duration / incrementTime);

    const timer = setInterval(() => {

      start += step;

      if (start >= end) {

        setCount(end);

        clearInterval(timer);

      } else {

        setCount(Math.floor(start));

      }

    }, incrementTime);

    return () => clearInterval(timer);

  }, [target, isInView]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="px-6 py-24">

      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">

        {stats.map((stat, index) => (

          <motion.div
            key={index}

            initial={{
              opacity: 0,
              y: 50,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}

            viewport={{
              once: true,
            }}

            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-sm transition hover:-translate-y-3 hover:border-cyan-400"
          >

            {/* Glow Effect */}

            <div className="absolute inset-0 bg-cyan-400/0 transition duration-500 group-hover:bg-cyan-400/10" />

            {/* Number */}

            <h3 className="relative z-10 text-5xl font-extrabold text-cyan-400 transition-transform duration-300 group-hover:scale-110">

              <Counter
               target={stat.number}
               suffix={stat.suffix}
              />

            </h3>

            {/* Label */}

            <p className="relative z-10 mt-4 text-gray-400">

              {stat.label}

            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}