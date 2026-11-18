
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  /*{ name: "Skills", href: "#skills" },*/
  { name: "Projects", href: "#featured-projects" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50
      bg-cream/90 backdrop-blur-xl shadow-sm">

      <div className="max-w-[1240px] mx-auto px-5 lg:px-8
        h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#home"
          className="font-display text-3xl font-extrabold
          text-forest">
          Om<span className="text-gold">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center
          gap-1 bg-muted/70 rounded-full p-2">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 rounded-full text-sm
              font-semibold text-moss hover:bg-white
              hover:text-forest transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">

          <a href="#featured-projects"
            className="bg-forest text-cream px-5 py-3
            rounded-full text-sm font-semibold">
            Explore Projects
          </a>

          <a href="/resume.pdf" download
            className="bg-gold text-forest px-5 py-3
            rounded-full text-sm font-bold">
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="xl:hidden text-forest"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="xl:hidden bg-cream border-t
          border-muted p-5 flex flex-col gap-4">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-semibold text-forest"
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
