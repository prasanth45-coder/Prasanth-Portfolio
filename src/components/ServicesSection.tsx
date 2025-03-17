
import { Code, Database, BarChart, ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: <Code className="h-8 w-8 text-highlight" />,
    title: "Web Development",
    description: "Building responsive, user-friendly websites and web applications using modern frameworks and technologies.",
    skills: ["Frontend Development", "Responsive Design", "JavaScript Development"]
  },
  {
    icon: <Database className="h-8 w-8 text-highlight" />,
    title: "Database Management",
    description: "Designing, implementing, and optimizing databases to ensure efficient data storage and retrieval.",
    skills: ["SQL Programming", "Database Design", "Data Manipulation"]
  },
  {
    icon: <BarChart className="h-8 w-8 text-highlight" />,
    title: "Data Analysis",
    description: "Transforming raw data into actionable insights through analytics and visualization tools.",
    skills: ["Excel Functions", "Data Visualization", "Dashboard Creation"]
  }
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary rounded-full text-highlight mb-3 opacity-0 animate-fade-in" style={{animationDelay: "0.1s", animationFillMode: "forwards"}}>
            SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 opacity-0 animate-fade-in" style={{animationDelay: "0.2s", animationFillMode: "forwards"}}>
            What I Specialize In
          </h2>
          <p className="text-muted-foreground opacity-0 animate-fade-in" style={{animationDelay: "0.3s", animationFillMode: "forwards"}}>
            Leveraging my technical skills to deliver efficient, scalable, and user-centered solutions
            that address real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={cn(
                "bg-card rounded-lg p-8 shadow-lg border border-border transition-all duration-300 opacity-0 animate-fade-in",
                activeService === index ? "border-highlight scale-[1.02]" : "hover:border-highlight/50",
              )}
              style={{animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: "forwards"}}
              onMouseEnter={() => setActiveService(index)}
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start">
                    <span className="w-2 h-2 bg-highlight rounded-full mr-2 mt-1.5"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#projects" 
                className="inline-flex items-center text-highlight font-medium hover:underline"
              >
                See related projects
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
