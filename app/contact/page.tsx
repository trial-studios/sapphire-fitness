import DemoNotice from "@/components/DemoNotice";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";

export default function ContactPage() {
  const services = [
    {
      title: "Landing Pages",
      description:
        "Modern, responsive websites designed to showcase products and businesses.",
    },
    {
      title: "Portfolio Websites",
      description:
        "Professional portfolio experiences for creators, developers, and brands.",
    },
    {
      title: "Business Websites",
      description:
        "Scalable business websites with modern UI and responsive layouts.",
    },
    {
      title: "Frontend Applications",
      description:
        "Interactive web applications built with modern frameworks.",
    },
  ];

  const process = [
    "Idea",
    "Design",
    "Development",
    "Launch",
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* Hero */}

      <section className="relative overflow-hidden px-6 pt-36 pb-24 text-center">

        <div className="absolute left-[-150px] top-[-150px] h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="absolute bottom-[-150px] right-[-150px] h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative z-10">

          <h1 className="text-6xl font-extrabold md:text-7xl">
            Let's Build Something Amazing
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Trial Studios creates modern websites,
            UI experiences, and digital products
            focused on quality, performance,
            and exceptional design.
          </p>

        </div>

      </section>

      <DemoNotice />

      {/* Disclaimer */}

      <section className="px-6 py-12">

        <div className="mx-auto max-w-5xl rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-6 text-center">

          <p className="text-yellow-300">

            Sapphire Fitness is a fictional portfolio
            project created by Trial Studios to demonstrate
            modern web design, frontend architecture,
            responsiveness, and UI/UX capabilities.

          </p>

        </div>

      </section>

      {/* Contact Cards */}

      <Reveal>
        <section className="px-6 py-24">

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">

            <a
              href="https://github.com/trial-studios"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400"
            >

              <h2 className="text-3xl font-bold">
                GitHub
              </h2>

              <p className="mt-4 text-gray-400">
                Explore projects, repositories,
                and development work.
              </p>

            </a>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">

              <h2 className="text-3xl font-bold">
                Project Discussions
              </h2>

              <p className="mt-4 text-gray-400">
                Available through GitHub Issues
                and future studio channels.
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">

              <h2 className="text-3xl font-bold">
                Future Contact
              </h2>

              <p className="mt-4 text-gray-400">
                Email and additional contact
                options will be added later.
              </p>

            </div>

          </div>

        </section>
      </Reveal>

      {/* Services */}

      <Reveal>
        <section className="px-6 py-24">

          <div className="mx-auto max-w-7xl">

            <h2 className="text-center text-5xl font-bold">
              What Trial Studios Builds
            </h2>

            <div className="mt-12 grid gap-8 md:grid-cols-2">

              {services.map((service) => (

                <div
                  key={service.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-400"
                >

                  <h3 className="text-2xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-gray-400">
                    {service.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>
      </Reveal>

      {/* Process */}

      <Reveal>
        <section className="px-6 py-24">

          <div className="mx-auto max-w-6xl">

            <h2 className="text-center text-5xl font-bold">
              Our Process
            </h2>

            <div className="mt-12 grid gap-8 md:grid-cols-4">

              {process.map((step, index) => (

                <div
                  key={step}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
                >

                  <div className="text-5xl font-extrabold text-cyan-400">

                    0{index + 1}

                  </div>

                  <h3 className="mt-4 text-2xl font-bold">

                    {step}

                  </h3>

                </div>

              ))}

            </div>

          </div>

        </section>
      </Reveal>

      {/* CTA */}

      <Reveal>
        <section className="px-6 py-24">

          <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-400/20 bg-white/5 p-12 text-center backdrop-blur-md">

            <h2 className="text-5xl font-bold">
              Ready To Build Something Great?
            </h2>

            <p className="mt-6 text-lg text-gray-400">

              Trial Studios develops modern web experiences
              focused on quality, performance, scalability,
              and design.

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