import { useParams, Navigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import BlogHeader from "@/components/blog/BlogHeader";
import { ArrowLeft, ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Mock blog posts data - same as in Blog.tsx
const allPosts = [
  {
    id: "1",
    title: "A State Supplier Search Engine for Transparent Public Contracts",
    excerpt: "How data analytics and search technology are being used to enhance transparency in government procurement and fight corruption.",
    date: "March 15, 2024",
    category: "Data Analytics",
    image: "https://ebiz.pe/wp-content/uploads/sites/5/elementor/thumbs/240118-nota-a-qipdhvul2pl2iqjvlnxtrg5gske1usiqc8tyy1fe58.png",
    content: `
      <p class="lead">In an era where transparency in public spending is crucial, we developed a powerful search engine that helps identify and analyze government suppliers, their connections, and potential irregularities in public contracts.</p>
      
      <h2>The Challenge of Public Procurement Transparency</h2>
      <p>Public procurement represents a significant portion of government spending and is often vulnerable to corruption and inefficiencies. The challenge lies in processing and analyzing vast amounts of procurement data to identify patterns, relationships, and potential red flags that might indicate irregularities.</p>
      
      <h2>Our Solution: A Comprehensive Search Engine</h2>
      <p>We developed a search engine that combines advanced data analytics with user-friendly interfaces to make public procurement data accessible and actionable. The system processes millions of contracts and supplier records to provide insights into:</p>
      
      <ul>
        <li>Supplier profiles and their history of government contracts</li>
        <li>Network analysis of connections between suppliers and public officials</li>
        <li>Risk assessment based on various indicators and patterns</li>
        <li>Temporal analysis of contract awards and payments</li>
      </ul>
      
      <h2>Technical Implementation</h2>
      <p>The search engine was built using a stack of modern technologies:</p>
      <ul>
        <li>Python for data processing and analysis</li>
        <li>Google Cloud Platform for scalable infrastructure</li>
        <li>Pandas for data manipulation and analysis</li>
        <li>SQL for efficient data storage and retrieval</li>
      </ul>
      
      <h2>Impact and Results</h2>
      <p>The implementation of this search engine has led to several significant outcomes:</p>
      <ul>
        <li>Increased transparency in public procurement processes</li>
        <li>Identification of suspicious patterns in contract awards</li>
        <li>Better understanding of supplier networks and relationships</li>
        <li>Enhanced ability to detect and prevent corruption</li>
      </ul>
      
      <h2>Future Developments</h2>
      <p>We continue to enhance the system with new features and capabilities, including:</p>
      <ul>
        <li>Machine learning models for automated risk detection</li>
        <li>Enhanced visualization tools for complex network relationships</li>
        <li>Integration with additional data sources for more comprehensive analysis</li>
      </ul>
      
      <p>This project demonstrates how technology can be leveraged to promote transparency and accountability in public spending, ultimately contributing to better governance and more efficient use of public resources.</p>
    `
  },
  {
    id: "2",
    title: "A Digital Platform for Medical Oxygen Access during the COVID-19 Pandemic",
    excerpt: "Creating a life-saving digital solution to connect oxygen suppliers with patients during the height of the COVID-19 crisis.",
    date: "February 28, 2024",
    category: "Healthcare Tech",
    image: "https://pbs.twimg.com/media/EteuuDmWQAAPW4K?format=jpg&name=large",
    content: `
      <p class="lead">During the critical phases of the COVID-19 pandemic, access to medical oxygen became a matter of life and death. We developed a digital platform to bridge the gap between oxygen suppliers and patients in urgent need.</p>
      
      <h2>The Oxygen Crisis</h2>
      <p>The COVID-19 pandemic created an unprecedented demand for medical oxygen, overwhelming traditional supply chains and distribution systems. Many patients and their families struggled to locate available oxygen supplies when they needed them most.</p>
      
      <h2>Our Digital Solution</h2>
      <p>We created a real-time digital platform that:</p>
      <ul>
        <li>Connected oxygen suppliers directly with patients and healthcare facilities</li>
        <li>Provided live updates on oxygen availability across different locations</li>
        <li>Facilitated quick and efficient oxygen delivery coordination</li>
        <li>Helped manage and prioritize urgent cases</li>
      </ul>
      
      <h2>Technical Architecture</h2>
      <p>The platform was built using robust and scalable technologies:</p>
      <ul>
        <li>React for the frontend interface</li>
        <li>Node.js for backend services</li>
        <li>MongoDB for flexible data storage</li>
        <li>Real-time updates using WebSocket technology</li>
        <li>Mobile-responsive design for accessibility</li>
      </ul>
      
      <h2>Key Features</h2>
      <p>The platform included several critical features:</p>
      <ul>
        <li>Real-time inventory tracking</li>
        <li>Automated matching of suppliers with patients</li>
        <li>Priority queuing system for urgent cases</li>
        <li>SMS and email notifications</li>
        <li>Interactive maps for supplier locations</li>
      </ul>
      
      <h2>Impact</h2>
      <p>The platform made a significant difference during the crisis:</p>
      <ul>
        <li>Reduced average time to locate oxygen supplies by 70%</li>
        <li>Connected over 1,000 patients with suppliers</li>
        <li>Helped coordinate emergency deliveries 24/7</li>
        <li>Provided critical data for resource allocation</li>
      </ul>
      
      <h2>Lessons Learned</h2>
      <p>This project taught us valuable lessons about:</p>
      <ul>
        <li>The importance of rapid deployment in crisis situations</li>
        <li>Building scalable solutions under pressure</li>
        <li>The power of technology in addressing healthcare emergencies</li>
        <li>The value of community-driven solutions</li>
      </ul>
      
      <p>While developed in response to a crisis, this platform has evolved into a sustainable solution for improving medical resource distribution beyond the pandemic.</p>
    `
  },
  {
    id: "3",
    title: "Problem-Solving Frameworks for Complex Systems",
    excerpt: "Analytical approaches to tackling multi-faceted challenges in technology and economics.",
    date: "January 10, 2023",
    category: "Methodology",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    content: `
      <p class="lead">Complex systems in technology and economics present unique challenges that require sophisticated problem-solving approaches. This article explores effective frameworks for analyzing and addressing these multi-faceted problems.</p>
      
      <h2>Understanding Complex Systems</h2>
      <p>Complex systems are characterized by numerous interconnected components, non-linear relationships, and emergent properties that cannot be predicted from analyzing individual parts. Examples include financial markets, technological ecosystems, and social networks.</p>
      
      <p>Traditional problem-solving approaches often fall short when applied to complex systems because they tend to oversimplify relationships and ignore important feedback loops. Effective analysis requires frameworks specifically designed for complexity.</p>
      
      <h2>Systems Thinking Approach</h2>
      <p>Systems thinking is a holistic approach that focuses on understanding how different parts of a system interact and influence each other. This framework emphasizes identifying feedback loops, understanding time delays, and recognizing leverage points where small changes can produce large effects.</p>
      
      <p>By mapping system components and their relationships, systems thinking helps identify non-obvious connections and potential unintended consequences of interventions. This is particularly valuable in economic policy, where well-intentioned actions can sometimes produce counterintuitive results.</p>
      
      <h2>Bayesian Analysis</h2>
      <p>Bayesian analysis provides a rigorous framework for updating beliefs based on new evidence. This approach is particularly valuable in environments with uncertainty and incomplete information—common characteristics of complex economic and technological systems.</p>
      
      <p>By explicitly quantifying prior beliefs and systematically incorporating new data, Bayesian methods help navigate uncertain terrain and make more reliable predictions. This framework also encourages continuous learning and adaptation as new information becomes available.</p>
      
      <h2>Network Analysis</h2>
      <p>Network analysis examines the structure of relationships between system components. By identifying central nodes, clusters, and connection patterns, this approach reveals system vulnerabilities, potential cascade effects, and optimal intervention points.</p>
      
      <p>In financial systems, network analysis can help identify systemically important institutions whose failure might trigger widespread instability. In technological ecosystems, it can reveal critical dependencies and potential bottlenecks.</p>
      
      <h2>Practical Applications</h2>
      <p>These frameworks can be combined and applied to various complex challenges. For instance, when analyzing the potential impact of a new financial technology, one might use systems thinking to map relationships, Bayesian analysis to handle uncertainty, and network analysis to identify key stakeholders and potential adoption patterns.</p>
      
      <p>The key is selecting the right combination of tools for each specific problem and remaining flexible enough to adapt as understanding evolves.</p>
    `
  },
  {
    id: "4",
    title: "The Future of Work in an AI-Driven Economy",
    excerpt: "Examining how artificial intelligence is transforming job markets and career opportunities.",
    date: "November 5, 2022",
    category: "Economics",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    content: `
      <p class="lead">Artificial intelligence is rapidly transforming the global economy and reshaping labor markets. This article examines the future of work in an AI-driven economy and explores the implications for careers, skills, and economic policy.</p>
      
      <h2>The AI Revolution in the Workplace</h2>
      <p>AI technologies are automating routine tasks across various industries, from manufacturing to finance to healthcare. While this automation improves efficiency and productivity, it also raises questions about job displacement and the changing nature of work.</p>
      
      <p>Unlike previous technological revolutions that primarily affected manual and routine jobs, AI has the potential to impact knowledge work and professional occupations that were previously thought to be safe from automation. This broader scope of disruption presents unique challenges for workers and policymakers.</p>
      
      <h2>Emerging Job Markets and Opportunities</h2>
      <p>While some jobs will inevitably be automated, AI is also creating new career opportunities. There's growing demand for AI specialists, data scientists, and professionals who can develop, maintain, and work alongside AI systems. Additionally, roles that require uniquely human capabilities—creativity, emotional intelligence, ethical judgment—are likely to become more valuable.</p>
      
      <p>The most promising career paths will likely be at the intersection of technical knowledge and domain expertise. Professionals who understand both AI capabilities and specific industry needs will be well-positioned to create value in the AI-driven economy.</p>
      
      <h2>Skills for the Future Workforce</h2>
      <p>Adapting to an AI-driven economy requires developing a mix of technical and human skills. Technical skills like data literacy, computational thinking, and basic programming will become increasingly important across many professions. Equally crucial are adaptability, critical thinking, and lifelong learning—skills that enable workers to evolve as technology and job markets change.</p>
      
      <p>Educational systems will need to evolve to emphasize these skills and provide more flexible learning paths that allow for continuous skill development throughout careers.</p>
      
      <h2>Economic and Policy Implications</h2>
      <p>The transition to an AI-driven economy raises important policy questions about income distribution, job transition support, and educational reform. If the benefits of AI-driven productivity gains accrue primarily to capital owners rather than workers, inequality could increase without appropriate policy interventions.</p>
      
      <p>Potential policy responses include expanded education and retraining programs, changes to social safety nets, and new models of work and income distribution. Finding the right balance between encouraging innovation and ensuring broad-based prosperity will be a critical challenge for economic policymakers.</p>
    `
  },
  {
    id: "5",
    title: "Quantitative Models for Economic Forecasting",
    excerpt: "A deep dive into mathematical approaches for predicting economic trends and market behaviors.",
    date: "September 18, 2022",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    content: `
      <p class="lead">Economic forecasting plays a crucial role in financial planning, investment decisions, and policy formulation. This article explores advanced quantitative models for predicting economic trends and market behaviors, examining their strengths, limitations, and practical applications.</p>
      
      <h2>The Evolution of Economic Modeling</h2>
      <p>Economic forecasting has evolved significantly over the decades, from simple trend extrapolation to sophisticated mathematical models that incorporate multiple variables and complex relationships. Modern approaches leverage computational power and large datasets to capture nuances that were previously impossible to model.</p>
      
      <p>Despite these advances, economic forecasting remains challenging due to the complex, adaptive nature of economic systems and the influence of human behavior, which can be unpredictable and sometimes irrational.</p>
      
      <h2>Time Series Models</h2>
      <p>Time series models, such as ARIMA (Autoregressive Integrated Moving Average) and its variants, remain workhorses of economic forecasting. These models identify patterns and dependencies in historical data to project future values. They're particularly useful for short-term forecasting when underlying conditions remain relatively stable.</p>
      
      <p>More advanced time series techniques, like GARCH models, specifically address the volatility clustering common in financial markets, providing more accurate forecasts during periods of market turbulence.</p>
      
      <h2>Structural Econometric Models</h2>
      <p>Structural models attempt to capture causal relationships based on economic theory. These models express how different economic variables—like interest rates, inflation, and GDP—influence each other through systems of equations.</p>
      
      <p>While theoretically sound, structural models require assumptions about economic relationships that may not always hold in practice. However, they provide valuable insights into the mechanisms driving economic changes, not just predictions of outcomes.</p>
      
      <h2>Machine Learning Approaches</h2>
      <p>Machine learning techniques, from random forests to neural networks, have increasingly been applied to economic forecasting. These methods excel at identifying complex, non-linear patterns in data without requiring explicit theoretical specification.</p>
      
      <p>The flexibility of machine learning models allows them to capture relationships that traditional models might miss. However, they sometimes act as "black boxes," making it difficult to understand the economic logic behind their predictions—a significant limitation for policy applications.</p>
      
      <h2>Ensemble Methods and Combined Forecasts</h2>
      <p>Research consistently shows that combining forecasts from different models often produces more accurate predictions than any single model. Ensemble methods leverage this insight by systematically integrating predictions from multiple approaches.</p>
      
      <p>These combined forecasts can mitigate the weaknesses of individual models and provide more robust predictions across different economic scenarios and time horizons.</p>
    `
  },
  {
    id: "6",
    title: "Ethics in AI: A Financial Perspective",
    excerpt: "Exploring the ethical considerations of implementing AI in financial decision-making processes.",
    date: "July 30, 2022",
    category: "Ethics",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    content: `
      <p class="lead">As artificial intelligence becomes increasingly integrated into financial systems, ethical considerations take on new importance. This article explores the ethical dimensions of AI in finance, from algorithmic bias to transparency and accountability.</p>
      
      <h2>The Ethical Landscape</h2>
      <p>Financial services directly impact people's economic well-being, making ethical considerations particularly important. When AI systems make or influence financial decisions—from credit approvals to investment strategies to insurance pricing—the potential for both positive and negative impacts on individuals and society is significant.</p>
      
      <p>The rapid adoption of AI in finance has outpaced the development of ethical frameworks and regulations, creating a gap that financial institutions, technology companies, and policymakers are now working to address.</p>
      
      <h2>Algorithmic Bias in Financial Services</h2>
      <p>One of the most pressing ethical concerns is algorithmic bias. AI systems learn from historical data, which may contain implicit biases based on race, gender, socioeconomic status, or other protected characteristics. When these biases are encoded into algorithms, they can perpetuate or even amplify existing inequalities.</p>
      
      <p>For example, credit scoring algorithms trained on historical lending data might inadvertently discriminate against certain demographic groups that have historically had less access to credit. This could occur even if the algorithms don't explicitly consider protected characteristics, as other variables can act as proxies.</p>
      
      <h2>Transparency and Explainability</h2>
      <p>Many advanced AI systems, especially deep learning models, operate as "black boxes" whose decision-making processes are difficult to interpret. This lack of transparency presents ethical challenges in financial contexts, where individuals have a right to understand decisions that affect them significantly.</p>
      
      <p>Explainable AI (XAI) approaches that make algorithmic decisions more transparent and interpretable are gaining importance in finance. These techniques help ensure that AI systems can be audited, their decisions can be explained to affected individuals, and any issues can be identified and addressed.</p>
      
      <h2>Privacy and Data Usage</h2>
      <p>AI systems in finance typically rely on vast amounts of personal and financial data. This raises important questions about privacy, consent, and appropriate data usage. As AI enables more sophisticated analysis of individual behavior, the boundary between helpful personalization and invasive profiling becomes increasingly blurred.</p>
      
      <p>Ethical data practices require clear consent mechanisms, appropriate data security measures, and thoughtful consideration of how personal information is used in financial decision-making.</p>
      
      <h2>Building Ethical AI in Finance</h2>
      <p>Creating ethical AI systems in finance requires a multifaceted approach. Technical solutions like bias detection tools and explainable AI methods are important, but equally crucial are organizational practices like diverse development teams, ethical review processes, and ongoing monitoring of AI systems.</p>
      
      <p>Regulatory frameworks also play a vital role in establishing minimum standards and creating accountability. However, regulations must balance protection against innovation, ensuring that ethical considerations don't unduly restrict beneficial AI applications in finance.</p>
    `
  }
];

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
