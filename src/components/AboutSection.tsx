
import { Download, Award, Book } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-block">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary rounded-full text-highlight mb-3 opacity-0 animate-fade-in" style={{animationDelay: "0.1s", animationFillMode: "forwards"}}>
                ABOUT ME
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter opacity-0 animate-fade-in" style={{animationDelay: "0.2s", animationFillMode: "forwards"}}>
              Aspiring IT Professional With A Passion For Innovation
            </h2>
            
            <p className="text-muted-foreground opacity-0 animate-fade-in" style={{animationDelay: "0.3s", animationFillMode: "forwards"}}>
              As a recent Computer Science graduate with a Bachelor's degree from Government Arts and Science College, 
              I am driven by a passion for creating innovative solutions to complex problems. My academic journey has equipped me 
              with a strong foundation in programming, database management, and web development.
            </p>
            
            <p className="text-muted-foreground opacity-0 animate-fade-in" style={{animationDelay: "0.4s", animationFillMode: "forwards"}}>
              I've honed my skills through practical projects like a Student Management System, E-commerce Website, and 
              Sales Dashboard, where I've demonstrated my ability to translate requirements into functional solutions with 
              attention to detail and user experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in" style={{animationDelay: "0.5s", animationFillMode: "forwards"}}>
              <a 
                href="#" 
                className="btn-hover-effect inline-flex items-center justify-center rounded-md bg-highlight text-primary-foreground px-6 py-3 text-sm font-medium shadow transition-colors hover:bg-highlight/90 focus-visible:outline-none focus-visible:ring-1"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education Card */}
            <div className="col-span-1 md:col-span-2 bg-card rounded-lg p-6 shadow-lg border border-border opacity-0 animate-fade-in" style={{animationDelay: "0.3s", animationFillMode: "forwards"}}>
              <div className="flex items-center mb-4">
                <Book className="h-6 w-6 text-highlight mr-2" />
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Bachelor of Science in Computer Science</h4>
                  <p className="text-sm text-muted-foreground">Government Arts and Science College, Melur</p>
                  <p className="text-sm text-muted-foreground">2021 - 2024</p>
                  <p className="text-sm">Grade: 76.72%</p>
                </div>
                <div>
                  <h4 className="font-medium">Higher Secondary School</h4>
                  <p className="text-sm text-muted-foreground">Sri Kandasamy Vidhyalayam</p>
                  <p className="text-sm text-muted-foreground">Biology, Maths</p>
                  <p className="text-sm">Grade: 78.17%</p>
                </div>
              </div>
            </div>
            
            {/* Languages Card */}
            <div className="bg-card rounded-lg p-6 shadow-lg border border-border opacity-0 animate-fade-in" style={{animationDelay: "0.4s", animationFillMode: "forwards"}}>
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-highlight rounded-full mr-2"></span>
                  Tamil - Fluent
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-highlight rounded-full mr-2"></span>
                  English - Fluent
                </li>
              </ul>
            </div>
            
            {/* Certifications Card */}
            <div className="bg-card rounded-lg p-6 shadow-lg border border-border opacity-0 animate-fade-in" style={{animationDelay: "0.5s", animationFillMode: "forwards"}}>
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-highlight mr-2" />
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://coursera.org/share/b9a9e24a90d8b9a6c203f978541e7bd2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm flex items-start group"
                  >
                    <span className="w-2 h-2 bg-highlight rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                    <span className="group-hover:text-highlight transition-colors">
                      <span className="font-medium">AWS Introduction to Information Technology and Cloud</span>
                      <span className="block text-xs text-muted-foreground mt-1">Amazon Web Services & Coursera</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://coursera.org/share/b56114354aae2a1da18f3e558cad5fa1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm flex items-start group"
                  >
                    <span className="w-2 h-2 bg-highlight rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                    <span className="group-hover:text-highlight transition-colors">
                      <span className="font-medium">Get Started with Python</span>
                      <span className="block text-xs text-muted-foreground mt-1">Google & Coursera</span>
                    </span>
                  </a>
                </li>
                <li>
                  <span className="text-sm flex items-start">
                    <span className="w-2 h-2 bg-highlight rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                    <span>
                      <span className="font-medium">3-Day Webinar on AI in Grid Sector</span>
                      <span className="block text-xs text-muted-foreground mt-1">Workshop Certificate</span>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
