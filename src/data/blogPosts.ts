import { BlogPost } from "@/components/blog/BlogCard";

// Convert title to slug
function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

// Add a CSS class to the blog post content container

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
        <div class="blog-post-content">
        <p>During Pedro Castillo's administration, corruption scandals were dominating our television and radio broadcasts. When I realized that public indignation wasn't leading us to somewhere else, I decided to harness the power of data to investigate corruption in public contracts. During the university summer break of 2022, I began automating data extraction from public visit records of the Presidential Office, Ministries, and Congress. My initial goal was to identify connections between visitors to government officials who might be acting as political operators of enterprises.</p>

        <p>In February, I discovered the "Datathon for Integrity and the Fight against Corruption in Public Works," a hackathon organized by Data Science Research Perú and USAID. This presented an opportunity to scale the project.</p>

        <blockquote class="twitter-tweet">
          <p lang="es" dir="ltr">¡Atención! 📢<br><br>Participa en el Datathon por la Integridad y Lucha contra la Corrupción en Obras Públicas.<br><br>Inscripciones hasta el 13 de febrero ⬇️<a href="https://t.co/Yd9Uy9Yvxl">https://t.co/Yd9Uy9Yvxl</a><a href="https://twitter.com/hashtag/DatathonIntegridad?src=hash&amp;ref_src=twsrc%5Etfw">#DatathonIntegridad</a> <a href="https://twitter.com/hashtag/DSRP?src=hash&amp;ref_src=twsrc%5Etfw">#DSRP</a> <a href="https://twitter.com/hashtag/USAID?src=hash&amp;ref_src=twsrc%5Etfw">#USAID</a> <a href="https://twitter.com/hashtag/Per%C3%BAIntegro?src=hash&amp;ref_src=twsrc%5Etfw">#PerúIntegro</a> <a href="https://t.co/Yd9Uy9Yvxl">pic.twitter.com/Yd9Uy9Yvxl</a></p>&mdash; Data Science Research Perú (@DataScience_Pe) <a href="https://twitter.com/DataScience_Pe/status/1492197376622309377?ref_src=twsrc%5Etfw">February 11, 2022</a>
        </blockquote>

        <p>I invited Rodrigo Torres and Sebastian Gomez —two exceptional friends I had met through OxígenoPerú and an R-based Twitter bot project for OpenCOVID— to join ETDLP, the dream team. I led the data extraction pipeline while Rodrigo handled infrastructure and Sebastian managed data analysis.</p>

        <p>We performed well in the first phase, presenting some of our preliminary datasets. Afterward, we consulted with the investigation journalists from El Comercio and Latina to better understand corruption mechanisms and how data could help trace illegal activities. These discussions led us to two key decisions: to focus on corruption among state suppliers rather than high-level political connections, and to develop a tool primarily for journalists, given the sensitive nature of the data and that our coincidence analysis alone couldn't definitively prove corruption.</p>

        <p>That's why we developed additional extraction pipelines for supplier information, including: a decade-long list of state suppliers, the projects they won, company formation details (to identify whether the same individuals were operating through different enterprises), records of banned suppliers, company sanctions (OSCE), and the Registry of Political Organizations (ROP).</p>

        <p>As our vision expanded from identifying coincidences to creating a comprehensive transparency portal for state contracts, we grew the team to include Adriana Perez (UX Designer) and Alonso Guevara (Full-Stack Developer).</p>

        <p>With our complete team, we focused on advancing through the contest's second phase. That's how we developed HORUS, a state supplier search engine that allowed users to identify suppliers, company relationships, and coincidences in public contracts. Our tool promoted government transparency by providing insights on the most active suppliers, common service categories, suppliers who continued receiving contracts despite being banned, companies and individuals with the highest sanctions and disqualifications, and individuals who met with public officials before winning contracts while sharing political party affiliations</p>

        <p>We presented our product during demo day, which you can watch below:</p>

        <div class="video-container">
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/pkkABSAwVWM" title="HORUS Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <p>Following the contest, two things happened: we had to make the public product launch, and I was invited to present HORUS at the Digital Experiences in Citizen Oversight for Public Procurement Webinar.</p>

        <blockquote class="twitter-tweet">
          <p lang="es" dir="ltr">📢 Webinar: Experiencias digitales en la vigilancia ciudadana para las compras públicas<br><br>🗓️ Miércoles 18 de mayo<br>⏰ 11:00 a.m.<br>💻 Vía Zoom<br><br>Inscripciones: <a href="https://t.co/Yd9Uy9Yvxl">https://t.co/Yd9Uy9Yvxl</a><br><br>Organiza: <a href="https://twitter.com/proeticaperu?ref_src=twsrc%5Etfw">@proeticaperu</a> <a href="https://twitter.com/hashtag/ComprasP%C3%BAblicas?src=hash&amp;ref_src=twsrc%5Etfw">#ComprasPúblicas</a> <a href="https://twitter.com/hashtag/Transparencia?src=hash&amp;ref_src=twsrc%5Etfw">#Transparencia</a> <a href="https://twitter.com/hashtag/VigilanciaCiudadana?src=hash&amp;ref_src=twsrc%5Etfw">#VigilanciaCiudadana</a> <a href="https://t.co/Yd9Uy9Yvxl">pic.twitter.com/Yd9Uy9Yvxl</a></p>&mdash; Proética (@proeticaperu) <a href="https://twitter.com/proeticaperu/status/1526728952840085509?ref_src=twsrc%5Etfw">May 17, 2022</a>
        </blockquote>

        <p>Unfortunately, after several months, we had to discontinue the project due to unsustainable computing costs. Maintaining HORUS required high computing costs, and without funding, we struggled to keep the platform running. We explored turning it into a business model to sustain the servers, but ultimately, we couldn't secure the necessary money.</p>

        <p>Before shutting down, we shared all our findings with the journalists who had helped us iterate the product. Today, we still help them whenever possible and still dreaming about a country we envision and deserve—one where the public sector functions effectively and creates opportunities for all.</p>
        </div>`
  },
  {
    id: "digital-platform-medical-oxygen-covid-19-pandemic",
    title: "A Digital Platform for Medical Oxygen Access during the COVID-19 Pandemic",
    excerpt: "Creating a life-saving digital solution to connect oxygen suppliers with patients during the height of the COVID-19 crisis.",
    date: "February 28, 2024",
    category: "Healthcare Tech",
    image: "https://pbs.twimg.com/media/EteuuDmWQAAPW4K?format=jpg&name=large",
    content: `<div class="blog-post-content">
    // Existing content here
    </div>`
  },
  // Add the rest of your blog posts with proper slug IDs
  // ...
];

// Add the style to the document
const blogPostContentStyle = `
<style>
  .blog-post-content {
    text-align: justify;
    text-justify: inter-word; /* This provides better spacing between words */
  }
</style>
`;

document.head.insertAdjacentHTML('beforeend', blogPostContentStyle);

// Export the posts for use in other components
export default allPosts;

// Get featured posts (first 3)
export const getFeaturedPosts = () => allPosts.slice(0, 3); 
