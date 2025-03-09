import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Import first 3 posts from mock data
const featuredPosts = [
  {
    id: "1",
    title: "A State Supplier Search Engine for Transparent Public Contracts",
    excerpt: "How data analytics and search technology are being used to enhance transparency in government procurement and fight corruption.",
    date: "March 15, 2024",
    category: "Data Analytics",
    image: "https://ebiz.pe/wp-content/uploads/sites/5/elementor/thumbs/240118-nota-a-qipdhvul2pl2iqjvlnxtrg5gske1usiqc8tyy1fe58.png"
  },
  {
    id: "2",
    title: "A Digital Platform for Medical Oxygen Access during the COVID-19 Pandemic",
    excerpt: "Creating a life-saving digital solution to connect oxygen suppliers with patients during the height of the COVID-19 crisis.",
    date: "February 28, 2024",
    category: "Healthcare Tech",
    image: "https://pbs.twimg.com/media/EteuuDmWQAAPW4K?format=jpg&name=large"
  },
  {
    id: "3",
    title: "Problem-Solving Frameworks for Complex Systems",
    excerpt: "Analytical approaches to tackling multi-faceted challenges in technology and economics.",
    date: "January 10, 2023",
    category: "Methodology",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  }
];

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
          {featuredPosts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id}>
              <Card className="group hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="h-48 relative overflow-hidden rounded-t-lg mb-4">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
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