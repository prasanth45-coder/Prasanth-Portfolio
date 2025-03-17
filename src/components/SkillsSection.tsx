
import { useState } from "react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    name: "Programming",
    skills: [
      { name: "Python", level: 85 },
      { name: "SQL", level: 80 },
      { name: "JavaScript", level: 75 },
    ]
  },
  {
    name: "Web Development",
    skills: [
      { name: "HTML/CSS", level: 85 },
      { name: "Frontend Dev", level: 75 },
      { name: "Bootstrap", level: 80 },
    ]
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", level: 75 },
      { name: "GitHub", level: 80 },
      { name: "Excel", level: 90 },
    ]
  }
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary rounded-full text-highlight mb-3 opacity-0 animate-fade-in" style={{animationDelay: "0.1s", animationFillMode: "forwards"}}>
            SKILLS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 opacity-0 animate-fade-in" style={{animationDelay: "0.2s", animationFillMode: "forwards"}}>
            Technical Expertise
          </h2>
          <p className="text-muted-foreground opacity-0 animate-fade-in" style={{animationDelay: "0.3s", animationFillMode: "forwards"}}>
            A showcase of my technical skills and proficiencies across various domains.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 space-y-4">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                className={cn(
                  "w-full text-left px-6 py-4 rounded-lg transition-all duration-300 opacity-0 animate-fade-in",
                  activeCategory === index 
                    ? "bg-highlight text-primary-foreground font-medium" 
                    : "bg-card hover:bg-card/80"
                )}
                style={{animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: "forwards"}}
                onClick={() => setActiveCategory(index)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="w-full md:w-2/3 bg-card rounded-lg p-8 shadow-lg opacity-0 animate-fade-in" style={{animationDelay: "0.4s", animationFillMode: "forwards"}}>
            <h3 className="text-xl font-bold mb-6">{skillCategories[activeCategory].name}</h3>
            <div className="space-y-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-highlight rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animation: `growWidth 1s ease-out ${index * 0.2}s forwards`,
                        opacity: 0
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
