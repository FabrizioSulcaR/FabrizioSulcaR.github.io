import { Brain, Globe, BookOpen, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag mb-3">About Me</span>
          <h2 className="section-heading">Who I Am</h2>
          <p className="section-subheading max-w-3xl mx-auto">
            An Economics student with a deep passion for technology, data and complex challenges
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 glass-card rounded-lg hover-scale">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Brain className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Strategic Thinking</h3>
            <p className="text-muted-foreground">
              Approaching complex problems with a strategic mindset, identifying opportunities and driving impactful decisions
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 glass-card rounded-lg hover-scale">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Globe className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Enthusiasm </h3>
            <p className="text-muted-foreground">
            Passionate about AI and its potential to transform industries and build intelligent andscalable solutions
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 glass-card rounded-lg hover-scale">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <TrendingUp className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Data-Driven Insights</h3>
            <p className="text-muted-foreground">
              Experience as a Data Engineer delivering actionable insights that leads business decision making
            </p>
          </div>
        </div>
        
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="order-1">
              <h3 className="text-2xl font-display font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-6">
                I am a student of Economics at the Universidad del Pacífico and of Economics and Finance at the University of London, under the academic direction of The London School of Economics (LSE).
              </p>
              <p className="text-muted-foreground mb-6">
                Before diving into the  startup world, I joined Economics with the deep desire to be a policy-maker and help improve the lives of all Peruvians by promoting the reforms that the country needs.
              </p>
              <p className="text-muted-foreground mb-6">
                I discovered my passion for programming, continuous learning, changing environments, and scalable ideas after meeting the right people in the midst of the COVID19 pandemic. That's when everything started to make sense and I decided that I could help others from other angles.
              </p>
              <p className="text-muted-foreground">
                I am currently building the future at SkillMapper, an AI startup where we help young professionals unlock their full potential.
              </p>
            </div>
            
            <div className="relative aspect-[3/4] md:aspect-auto md:h-[600px] rounded-lg overflow-hidden order-2 shadow-lg">
              <img 
                src="https://res.cloudinary.com/dfce9ek0h/image/upload/v1740752749/personal-website/pnpx48wt2amtmsvasgma.jpg" 
                alt="Profile photo of Fabrizio Sulca Reynaldo" 
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-white font-medium">Fabrizio Sulca Reynaldo</p>
                <p className="text-white/80 text-sm">Economics & Finance Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
