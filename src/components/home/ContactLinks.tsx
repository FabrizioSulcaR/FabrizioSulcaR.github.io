
import { Mail, Linkedin, Twitter } from "lucide-react";

const ContactLinks = () => {
  return (
    <section id="contact" className="py-12 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-display font-semibold mb-6">Connect with me</h3>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a 
              href="mailto:fr.sulcar@alum.up.edu.pe" 
              className="flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} className="mr-2" />
              <span>fr.sulcar@alum.up.edu.pe</span>
            </a>
            
            <a 
              href="https://nl.linkedin.com/in/fabriziosulcar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} className="mr-2" />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="https://twitter.com/fabriziosulcar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter size={20} className="mr-2" />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLinks;
