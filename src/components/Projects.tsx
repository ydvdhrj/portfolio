"use client";

import { useEffect, useState } from "react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const projects = [
    {
      title: "House Price Prediction (California)",
      description:
        "Built a machine learning model to predict median house prices in California using a dataset of over 20,000 districts. Implemented and compared Linear Regression, Random Forest, and XGBoost to identify the best-performing algorithm.",
      tags: ["Python", "Scikit-learn", "Machine Learning", "Data Analysis"],
      image: "/images/project-house.jpg",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
    },
    {
      title: "Splitwise Expense Tracking App",
      description:
        "A full-stack web app for splitting and managing expenses among friends or groups. Features include group creation and management, real-time expense tracking, and authentication with Flask-Login.",
      tags: ["Flask", "PostgreSQL", "Neon", "Bootstrap", "SQLAlchemy"],
      image: "/images/project-splitwise.jpg",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M12 2v20"></path>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
    },
    {
      title: "Slide - Instagram DM Automation SaaS",
      description:
        "A SaaS project that helps influencers auto-respond to Instagram DMs using custom keywords. It includes an AI bot to handle conversations based on chat history.",
      tags: ["TypeScript", "Prisma", "Neon", "SaaS"],
      image: "/images/project-slide.jpg",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" x2="8" y1="13" y2="13"></line>
          <line x1="16" x2="8" y1="17" y2="17"></line>
          <line x1="10" x2="8" y1="9" y2="9"></line>
        </svg>
      ),
    },
    {
      title: "RemindMeApp (Android)",
      description:
        "A Kotlin-based mobile app for setting reminders with customizable alarms and notifications. Built for quick daily task reminders and improved time management.",
      tags: ["Kotlin", "Android", "Mobile Development"],
      image: "/images/project-remindme.jpg",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
    },
  ];

  return (
    <section id="projects" className="py-16 bg-muted/30 smooth-scroll">
      <div className="container mx-auto px-4 sm:px-6" id="projects-section">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Here are some of the projects I've worked on. Each one represents a
          different challenge and learning experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl transition-all group ${
                isVisible ? "animate-fade-in opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-48 bg-muted relative overflow-hidden">
                {/* Replace with actual project images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">
                    Project Image Placeholder
                  </span>
                </div>
                {/* Uncomment when you have actual images */}
                {/* <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                /> */}
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors flex-1">
                    {project.title}
                  </h3>
                </div>
                <p className="mb-4 text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-sm rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-border flex justify-end">
                  <button className="text-primary hover:text-primary-hover flex items-center gap-1 font-medium transform transition-transform hover:-translate-y-1">
                    View Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
