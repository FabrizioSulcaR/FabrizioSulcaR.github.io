import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Experience from "@/components/home/Experience";
import Projects from "@/components/home/Projects";
import FeaturedPosts from "@/components/home/FeaturedPosts";
import ContactLinks from "@/components/home/ContactLinks";

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <FeaturedPosts />
      <ContactLinks />
    </MainLayout>
  );
};

export default Index;
