import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturedPosts = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag mb-3">Blog</span>
          <h2 className="section-heading">Featured Articles</h2>
          <p className="section-subheading max-w-3xl mx-auto">
            Insights and experiences from my journey in economics, finance, and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-48 bg-muted rounded-t-lg mb-4 animate-pulse" />
                <CardTitle>Coming Soon</CardTitle>
                <CardDescription>Article will be available soon...</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Category</span>
                  <span>Date TBA</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" asChild>
            <Link to="/blog" className="inline-flex items-center">
              View all articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
