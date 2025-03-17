
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "services", "projects", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrollPosition > 50
          ? "bg-background/90 backdrop-blur-md py-4 shadow-md"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-highlight font-bold text-xl"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="w-8 h-8 bg-highlight text-primary-foreground flex items-center justify-center rounded">P</div>
          <span className="animate-slide-in">PRASANTH</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {["HOME", "ABOUT", "SERVICES", "PROJECTS", "CONTACT"].map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                "nav-link text-sm font-medium transition-colors hover:text-highlight animate-slide-in",
                activeSection === item.toLowerCase() ? "text-highlight nav-link-active" : "text-foreground/80",
                `animate-slide-in-delay-${index + 1}`
              )}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-highlight" />
          ) : (
            <Menu className="h-6 w-6 text-highlight" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-card/95 backdrop-blur-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {["HOME", "ABOUT", "SERVICES", "PROJECTS", "CONTACT"].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={cn(
                  "py-2 px-4 text-sm font-medium transition-colors hover:text-highlight",
                  activeSection === item.toLowerCase() ? "text-highlight" : "text-foreground/80"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
