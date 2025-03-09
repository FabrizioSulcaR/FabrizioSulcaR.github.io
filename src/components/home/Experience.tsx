const experiences = [
  {
    title: "Tech Lead",
    company: "SkillMapper",
    period: "2024 - Present",
    description: [
      "Leading the development of a backend service for podcast metadata extraction, audio transcription, and data management",
      "Leading the development of new data science modules for processing course reviews, including review score creation, topic modeling, and summarization",
      "Mentoring interns by providing technical guidance, reviewing their work, ensuring technical standards are met"
    ]
  },
  {
    title: "Data Engineer",
    company: "SkillMapper",
    period: "2022 - Present",
    description: [
      "Designed and automated ETL processes for courses, reviews, and newsletters, optimizing data workflows and integration",
      "Conducted data cleaning and processing to prepare datasets for analysis and modeling",
      "Managed data science pipelines, integrating machine learning and NLP techniques to derive insights"
    ]
  },
  {
    title: "Cofounder",
    company: "ETDLP",
    period: "2022 - 2022",
    description: [
      "Conducted iterative sessions with users to define the digital product and developed 'HORUS, ' a comprehensive state supplier search engine designed to promote transparency in government contracts"]
  },
  {
    title: "Cofounder",
    company: "OxígenoPerú",
    period: "2021 - 2021",
    description: [
      "Founded a nonprofit volunteer initiative to register and democratize access to information on the sale, rental, and refilling of oxygen tanks and generators during the second wave of COVID-19 in Peru"]
  }
];

const skills = [
  "Strategic Analysis",
  "Data Engineering",
  "Financial Analysis",
  "Business Transformation",
  "Python",
  "SQL",
  "Airflow",
  "Docker",
  "PySpark",
  "Data Visualization",
  "Problem Solving"
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag mb-3">Experience</span>
          <h2 className="section-heading">Professional Background</h2>
          <p className="section-subheading max-w-3xl mx-auto">
            Building a career that bridges economic expertise, data engineering, and business strategy
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-display font-semibold mb-8">Work Experience</h3>
            
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors duration-300">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary rounded-full mb-2">
                      {exp.period}
                    </span>
                    <h4 className="text-xl font-semibold">{exp.title}</h4>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-display font-semibold mb-8">Skills & Expertise</h3>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-white dark:bg-black shadow-sm rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="mt-16 p-6 glass-card rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Education</h4>
              <div className="space-y-6">
                <div>
                  <p className="font-medium">BSc in Economics</p>
                  <p className="text-sm text-muted-foreground">Universidad del Pacífico • 2021-2026</p>
                </div>
                <div>
                  <p className="font-medium">Bsc in Economics & Finance</p>
                  <p className="text-sm text-muted-foreground">University of London • 2023-2026</p>
                </div>
                <div>
                  <p className="font-medium">Exchange Semester</p>
                  <p className="text-sm text-muted-foreground">Maastricht University • 2024-2025</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 glass-card rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Leadership Experiences</h4>
              <div className="space-y-6">
              {/* 
                <div>
                  <p className="font-medium">Partnerships Coordinator</p>
                  <p className="text-sm text-muted-foreground">La Nave • 2025 - Present</p>
                </div>
              */}
                <div>
                  <p className="font-medium">Strategy Consultant</p>
                  <p className="text-sm text-muted-foreground">180DCUP • 2024</p>
                </div>
                <div>
                  <p className="font-medium">Projects Coordinator</p>
                  <p className="text-sm text-muted-foreground">La Nave • 2024</p>
                </div>
                <div>
                  <p className="font-medium">Career Coordinator</p>
                  <p className="text-sm text-muted-foreground">Entrepreneurship Club • 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
