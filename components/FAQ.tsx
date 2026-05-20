"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What makes Sapphire Fitness different?",
    answer:
      "Sapphire Fitness combines elite-level training, luxury equipment, cinematic atmosphere, and personalized coaching systems.",
  },

  {
    question: "Do beginners have access to trainers?",
    answer:
      "Absolutely. Our trainers guide beginners with structured programs tailored to their fitness level and goals.",
  },

  {
    question: "Are diet and recovery plans included?",
    answer:
      "Yes. Premium memberships include personalized diet planning and advanced recovery guidance.",
  },

  {
    question: "Can I upgrade my membership later?",
    answer:
      "Yes. Members can upgrade or customize their plans anytime through their account dashboard.",
  },
];

export default function FAQ() {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function toggleFAQ(index: number) {

    if (activeIndex === index) {

      setActiveIndex(null);

    } else {

      setActiveIndex(index);

    }
  }

  return (
    <section className="px-6 py-24">

      <div className="mx-auto max-w-4xl">

        {/* Header */}

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-400">
            Everything you need to know about
            Sapphire Fitness memberships and services.
          </p>

        </div>

        {/* FAQ Items */}

        <div className="mt-16 space-y-6">

          {faqs.map((faq, index) => {

            const isActive = activeIndex === index;

            return (

              <div
                key={index}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >

                {/* Question */}

                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-8 py-6 text-left"
                >

                  <span className="text-lg font-semibold">

                    {faq.question}

                  </span>

                  {/* Plus Icon */}

                  <motion.span
                    animate={{
                      rotate: isActive ? 45 : 0,
                    }}

                    transition={{
                      duration: 0.3,
                    }}

                    className="text-3xl text-cyan-400"
                  >

                    +

                  </motion.span>

                </button>

                {/* Answer */}

                <AnimatePresence>

                  {isActive && (

                    <motion.div

                      initial={{
                        height: 0,
                        opacity: 0,
                      }}

                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}

                      exit={{
                        height: 0,
                        opacity: 0,
                      }}

                      transition={{
                        duration: 0.3,
                      }}

                      className="overflow-hidden"
                    >

                      <p className="px-8 pb-6 text-gray-400">

                        {faq.answer}

                      </p>

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>

            );
          })}

        </div>

      </div>

    </section>
  );
}