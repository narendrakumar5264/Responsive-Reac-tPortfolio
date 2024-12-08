import React from "react";
import news from "../assets/news.png";
import Simon from "../assets/simon.png";
import tic from "../assets/tic.png";
import port from "../assets/port.png";

const Project = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "Responsive Portfolio",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      description:
        "A personal portfolio website showcasing projects, skills, and experiences. Designed with modern UI principles and responsive design.",
      logo: port,
      sourceLink: "https://github.com/username/portfolio",
      visitLink: "/videos/portfolio-demo.mp4", // Local or hosted video link
    },
    {
      id: 2,
      title: "Responsive News Portal",
      technologies: ["JavaScript", "HTML", "CSS"],
      description:
        "A dynamic news portal delivering real-time updates with categories like technology, sports, and entertainment.",
      logo: news,
      sourceLink: "https://github.com/narendrakumar5264/news2",
      visitLink: "../assets/newspreview.mp4", // Local or hosted video link
    },
    {
      id: 3,
      title: "Simon Says Game",
      technologies: ["JavaScript", "HTML", "CSS"],
      description:
        "A classic memory game where users mimic a sequence of lights and sounds. Built with clean animations and scoring.",
      logo: Simon,
      sourceLink: "https://github.com/narendrakumar5264/simon-says-game",
      visitLink: "/videos/simon-demo.mp4", // Local or hosted video link
    },
    {
      id: 4,
      title: "Tic Tac Toe Game",
      technologies: ["Python", "Tkinter"],
      description:
        "An interactive Tic Tac Toe game with a simple GUI, built in Python using the Tkinter library. Supports two players.",
      logo: tic,
      sourceLink: "https://github.com/username/tic-tac-toe",
      visitLink: "/videos/tictactoe-demo.mp4", // Local or hosted video link
    },
  ];

  return (
    <div
      name="Project"
      className={`font-sans min-h-screen py-8 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Header */}
      <header className="py-6 text-center">
        <h1 className="text-4xl font-bold drop-shadow-lg">Projects Section</h1>
        <p className="text-sm font-light mt-2">
          Explore my featured projects and contributions.
        </p>
      </header>

      {/* Projects Section */}
      <section className="py-8">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`relative p-5 rounded-lg shadow-lg ${
                  darkMode
                    ? "bg-gray-800 bg-opacity-50 border-gray-700"
                    : "bg-white bg-opacity-50 border border-gray-200"
                } hover:shadow-2xl transition-all duration-300`}
              >
                {/* Project Logo with Hover Effect */}
                <div className="relative h-36 mb-4 overflow-hidden rounded-lg shadow-sm flex justify-center items-center group">
                  <img
                    src={project.logo}
                    alt={project.title}
                    className="bg-white w-24 h-24 object-contain transform group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-500"
                  />
                </div>

                {/* Project Title */}
                <h2 className="text-lg font-bold text-center mb-4">
                  {project.title}
                </h2>

                {/* Project Content */}
                <p className="text-sm mb-3 text-center">
                  {project.description}
                </p>

                {/* Technologies Used */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`text-xs font-medium px-3 py-1 rounded-full ${
                        darkMode
                          ? "text-gray-200 bg-gray-700"
                          : "text-gray-800 bg-gray-100"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={project.visitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`py-2 px-4 rounded-lg text-sm font-medium shadow-md transform hover:scale-105 transition-all duration-300 ${
                      darkMode
                        ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                        : "bg-indigo-500 hover:bg-indigo-600 text-white"
                    }`}
                  >
                    Preview
                  </a>
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`py-2 px-4 rounded-lg text-sm font-medium shadow-md transform hover:scale-105 transition-all duration-300 ${
                      darkMode
                        ? "bg-gray-600 hover:bg-gray-700 text-white"
                        : "bg-gray-700 hover:bg-gray-800 text-white"
                    }`}
                  >
                    Source Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
