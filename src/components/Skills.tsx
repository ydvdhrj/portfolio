"use client";

import { useEffect, useState } from "react";

export default function Skills() {
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

    const element = document.getElementById("skills-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
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
          <path d="m18 16 4-4-4-4"></path>
          <path d="m6 8-4 4 4 4"></path>
          <path d="m14.5 4-5 16"></path>
        </svg>
      ),
      skills: ["C++", "Java", "Python", "TypeScript", "Kotlin"],
    },
    {
      title: "Web Development",
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
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
          <line x1="3" x2="21" y1="9" y2="9"></line>
          <line x1="9" x2="9" y1="21" y2="9"></line>
        </svg>
      ),
      skills: [
        "Frontend: HTML, CSS, JavaScript, React.js",
        "Backend: Node.js, Flask",
        "Database: PostgreSQL, Prisma, Neon, SQLAlchemy",
        "Dev Tools: Git, GitHub, Render, VS Code, Windows PowerShell",
      ],
    },
    {
      title: "Machine Learning",
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
          <path d="M12 2v8"></path>
          <path d="m4.93 10.93 1.41 1.41"></path>
          <path d="M2 18h2"></path>
          <path d="M20 18h2"></path>
          <path d="m19.07 10.93-1.41 1.41"></path>
          <path d="M22 22H2"></path>
          <path d="m16 16-4 4-4-4"></path>
          <path d="M16 6a4 4 0 0 0-8 0c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2z"></path>
        </svg>
      ),
      skills: [
        "Libraries: Scikit-learn, Pandas, NumPy, Matplotlib",
        "Algorithms: Linear Regression, Random Forest, XGBoost",
        "Special interest in: RNNs, Transformers, PCA, Text Summarization",
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 smooth-scroll">
      <div className="container mx-auto px-4 sm:px-6" id="skills-section">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-card p-6 rounded-lg shadow-md border border-border hover:border-primary/50 hover:shadow-xl transition-all hover:-translate-y-1 transform ${
                isVisible ? "animate-fade-in opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="inline-block w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-3">
                  {category.icon}
                </span>
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-start transition-all hover:translate-x-1"
                  >
                    <span className="inline-block mr-2 mt-1 text-primary">
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
                        className="lucide lucide-check"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
