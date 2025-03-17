
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="bg-card py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center space-x-2 text-highlight font-bold text-xl">
              <div className="w-8 h-8 bg-highlight text-primary-foreground flex items-center justify-center rounded">P</div>
              <span>PRASANTH</span>
            </a>
            <p className="text-muted-foreground mt-2 max-w-md">
              Aspiring IT professional driven by innovation and problem-solving.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="bg-secondary rounded-full p-3 mb-4 hover:bg-secondary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-highlight"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5 text-highlight" />
            </button>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Prasanth. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
