"use client";

import { useLanguage } from "@/components/LanguageProvider";
import MouseGlow from "@/components/ui/MouseGlow";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import Stats from "@/components/sections/Stats";
import Navbar from "@/components/layout/Navbar";
import Reveal from "@/components/ui/Reveal";
import Footer from "@/components/layout/Footer";

export default function Home() {
    const { t } = useLanguage();
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
        <MouseGlow />

      <Navbar />

      {/* Hero Section */}
      
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">

        {/* Background Glow Effects */}

       <div className="absolute left-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-3xl" />

       <div className="absolute bottom-[-120px] right-[-120px] h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-3xl" />

        <h1 className="max-w-5xl text-6xl font-extrabold leading-tight md:text-8xl">
          {t.hero.title1}
          <span className="text-cyan-400"> {t.hero.title2}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          {t.hero.description}
        </p>

        <div className="mt-10 flex gap-4">

          <button className="rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:scale-105">
            {t.hero.join}
          </button>

          <button className="rounded-full border border-white/20 px-8 py-4 transition hover:border-cyan-400 hover:text-cyan-400">
            {t.hero.explore}
          </button>

        </div>

      </section>

           {/* Membership Section */}

        <Reveal>
        <section className="px-6 py-24">

  <div className="mx-auto max-w-7xl">

    {/* Section Heading */}

    <div className="text-center">

      <h2 className="text-5xl font-bold">
        Membership Plans
      </h2>

      <p className="mt-4 text-gray-400">
        Choose the perfect training experience
        tailored to your fitness journey.
      </p>

    </div>

    {/* Pricing Cards */}

    <div className="mt-16 grid gap-8 md:grid-cols-3">

      {/* Basic Plan */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:-translate-y-2 hover:border-cyan-400">

        <h3 className="text-3xl font-bold">
          Basic
        </h3>

        <p className="mt-4 text-5xl font-extrabold">
          ₹999
        </p>

        <ul className="mt-8 space-y-4 text-gray-300">

          <li>✔ Access to all gym equipment</li>
          <li>✔ Standard fitness programs</li>
          <li>✔ Locker room access</li>
          <li>✔ 5 training sessions</li>

        </ul>

        <button className="mt-10 w-full rounded-full bg-white py-3 font-semibold text-black transition hover:bg-cyan-400">
          Get Started
        </button>

      </div>

      {/* Pro Plan */}

      <div className="rounded-3xl border border-cyan-400 bg-cyan-400/10 p-8 shadow-2xl shadow-cyan-500/20 backdrop-blur-md transition hover:-translate-y-2">

        <div className="mb-4 inline-block rounded-full bg-cyan-400 px-4 py-1 text-sm font-semibold text-black">
          MOST POPULAR
        </div>

        <h3 className="text-3xl font-bold">
          Pro
        </h3>

        <p className="mt-4 text-5xl font-extrabold">
          ₹2499
        </p>

        <ul className="mt-8 space-y-4 text-gray-300">

          <li>✔ Personal trainer support</li>
          <li>✔ Advanced diet plans</li>
          <li>✔ Sauna access</li>
          <li>✔ Unlimited training sessions</li>

        </ul>

        <button className="mt-10 w-full rounded-full bg-cyan-400 py-3 font-semibold text-black transition hover:scale-105">
          Join Pro
        </button>

      </div>

      {/* Elite Plan */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:-translate-y-2 hover:border-cyan-400">

        <h3 className="text-3xl font-bold">
          Elite
        </h3>

        <p className="mt-4 text-5xl font-extrabold">
          ₹4999
        </p>

        <ul className="mt-8 space-y-4 text-gray-300">

          <li>✔ VIP fitness experience</li>
          <li>✔ Private coaching</li>
          <li>✔ Recovery lounge access</li>
          <li>✔ Custom nutrition strategy</li>

        </ul>

        <button className="mt-10 w-full rounded-full bg-white py-3 font-semibold text-black transition hover:bg-cyan-400">
          Become Elite
        </button>

      </div>

    </div>

  </div>

</section>
 </Reveal>

        {/* Trainers Section */}

<Reveal>
<section className="px-6 py-24">

  <div className="mx-auto max-w-7xl">

    {/* Section Header */}

    <div className="text-center">

      <h2 className="text-5xl font-bold">
        Meet Our Trainers
      </h2>

      <p className="mt-4 text-gray-400">
        Elite coaches dedicated to pushing
        your fitness journey beyond limits.
      </p>

    </div>

    {/* Trainer Cards */}

    <div className="mt-16 grid gap-8 md:grid-cols-3">

      {/* Trainer 1 */}

      <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:border-cyan-400">

        <div className="h-[350px] bg-gradient-to-b from-cyan-500/20 to-black" />

        <div className="p-6">

          <h3 className="text-3xl font-bold">
            Alex Carter
          </h3>

          <p className="mt-2 text-cyan-400">
            Strength & Conditioning Coach
          </p>

          <p className="mt-4 text-gray-400">
            Specialized in elite athletic performance,
            muscle building, and recovery training.
          </p>

        </div>

      </div>

      {/* Trainer 2 */}

      <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:border-cyan-400">

        <div className="h-[350px] bg-gradient-to-b from-blue-500/20 to-black" />

        <div className="p-6">

          <h3 className="text-3xl font-bold">
            Sophia Blake
          </h3>

          <p className="mt-2 text-cyan-400">
            HIIT & Fat Loss Expert
          </p>

          <p className="mt-4 text-gray-400">
            Focused on endurance training,
            fat-burning systems, and mobility development.
          </p>

        </div>

      </div>

      {/* Trainer 3 */}

      <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:border-cyan-400">

        <div className="h-[350px] bg-gradient-to-b from-indigo-500/20 to-black" />

        <div className="p-6">

          <h3 className="text-3xl font-bold">
            Marcus Kane
          </h3>

          <p className="mt-2 text-cyan-400">
            Combat Fitness Specialist
          </p>

          <p className="mt-4 text-gray-400">
            Professional combat conditioning coach
            with advanced strength and agility programs.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
</Reveal>

          {/* Statistics Section */}

        <Stats />
        <Testimonials />
        <FAQ />
        <Footer />
    </main>
  );
}