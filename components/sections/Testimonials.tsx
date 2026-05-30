"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ethan Walker",
    role: "Fitness Athlete",
    review:
      "Sapphire Fitness completely transformed my training experience. The atmosphere, trainers, and energy are unmatched.",
  },

  {
    name: "Olivia Carter",
    role: "Professional Swimmer",
    review:
      "The personalized programs and premium environment helped me push beyond my limits faster than ever.",
  },

  {
    name: "Daniel Brooks",
    role: "Boxing Competitor",
    review:
      "Every workout feels elite. Sapphire Fitness gives the motivation and structure serious athletes need.",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-24">

      <div className="mx-auto max-w-7xl">

        {/* Section Header */}

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            What Our Members Say
          </h2>

          <p className="mt-4 text-gray-400">
            Real stories from athletes and members
            training at Sapphire Fitness.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {testimonials.map((testimonial, index) => (

            <motion.div
              key={index}

              initial={{
                opacity: 0,
                y: 60,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}

              viewport={{
                once: true,
              }}

              whileHover={{
                y: -10,
              }}

              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >

              {/* Glow Effect */}

              <div className="absolute inset-0 bg-cyan-400/0 transition duration-500 group-hover:bg-cyan-400/10" />

              {/* Quote Icon */}

              <div className="relative z-10 text-6xl text-cyan-400">
                "
              </div>

              {/* Review */}

              <p className="relative z-10 mt-4 leading-relaxed text-gray-300">

                {testimonial.review}

              </p>

              {/* Profile */}

              <div className="relative z-10 mt-8 flex items-center gap-4">

                {/* Fake Avatar */}

                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500" />

                <div>

                  <h3 className="font-bold">

                    {testimonial.name}

                  </h3>

                  <p className="text-sm text-gray-400">

                    {testimonial.role}

                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}