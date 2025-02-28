
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import BlogCard, { BlogPost } from "@/components/blog/BlogCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Mock blog posts data
const allPosts: BlogPost[] = [
  {
    id: "1",
    title: "Economic Implications of AI Adoption in Financial Markets",
    excerpt: "Exploring how artificial intelligence is reshaping investment strategies and market dynamics.",
    date: "May 15, 2023",
    category: "Economics",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    id: "2",
    title: "Bridging Finance and Technology: A Personal Journey",
    excerpt: "My perspective on the evolving relationship between traditional finance and emerging technologies.",
    date: "March 22, 2023",
    category: "Career",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742"
  },
  {
    id: "3",
    title: "Problem-Solving Frameworks for Complex Systems",
    excerpt: "Analytical approaches to tackling multi-faceted challenges in technology and economics.",
    date: "January 10, 2023",
    category: "Methodology",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: "4",
    title: "The Future of Work in an AI-Driven Economy",
    excerpt: "Examining how artificial intelligence is transforming job markets and career opportunities.",
    date: "November 5, 2022",
    category: "Economics",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: "5",
    title: "Quantitative Models for Economic Forecasting",
    excerpt: "A deep dive into mathematical approaches for predicting economic trends and market behaviors.",
    date: "September 18, 2022",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742"
  },
  {
    id: "6",
    title: "Ethics in AI: A Financial Perspective",
    excerpt: "Exploring the ethical considerations of implementing AI in financial decision-making processes.",
    date: "July 30, 2022",
    category: "Ethics",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  }
];

// Available categories for filtering
const categories = ["All", "Economics", "Finance", "Career", "Methodology", "Ethics"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter posts based on search term and category
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout>
      <section className="pt-24 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Learning in Loops
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Insights, analyses, experiences and reflections I have day to day
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;
