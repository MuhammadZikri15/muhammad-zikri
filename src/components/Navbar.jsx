import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="#home" className="logo">
        <img src="/logomz.png" alt="Muhammad Zikri Logo" />
      </a>

      {/* Mobile menu button */}
      <button
        className="menu-btn text-white text-2xl md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      {/* Navigation links */}
      <div
        className={`nav-links ${
          open ? "active" : ""
        } flex flex-col md:flex-row md:items-center md:gap-8`}
      >
        <a
          href="#about"
          className="font-medium hover:text-white transition-colors"
          onClick={() => setOpen(false)}
        >
          About
        </a>

        <a
          href="#skills"
          className="font-medium hover:text-white transition-colors"
          onClick={() => setOpen(false)}
        >
          Skills
        </a>

        <a
          href="#projects"
          className="font-medium hover:text-white transition-colors"
          onClick={() => setOpen(false)}
        >
          Projects
        </a>

        <a
          href="#certificate"
          className="font-medium hover:text-white transition-colors"
          onClick={() => setOpen(false)}
        >
          Certificate
        </a>

        <a
          href="#contact"
          className="font-medium hover:text-white transition-colors"
          onClick={() => setOpen(false)}
        >
          Contact
        </a>

        <a
          href="#contact"
          className="hire-btn font-medium transition-all mt-2 md:mt-0 text-center"
          onClick={() => setOpen(false)}
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
