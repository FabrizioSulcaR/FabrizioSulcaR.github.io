import { BlogPost } from "@/components/blog/BlogCard";

// Convert title to slug
function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

// Create all blog posts with slugs instead of numeric IDs
const allPosts: BlogPost[] = [
  {
    id: "state-supplier-search-engine-transparent-public-contracts",
    title: "A State Supplier Search Engine for Transparent Public Contracts",
    excerpt: "How data analytics and search technology are being used to enhance transparency in government procurement and fight corruption.",
    date: "March 15, 2024",
    category: "Data Analytics",
    image: "https://ebiz.pe/wp-content/uploads/sites/5/elementor/thumbs/240118-nota-a-qipdhvul2pl2iqjvlnxtrg5gske1usiqc8tyy1fe58.png",
    content: `
      <!-- Content for this post -->
    `
  },
  {
    id: "digital-platform-medical-oxygen-covid-19-pandemic",
    title: "A Digital Platform for Medical Oxygen Access during the COVID-19 Pandemic",
    excerpt: "Creating a life-saving digital solution to connect oxygen suppliers with patients during the height of the COVID-19 crisis.",
    date: "February 28, 2024",
    category: "Healthcare Tech",
    image: "https://pbs.twimg.com/media/EteuuDmWQAAPW4K?format=jpg&name=large",
    content: `
      <!-- Content for this post -->
    `
  },
  // Add the rest of your blog posts with proper slug IDs
  // ...
];

// Export the posts for use in other components
export default allPosts;

// Get featured posts (first 3)
export const getFeaturedPosts = () => allPosts.slice(0, 3); 