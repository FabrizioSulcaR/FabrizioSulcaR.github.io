
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link to={`/blog/${post.id}`} className="group">
      <article className="h-full flex flex-col bg-white dark:bg-black rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
        </div>
        <div className="flex-1 p-6 flex flex-col">
          <div className="mb-2 flex items-center">
            <span className="text-xs font-medium text-muted-foreground">{post.date}</span>
            <span className="mx-2 text-muted-foreground">•</span>
            <span className="text-xs font-medium text-primary">{post.category}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
          <p className="text-muted-foreground text-sm mb-4 flex-1">{post.excerpt}</p>
          <span className="text-sm font-medium text-primary flex items-center group-hover:translate-x-1 transition-transform">
            Read more <ArrowRight size={14} className="ml-1" />
          </span>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
