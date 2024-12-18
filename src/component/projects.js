"use client";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "Weather App",
    image: "/weatherapp.png",
    description:
      "A dynamic weather application built with React, utilizing the OpenWeatherMap API to display real-time weather paramters such as temperature, humidity, and wind speed, including hourly and 5 days forecast with a visually appealing interface.",
    techStack: ["React", "OpenWeatherMap API"],
    githubLink: "https://github.com/srijanjs/weather-app",
  },
  {
    id: 2,
    name: "Hamro Share",
    image: "/hamroShare.png",
    description:
      "A website that shows all the stocks info for you and you can even buy and sell stocks.",
    techStack: ["Next.js", "Python"],
    githubLink: "https://github.com/srijanjs/hamroShare",
  },
  {
    id: 3,
    name: "Chat-App-using-Appwrite",
    image: "/appwrite.png",
    description:
      "This project is a real-time group chat application built using Next.js and Appwrite. Users can register, log in, and participate in group chats in real-time.It also has th feature to delete the sent messages.",
    techStack: ["Next.js", "Appwrite"],
    githubLink: "https://github.com/srijanjs/Chat-App-using-Appwrite",
  },

  {
    id: 4,
    name: "Renovation Company Website",
    image: "/renovation.png",
    description: "A mock up design site for rennovation company.",
    techStack: ["Next.js"],
    githubLink: "https://github.com/srijankarki07/renovation-site-mock-design",
  },
];
export default function Projects() {
  const router = useRouter();
  return (
    <div className="projects" id="projects">
      <div className="project-title">
        <h1>Projects</h1>
        <p>
          Good design is obvious. Great design is transparent. Design is not for
          philosophy, it's for life.
        </p>
      </div>
      <div className="project-container">
        {projects.map((project) => (
          <div key={project.id} className="project-content">
            <img
              className="project-image"
              src={project.image}
              alt={project.name}
            />

            <div className="project-desc">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>{project.name}</h3>
                <FaGithub
                  className="github-icon"
                  onClick={() => router.push(project.githubLink)}
                />
              </div>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.techStack?.map((tech, index) => (
                  <p key={index}>{tech}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
