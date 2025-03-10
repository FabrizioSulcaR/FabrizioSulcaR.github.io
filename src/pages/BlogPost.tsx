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
      
      <article className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-muted-foreground mb-6 sm:mb-8">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1 sm:mr-2" />
                <span className="text-sm sm:text-base">{post.date}</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center">
                <User size={16} className="mr-1 sm:mr-2" />
                <span className="text-sm sm:text-base">FabrizioSulcaR</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <span className="text-primary text-sm sm:text-base">{post.category}</span>
            </div>
            
            <div className="mb-8 sm:mb-12 rounded-lg overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="prose prose-sm sm:prose-base md:prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}>
            </div>
            
            <div className="border-t border-border mt-8 sm:mt-12 pt-8 sm:pt-12">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                {prevPost ? (
                  <Button variant="ghost" asChild className="w-full sm:w-auto justify-start">
                    <Link to={`/blog/${prevPost.id}`} className="flex items-center">
                      <ArrowLeft size={16} className="mr-2 flex-shrink-0" />
                      <div className="text-left overflow-hidden">
                        <div className="text-xs text-muted-foreground mb-1">Previous article</div>
                        <div className="font-medium truncate">{prevPost.title}</div>
                      </div>
                    </Link>
                  </Button>
                ) : (
                  <div />
                )}
                
                {nextPost && (
                  <Button variant="ghost" asChild className="w-full sm:w-auto justify-end">
                    <Link to={`/blog/${nextPost.id}`} className="flex items-center">
                      <div className="text-right overflow-hidden">
                        <div className="text-xs text-muted-foreground mb-1">Next article</div>
                        <div className="font-medium truncate">{nextPost.title}</div>
                      </div>
                      <ArrowRight size={16} className="ml-2 flex-shrink-0" />
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
