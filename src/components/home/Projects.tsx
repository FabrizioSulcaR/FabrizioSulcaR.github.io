import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
          {[1, 2, 3].map((i) => (
            <Card key={i} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-48 bg-muted rounded-t-lg mb-4 animate-pulse" />
                <CardTitle>Coming Soon</CardTitle>
                <CardDescription>Project description will be available soon...</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-secondary text-xs rounded-full">Tech Stack</span>
                  <span className="px-2 py-1 bg-secondary text-xs rounded-full">Coming Soon</span>
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
