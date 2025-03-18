
import { ArrowDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";~

const HeroSection = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showWelcome, setShowWelcome] = useState(false);
  
  const titles = [
    "Python Developer",
    "Frontend Developer",
    "Data Analyst",
    "Full Stack Developer",
    "Programmer",
  ];
  
  const typingRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = 'lovable-uploads/pro.png';
    // img.src = 'public/lovable-uploads/pro.png';
    img.onload = () => setIsImageLoaded(true);
    
    // Show welcome animation after a delay
    setTimeout(() => {
      setShowWelcome(true);
    }, 500);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setDisplayText(
        isDeleting 
          ? fullText.substring(0, displayText.length - 1) 
          : fullText.substring(0, displayText.length + 1)
      );

      // Set typing speed
      if (isDeleting) {
        setTypingSpeed(50); // faster when deleting
      } else {
        setTypingSpeed(150); // slower when typing
      }

      // If completed typing the word
      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // wait before deleting
      } 
      // If deleted the word
      else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150); // reset speed after deletion
      }
    };

    typingRef.current = setTimeout(handleTyping, typingSpeed);
    
    return () => clearTimeout(typingRef.current);
  }, [displayText, isDeleting, loopNum, typingSpeed, titles]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-transparent z-0"></div>
      
      {/* Welcome Animation Overlay - Modified to ensure it doesn't block content */}
      <div className={`fixed inset-0 bg-background z-50 flex items-center justify-center transition-opacity duration-1000 ${showWelcome ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <h1 className="text-4xl md:text-6xl font-bold text-highlight animate-pulse">
          Welcome to My Portfolio
        </h1>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-full lg:w-1/2 space-y-6" style={{opacity: 1}}>
            {/* Profile Avatar */}
            <div className="mb-6 flex items-center gap-4" style={{opacity: 1}}>
     
              <div className="flex flex-col">
               
            
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                HI, I'M <span className="text-highlight">PRASANTH!</span>
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter flex flex-wrap items-center">
                <span className="mr-3">ASPIRING</span>
                <span className="text-highlight min-h-[60px] inline-block">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-[600px]">
              I'm an aspiring IT professional driven by innovation and problem-solving. 
              With a strong foundation in computer science and a passion for creating 
              efficient solutions, I specialize in translating complex requirements into 
              user-friendly applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contact" 
                className="btn-hover-effect inline-flex items-center justify-center rounded-md bg-highlight text-primary-foreground px-6 py-3 text-sm font-medium shadow transition-colors hover:bg-highlight/90 focus-visible:outline-none focus-visible:ring-1"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="btn-hover-effect inline-flex items-center justify-center rounded-md border border-highlight bg-transparent text-highlight px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-highlight/10 focus-visible:outline-none focus-visible:ring-1"
              >
                View Projects
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] border-4 border-highlight p-2 hexagon-clip bg-card shadow-xl overflow-hidden" style={{opacity: 1}}>
              <img 
                src="lovable-uploads\pro.png" 
                alt="Prasanth" 
                className={`w-full h-full object-cover transition-all duration-500 ${isImageLoaded ? 'image-loaded' : 'image-loading'}`}
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-highlight">
            <ArrowDown className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
