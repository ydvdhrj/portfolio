"use client";

export default function Education() {
  const education = [
    {
      institution: "Lovely Professional University",
      degree: "B.Tech in Computer Science Engineering",
      duration: "2021 - 2026 (Expected)",
      description:
        "Pursuing a bachelor's degree in Computer Science Engineering with a focus on software development, data structures and algorithms, and machine learning.",
    },
    {
      institution: "Jawahar Navodaya Vidyalaya, Ujjain",
      degree: "Higher Secondary Education",
      duration: "Completed",
      description:
        "Completed higher secondary education with focus on science and mathematics.",
    },
  ];

  const achievements = [
    "Two-time State Badminton Player 🏸",
    "Consistently solving problems on LeetCode and participating in coding contests",
    "Developed multiple full-stack and ML-based projects",
    "Selected for internships (e.g., JIO, Salesforce - Applied)",
  ];

  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Education & <span className="text-primary">Achievements</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="inline-block mr-2 text-primary">
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
                  className="lucide lucide-graduation-cap"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                </svg>
              </span>
              Education
            </h3>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-border">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-card z-10 shadow-md md:group-odd:ml-8 md:group-even:mr-8">
                    <span className="text-primary">{index + 1}</span>
                  </div>

                  <div className="w-full md:w-[calc(50%-4rem)] p-4 rounded-lg bg-card border border-border shadow-sm">
                    <h4 className="text-lg font-semibold text-primary">
                      {item.institution}
                    </h4>
                    <p className="text-md font-medium">{item.degree}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.duration}
                    </p>
                    <p className="mt-2 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="inline-block mr-2 text-primary">
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
                  className="lucide lucide-trophy"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
              </span>
              Achievements
            </h3>

            <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="inline-block mr-2 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-heart-handshake"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.82 2.95 0l2.9-2.9"></path>
                      <path d="m18 15-2-2"></path>
                      <path d="m15 18-2-2"></path>
                    </svg>
                  </span>
                  Hobbies & Interests
                </h4>
                <ul className="grid grid-cols-2 gap-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Playing Badminton
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Solving Puzzles
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Competitive Programming
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Exploring AI/ML
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Working on Side Projects
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
