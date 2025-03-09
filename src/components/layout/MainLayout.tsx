import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollToTop from "@/components/utils/ScrollToTop";

interface NavLink {
  name: string;
  path: string;
}

const NAV_LINKS: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" }
];

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      setShowScrollTop(position > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Handle hash links
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/" && !location.hash;
    }
    // Remove the leading slash for section IDs
    const sectionId = path.substring(1);
    return location.hash === `#${sectionId}` || location.pathname === path;
  };

  const handleNavClick = (path: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    setIsMenuOpen(false); // Close mobile menu when clicking a link

    if (location.pathname !== "/" && path.startsWith("/")) {
      // If we're not on the home page and the path is a section,
      // first navigate to home then scroll
      navigate("/");
      setTimeout(() => {
        const sectionId = path.substring(1);
        const element = document.querySelector(`#${sectionId}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else if (location.pathname === "/" && path.startsWith("/")) {
      // If we're on the home page, just scroll to the section
      const sectionId = path.substring(1);
      const element = document.querySelector(`#${sectionId}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // For non-section links (like /blog), just navigate
      navigate(path);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <header className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b ${
        scrollPosition > 0 ? "border-border" : "border-transparent"
      } transition-colors`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-display font-bold">
              FabrizioSulcaR
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => handleNavClick(link.path, e)}
                  className={`text-sm font-medium ${
                    isActive(link.path) 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-primary transition-colors"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden animate-fade-in bg-background/95 backdrop-blur-sm border-t border-border">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => handleNavClick(link.path, e)}
                  className={`py-2 text-base ${
                    isActive(link.path) 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow pt-16">
        {children}
      </main>

      <footer className="bg-secondary py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} FabrizioSulcaR. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-2 rounded-full bg-primary text-primary-foreground shadow-md animate-fade-in z-40 hover:bg-primary/90"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </Button>
      )}
    </div>
  );
};

export default MainLayout;
