export default function HeaderSection() {
  return (
    <>
      <header class="bg-slate-900/70 backdrop-blur-lg sticky top-0 z-50">
        <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" class="text-2xl font-bold text-white">
            Will Domine
          </a>
          <div class="hidden md:flex space-x-6 text-lg">
            <a
              href="#about"
              class="hover:text-cyan-400 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              class="hover:text-cyan-400 transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#skills"
              class="hover:text-cyan-400 transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#contact"
              class="hover:text-cyan-400 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
          <button
            id="mobile-menu-button"
            class="md:hidden text-white focus:outline-none"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </nav>
        <div id="mobile-menu" class="hidden md:hidden px-6 pb-4">
          <a href="#about" class="block py-2 text-white hover:text-cyan-400">
            About
          </a>
          <a href="#projects" class="block py-2 text-white hover:text-cyan-400">
            Projects
          </a>
          <a href="#skills" class="block py-2 text-white hover:text-cyan-400">
            Skills
          </a>
          <a href="#contact" class="block py-2 text-white hover:text-cyan-400">
            Contact
          </a>
        </div>
      </header>
    </>
  );
}
