import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, FileText, Database, Presentation, Video as VideoIcon } from "lucide-react";

// Define the resource types and their corresponding icons
const resourceTypes = {
  github: { label: "GitHub", icon: Github},
  demo: { label: "Demo", icon: ExternalLink },
  article: { label: "Article", icon: FileText },
  dataset: { label: "Dataset", icon: Database },
  slides: { label: "Slides", icon: Presentation },
  video: { label: "Video", icon: VideoIcon }
};

// { type: "github", url: "https://github.com/yourusername/market-analysis" },
// { type: "demo", url: "https://market-analysis-demo.com" },
// { type: "article", url: "https://medium.com/your-article" }
// { type: "dataset", url: "https://market-analysis-demo.com" },
// { type: "slides", url: "https://medium.com/your-article" }
// { type: "video", url: "https://medium.com/your-article" }

// image: "https://elmontonero.pe/upload/uploads_images/taype_3.jpeg",

const projects = [
  {
    id: 1,
    title: "A State Supplier Search Engine for Transparent Public Contracts",
    description: "Developed a search engine to enhance transparency in public contracts by identifying suppliers, connections, and irregularities, providing insights on key suppliers and corruption risks.",
    image: "https://ebiz.pe/wp-content/uploads/sites/5/elementor/thumbs/240118-nota-a-qipdhvul2pl2iqjvlnxtrg5gske1usiqc8tyy1fe58.png",
    techStack: ["Python", "Google Cloud Platform", "Pandas", "SQL"],
    resources: [
      { type: "article", url: "/blog/1" },
      { type: "video", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
    ]
  },

    // image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",

  {
    id: 2,
    title: "A Digital Platform for Medical Oxygen Access during the COVID-19 Pandemic",
    description: "Developed a digital platform and recruited a volunteer team to collect, validate, and update data of medical oxygen sales, rentals, and refills in Perú during the COVID-19 pandemic. ",
    image: "https://pbs.twimg.com/media/EteuuDmWQAAPW4K?format=jpg&name=large",
    techStack: ["HTML", "CSS", "JavaScript", "Airtable"],
    resources: [
      { type: "article", url: "/blog/2" },
    ]
  },
  {
    id: 3,
    title: "VacuniusBot: A Real-Time COVID-19 Vaccination Center Finder",
    description: "Built a automated trading system that implements various trading strategies and risk management techniques.",
    image: "https://pbs.twimg.com/profile_images/1441429016695738369/3OgJHGkD_400x400.jpg",
    techStack: ["Python", "Google Cloud Platform", "Twitter API"],
    resources: [
      { type: "demo", url: "https://x.com/VacuniusBot/status/1446997837284265985" },
    ]
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
            <Card key={project.id} className="group hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <div className="h-48 relative overflow-hidden rounded-t-lg mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="mt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-secondary text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.resources?.map((resource) => {
                    const resourceType = resourceTypes[resource.type];
                    if (!resourceType) return null;
                    
                    const Icon = resourceType.icon;
                    
                    return (
                      <Button variant="outline" size="sm" asChild key={resource.type}>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          <Icon className="mr-2 h-4 w-4" />
                          {resourceType.label}
                        </a>
                      </Button>
                    );
                  })}
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
