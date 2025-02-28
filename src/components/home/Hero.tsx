import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (sectionId: string) => {
    navigate(`/#${sectionId}`);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-secondary/40 dark:to-secondary/20 -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center z-10">
        <span className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium text-primary mb-6 animate-fade-in">
          Economics & Finance | AI & Technology | Strategy
        </span>
        
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-display font-bold text-primary tracking-tight mb-6 animate-fade-in [animation-delay:200ms]">
          <span className="block">Transforming data insights</span>
          <span className="block">into strategic advantage</span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in [animation-delay:400ms]">
          Bringing analytical rigor and a passion for problem-solving to today's world.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:600ms]">
          <Button 
            onClick={() => scrollToSection('about')}
            className="px-6 py-6 text-base"
          >
            Learn about me
          </Button>
          <Button 
            onClick={() => scrollToSection('projects')}
            variant="outline" 
            className="px-6 py-6 text-base"
          >
            View my projects
          </Button>
        </div>
      </div>
      
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10"
        onClick={() => scrollToSection('about')}
      >
        <ArrowDown className="text-primary h-6 w-6" />
      </div>
    </section>
  );
};

export default Hero;
