export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold text-white">
          Marvel&apos;s Space
        </a>

        <div className="hidden gap-6 text-sm text-gray-400 md:flex">
          <a href="#home" className="transition hover:text-white">
            Home
          </a>

          <a href="#journey" className="transition hover:text-white">
            Journey
          </a>

          <a href="#germany-life" className="transition hover:text-white">
            Germany Life
          </a>

          <a href="#missions" className="transition hover:text-white">
            Missions
          </a>

          <a href="#videos" className="transition hover:text-white">
            Videos
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}