import { useState, useEffect } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "shop", "contact"];
      const scrollPosition = window.scrollY + 100;

      // Check if scrolled past hero section
      setIsScrolled(window.scrollY > 100);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-8 py-6 transition-all duration-300 ${
      isScrolled ? "bg-[#9B8B7E] shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto flex gap-8">
        {["HOME", "ABOUT", "SHOP", "CONTACT"].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className={`uppercase tracking-wider transition-colors ${
              activeSection === item.toLowerCase()
                ? "text-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}