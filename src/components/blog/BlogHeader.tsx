
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogHeaderProps {
  title: string;
  subtitle?: string;
}

const BlogHeader = ({ title, subtitle }: BlogHeaderProps) => {
  return (
    <section className="pt-24 pb-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to all posts
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-display font-bold text-primary mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-muted-foreground max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default BlogHeader;
