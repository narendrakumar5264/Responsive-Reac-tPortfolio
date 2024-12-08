import React from "react";
import { Link } from "react-scroll";

const About = ({ darkMode }) => {
  return (
    <section
      name="About"
      className={`px-6 md:px-12 py-12 md:py-16 transition-colors duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800"
      }`}
    >
      {/* Section Title */}
      <h1
        className={`text-4xl md:text-5xl font-bold text-center mb-10 ${
          darkMode ? "text-yellow-300" : "text-gray-800"
        }`}
      >
        About Me
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Personal Info Section */}
        <div
          className={`shadow-lg rounded-xl p-8 border ${
            darkMode
              ? "bg-gray-800 border-gray-600"
              : "bg-gradient-to-r from-white to-gray-50 border-gray-300"
          } flex flex-col justify-between`}
        >
          <h2
            className={`text-2xl font-extrabold mb-6 ${
              darkMode ? "text-yellow-400" : "text-gray-800"
            }`}
          >
            👤 Personal Info
          </h2>
          <div>
            {[
              { label: "Name", value: "Narendra Kumar" },
              { label: "Age", value: "22" },
              { label: "Qualification", value: "B.Tech in Computer Science" },
              { label: "Languages", value: "Hindi / English" },
            ].map((item, index) => (
              <p
                key={index}
                className={`text-lg md:text-xl font-medium mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <span className="font-bold">{item.label}:</span> {item.value}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {/* Download CV Button */}
            <a
              href="resume.png"
              download
              className={`group relative inline-block px-6 py-3 font-medium rounded-full shadow-md transition-all duration-300 ${
                darkMode
                  ? "text-gray-900 bg-yellow-400 hover:bg-yellow-500"
                  : "text-white bg-blue-500 hover:bg-blue-700"
              }`}
            >
              <span className="relative flex items-center gap-2">
                📄 Download CV
              </span>
            </a>
            {/* Get In Touch Button */}
            <button
              className={`group relative inline-block px-6 py-3 font-medium border rounded-full shadow-md transition-all duration-300 ${
                darkMode
                  ? "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900"
                  : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
              }`}
            >
              <span className="relative flex items-center gap-2">
                <Link
                  to="Contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  💬 Get In Touch
                </Link>
              </span>
            </button>
          </div>
        </div>

        {/* Education Section */}
        <div
          className={`shadow-lg rounded-xl p-8 border ${
            darkMode
              ? "bg-gray-800 border-gray-600"
              : "bg-gradient-to-r from-white to-gray-50 border-gray-300"
          }`}
        >
          <h2
            className={`text-2xl font-extrabold mb-6 ${
              darkMode ? "text-yellow-400" : "text-orange-600"
            }`}
          >
            🎓 My Education
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "B.Tech in Computer Science",
                description:
                  "Focused on mastering algorithms, data structures, and web development to prepare for a career in tech.",
              },
              {
                title: "Higher Secondary Education",
                description:
                  "Developed a strong foundation in science and mathematics, excelling in problem-solving and critical thinking.",
              },
              {
                title: "Intermediate Education",
                description:
                  "Completed education at Tagore Sr. Sec School, Degana, Nagaur, Rajasthan, with a focus on core academics and extracurriculars.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-5 rounded-lg shadow-lg border transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-700 border-gray-500 hover:shadow-xl hover:border-yellow-400"
                    : "bg-white border-gray-200 hover:shadow-xl hover:border-orange-400"
                }`}
              >
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    darkMode ? "text-yellow-300" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
