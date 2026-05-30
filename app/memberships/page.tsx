import DemoNotice from "@/components/DemoNotice";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";

export default function MembershipsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* Hero */}

<section className="relative overflow-hidden px-6 pt-36 pb-20 text-center">

  <div className="absolute left-[-150px] top-[-150px] h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-3xl" />

  <div className="absolute right-[-150px] bottom-[-150px] h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-3xl" />

  <div className="relative z-10">

        <div className="mb-6 inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-400">

  Trial Studios Showcase Project

        </div>

        <h1 className="text-6xl font-extrabold md:text-7xl">
          Membership Experience
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
          A premium pricing and membership showcase
          created by Trial Studios to demonstrate
          modern UI/UX design and frontend development.
        </p>

        <div className="mt-10 flex justify-center gap-4">

  <Link
    href="/"
    className="rounded-full border border-white/20 px-6 py-3 transition hover:border-cyan-400"
  >
    ← Home
  </Link>

  <a
    href="https://github.com/trial-studios"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-cyan-400 px-6 py-3 text-black transition hover:scale-105"
  >
    Trial Studios
  </a>

</div>
      
  </div>

</section>

      {/* Pricing Cards */}

      <Reveal>
      <section className="px-6 pb-24">

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">

          {/* Basic */}

          <div className="
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/5
                        p-8
                        transition-all
                        duration-300
                        hover:-translate-y-3
                        hover:border-cyan-400
                        hover:shadow-2xl
                        hover:shadow-cyan-500/20
                        ">

            <h2 className="text-3xl font-bold">
              Basic
            </h2>

            <p className="mt-4 text-5xl font-extrabold">
              ₹999
            </p>

            <ul className="mt-8 space-y-4 text-gray-300">
              <li>✔ Gym Access</li>
              <li>✔ Locker Access</li>
              <li>✔ Standard Programs</li>
            </ul>

          </div>

          {/* Pro */}

          <div className="
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/5
                        p-8
                        transition-all
                        duration-300
                        hover:-translate-y-3
                        hover:border-cyan-400
                        hover:shadow-2xl
                        hover:shadow-cyan-500/20
                        ">

            <div className="mb-4 inline-block rounded-full bg-cyan-400 px-4 py-1 text-black">
              MOST POPULAR
            </div>

            <h2 className="text-3xl font-bold">
              Pro
            </h2>

            <p className="mt-4 text-5xl font-extrabold">
              ₹2499
            </p>

            <ul className="mt-8 space-y-4 text-gray-300">
              <li>✔ Personal Trainer</li>
              <li>✔ Diet Plans</li>
              <li>✔ Unlimited Sessions</li>
            </ul>

          </div>

          {/* Elite */}

          <div className="
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/5
                        p-8
                        transition-all
                        duration-300
                        hover:-translate-y-3
                        hover:border-cyan-400
                        hover:shadow-2xl
                        hover:shadow-cyan-500/20
                        ">

            <h2 className="text-3xl font-bold">
              Elite
            </h2>

            <p className="mt-4 text-5xl font-extrabold">
              ₹4999
            </p>

            <ul className="mt-8 space-y-4 text-gray-300">
              <li>✔ VIP Access</li>
              <li>✔ Private Coaching</li>
              <li>✔ Recovery Lounge</li>
            </ul>

          </div>

        </div>

      </section>
      </Reveal>

      <Reveal>
      <section className="px-6 py-24">

  <div className="mx-auto max-w-6xl">

    <h2 className="text-center text-5xl font-bold">
      Compare Plans
    </h2>

    <div className="mt-12 overflow-hidden rounded-3xl border border-white/10">

<div className="overflow-x-auto">
      <table className="w-full text-center">

        <thead className="bg-white/5">

          <tr>

            <th className="p-6">
              Features
            </th>

            <th>
              Basic
            </th>

            <th>
              Pro
            </th>

            <th>
              Elite
            </th>

          </tr>

        </thead>

        <tbody>

          <tr className="border-t border-white/10">
            <td className="p-6">
              Gym Access
            </td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
          </tr>

          <tr className="border-t border-white/10">
            <td className="p-6">
              Personal Trainer
            </td>
            <td>✖</td>
            <td>✔</td>
            <td>✔</td>
          </tr>

          <tr className="border-t border-white/10">
            <td className="p-6">
              Nutrition Plan
            </td>
            <td>✖</td>
            <td>✔</td>
            <td>✔</td>
          </tr>

          <tr className="border-t border-white/10">
            <td className="p-6">
              Recovery Lounge
            </td>
            <td>✖</td>
            <td>✖</td>
            <td>✔</td>
          </tr>

        </tbody>

      </table>
      </div>

    </div>

  </div>

</section>
</Reveal>

<Reveal>
<section className="px-6 py-24">

  <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-400/20 bg-white/5 p-12 text-center backdrop-blur-md">

    <h2 className="text-5xl font-bold">
      Like This Website?
    </h2>

    <p className="mt-6 text-lg text-gray-400">

      Sapphire Fitness was created by Trial Studios
      as a demonstration of modern web development,
      premium UI design, responsive layouts,
      animations, and scalable architecture.

    </p>

    <a
      href="https://github.com/trial-studios"
      target="_blank"
      rel="noopener noreferrer"
      className="
                mt-10
                inline-block
                rounded-full
                bg-cyan-400
                px-8
                py-4
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-xl
                hover:shadow-cyan-400/40
                ">

      Visit Trial Studios

    </a>

  </div>

</section>
</Reveal>

        <Reveal>
            <DemoNotice />
        </Reveal>
      <Footer />

    </main>
  );
}