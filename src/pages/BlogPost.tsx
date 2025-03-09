import { useParams, Navigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import BlogHeader from "@/components/blog/BlogHeader";
import { ArrowLeft, ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import allPosts from "@/data/blogPosts";

const BlogPost = () => {
  const { id } = useParams();
  const post = allPosts.find(post => post.id === id);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }
  
  // Find previous and next posts
  const currentIndex = allPosts.findIndex(p => p.id === id);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <MainLayout>
      <BlogHeader title={post.title} subtitle={post.excerpt} />
      
      <article className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 text-muted-foreground mb-8">
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>{post.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>FabrizioSulcaR</span>
              </div>
              <span>•</span>
              <span className="text-primary">{post.category}</span>
            </div>
            
            <div className="mb-12 rounded-lg overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}>
            </div>
            
            <div className="border-t border-border mt-12 pt-12">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                {prevPost ? (
                  <Button variant="ghost" asChild className="mb-4 sm:mb-0">
                    <Link to={`/blog/${prevPost.id}`} className="flex items-center">
                      <ArrowLeft size={16} className="mr-2" />
                      <div className="text-left">
                        <div className="text-xs text-muted-foreground mb-1">Previous article</div>
                        <div className="font-medium">{prevPost.title}</div>
                      </div>
                    </Link>
                  </Button>
                ) : (
                  <div />
                )}
                
                {nextPost && (
                  <Button variant="ghost" asChild>
                    <Link to={`/blog/${nextPost.id}`} className="flex items-center">
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground mb-1">Next article</div>
                        <div className="font-medium">{nextPost.title}</div>
                      </div>
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </MainLayout>
  );
};

export default BlogPost;
