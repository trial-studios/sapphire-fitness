import DemoNotice from "@/components/DemoNotice";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";

export default function TrainersPage() {
  const trainers = [
    {
      name: "Alex Carter",
      role: "Strength Specialist",
      description:
        "12+ years of experience in strength development, athletic conditioning, and recovery systems.",
      skills: ["Strength", "Recovery", "Athletics"],
    },
    {
      name: "Sophia Blake",
      role: "HIIT & Fat Loss Expert",
      description:
        "Focused on endurance training, fat-loss programs, and mobility improvement.",
      skills: ["HIIT", "Endurance", "Mobility"],
    },
    {
      name: "Marcus Kane",
      role: "Combat Fitness Specialist",
      description:
        "Specialized in combat conditioning, agility training, and functional performance.",
      skills: ["Combat", "Agility", "Performance"],
    },
  ];

  const certifications = [
    "NASM Certified",
    "ACE Certified",
    "Nutrition Specialists",
    "Performance Coaches",
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* Hero Section */}

      <section className="relative overflow-hidden px-6 pb-24 pt-36 text-center">

        <div className="absolute left-[-150px] top-[-150px] h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="absolute bottom-[-150px] right-[-150px] h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative z-10">

          <h1 className="text-6xl font-extrabold md:text-7xl">
            Meet The Experts
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Discover the elite coaching experience behind
            Sapphire Fitness.
          </p>

        </div>

      </section>

      {/* Demo Notice */}

      <DemoNotice />

      <section className="px-6 py-12">

        <div className="mx-auto max-w-5xl rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-6 text-center">

          <p className="text-yellow-300">

            Trainer profiles, certifications, achievements,
            and fitness programs displayed on this page are
            fictional and created solely for demonstration
            and portfolio purposes by Trial Studios.

          </p>

        </div>

      </section>

      {/* Trainers Section */}

      <Reveal>
        <section className="px-6 py-24">

          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">

            {trainers.map((trainer) => (

              <div
                key={trainer.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20"
              >

                <div className="mb-6 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20" />

                <h3 className="text-3xl font-bold">
                  {trainer.name}
                </h3>

                <p className="mt-2 text-cyan-400">
                  {trainer.role}
                </p>

                <p className="mt-4 text-gray-400">
                  {trainer.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {trainer.skills.map((skill) => (

                    <span
                      key={skill}
                      className="rounded-full border border-cyan-400/20 px-3 py-1 text-sm"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </section>
      </Reveal>

      {/* Certifications */}

      <Reveal>
        <section className="px-6 py-24">

          <div className="mx-auto max-w-6xl">

            <h2 className="text-center text-5xl font-bold">
              Professional Standards
            </h2>

            <div className="mt-12 grid gap-8 md:grid-cols-4">

              {certifications.map((cert) => (

                <div
                  key={cert}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md transition hover:border-cyan-400"
                >

                  <h3 className="text-xl font-semibold">
                    {cert}
                  </h3>

                </div>

              ))}

            </div>

          </div>

        </section>
      </Reveal>

      {/* Philosophy */}

      <Reveal>
        <section className="px-6 py-24">

          <div className="mx-auto max-w-5xl text-center">

            <h2 className="text-5xl font-bold">

              Train Smarter.
              <br />
              Recover Better.
              <br />
              Perform Beyond Limits.

            </h2>

            <p className="mt-8 text-lg text-gray-400">

              Every training program is designed around
              sustainable progress, modern science,
              and long-term athletic performance.

            </p>

          </div>

        </section>
      </Reveal>

      {/* CTA */}

      <Reveal>
        <section className="px-6 py-24">

          <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-400/20 bg-white/5 p-12 text-center backdrop-blur-md">

            <h2 className="text-5xl font-bold">
              Need A Website Like This?
            </h2>

            <p className="mt-6 text-lg text-gray-400">

              This trainers page was designed and developed
              by Trial Studios as part of the Sapphire Fitness
              showcase project.

            </p>

            <a
              href="https://github.com/trial-studios"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/40"
            >

              Visit Trial Studios

            </a>

          </div>

        </section>
      </Reveal>

      <Footer />

    </main>
  );
}