export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">

        {/* Branding */}

        <div>

          <h2 className="text-2xl font-bold tracking-widest text-cyan-400">
            SAPPHIRE FITNESS
          </h2>

          <p className="mt-2 text-gray-400">
            Designed and developed by Trial Studios.
          </p>

        </div>

        {/* Navigation */}

        <div className="flex gap-6 text-gray-400">

          <a
            href="#"
            className="transition hover:text-cyan-400"
          >
            Home
          </a>

          <a
            href="#"
            className="transition hover:text-cyan-400"
          >
            Memberships
          </a>

          <a
            href="#"
            className="transition hover:text-cyan-400"
          >
            Trainers
          </a>

          <a
            href="#"
            className="transition hover:text-cyan-400"
          >
            Contact
          </a>

        </div>

        {/* Socials */}

        <div className="flex gap-4">

          <a
            href="https://www.instagram.com/trialstudios.in"
            className="rounded-full border border-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            IG
          </a>

          <a
            href="https://www.youtube.com/@TrialStudios-yt"
            className="rounded-full border border-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            YT
          </a>

          <a
            href="#"
            className="rounded-full border border-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            X
          </a>

        </div>

      </div>

    </footer>
  );
}