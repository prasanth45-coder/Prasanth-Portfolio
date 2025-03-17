
import { useState, useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Student Management System",
    description: "Created a comprehensive management system using PHP and MySQL, focusing on streamlined enrollment and database management. Features include student registration, course cataloging, and grade tracking.",
    image: "/lovable-uploads/Student-Management-System-thegem-blog-default.webp",
    tags: ["python", "MySQL", "django", "frontend"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "E-commerce Website",
    description: "Developed a dynamic e-commerce platform using JavaScript, PHP, and MySQL. Utilized Bootstrap for responsive design and JavaScript for interactive features. Skills showcased include frontend web development, UI/UX design, and creating dynamic websites.",
    image: "/hq720.jpg",
    tags: ["Python", "react", "MySQL", "Django"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "Sales Dashboard",
    description: "Created a comprehensive sales analytics dashboard using Microsoft Excel and VBA. Utilized advanced Excel functions and pivot tables to generate insights and trends. This project demonstrates proficiency in data analysis and dashboard creation using Excel.",
    image: "/images.jpg",
    tags: ["Excel", "Data Analysis", "powerbi", "Dashboard"],
    githubLink: "#",
    liveLink: "#"
  }
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary rounded-full text-highlight mb-3 opacity-0 animate-fade-in" style={{animationDelay: "0.1s", animationFillMode: "forwards"}}>
            PROJECTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 opacity-0 animate-fade-in" style={{animationDelay: "0.2s", animationFillMode: "forwards"}}>
            My Recent Work
          </h2>
          <p className="text-muted-foreground opacity-0 animate-fade-in" style={{animationDelay: "0.3s", animationFillMode: "forwards"}}>
            Explore my portfolio of projects that demonstrate my skills and expertise in creating
            effective solutions for real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });
            
            return (
              <div 
                key={index}
                ref={ref}
                className={cn(
                  "project-card bg-card rounded-lg overflow-hidden shadow-lg border border-border transition-all duration-300",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                  activeProject === index ? "border-highlight" : ""
                )}
                style={{ 
                  transitionDelay: `${index * 0.1}s`,
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" 
                }}
                onMouseEnter={() => setActiveProject(index)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="skill-badge inline-block px-2 py-1 text-xs font-medium bg-secondary text-highlight rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <a 
                      href={project.githubLink} 
                      className="inline-flex items-center text-muted-foreground hover:text-highlight transition-colors"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href={project.liveLink} 
                      className="inline-flex items-center text-highlight font-medium hover:underline"
                    >
                      <span className="mr-1">View Project</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
