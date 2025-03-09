import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI-Powered Market Analysis",
    description: "Developed a machine learning model to analyze financial market trends and predict potential market movements using Python and TensorFlow.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    techStack: ["Python", "TensorFlow", "Pandas", "SQL"],
    githubUrl: "https://github.com/yourusername/market-analysis",
    liveUrl: "https://market-analysis-demo.com"
  },
  {
    id: 2,
    title: "Economic Data Visualization Platform",
    description: "Created an interactive dashboard for visualizing complex economic datasets using React and D3.js.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    techStack: ["React", "D3.js", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/yourusername/econ-viz",
    liveUrl: "https://econ-viz-demo.com"
  },
  {
    id: 3,
    title: "Automated Trading System",
    description: "Built a automated trading system that implements various trading strategies and risk management techniques.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    techStack: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/yourusername/trading-system",
    liveUrl: "https://trading-system-demo.com"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag mb-3">Portfolio</span>
          <h2 className="section-heading">Projects</h2>
          <p className="section-subheading max-w-3xl mx-auto">
            A collection of what I've built, explored, and learned along the way
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-48 relative overflow-hidden rounded-t-lg mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardTitle className="line-clamp-2">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-secondary text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
