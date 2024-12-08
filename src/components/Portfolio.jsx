import React, { useState, useRef } from "react";
import PythonLogo from "../assets/python.png";
import JavaScriptLogo from "../assets/javascript.jpg";
import CLogo from "../assets/c.jpg";
import HTMLLogo from "../assets/html.png";
import CSSLogo from "../assets/css.png";

const Portfolio = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const scrollContainerRef = useRef(null);

  const skills = [
    { id: 1, name: "Python", logo: PythonLogo, category: "Programming Languages", description: "Python is a versatile language for web development, machine learning, and scripting.", level: 85 },
    { id: 2, name: "JavaScript", logo: JavaScriptLogo, category: "Programming Languages", description: "JavaScript is essential for creating interactive and dynamic web experiences.", level: 80 },
    { id: 3, name: "C", logo: CLogo, category: "Programming Languages", description: "C is a foundational programming language widely used in system software.", level: 75 },
    { id: 4, name: "HTML", logo: HTMLLogo, category: "Programming Languages", description: "HTML structures the content of web pages with semantic elements.", level: 90 },
    { id: 5, name: "CSS", logo: CSSLogo, category: "Programming Languages", description: "CSS styles the appearance of web pages, enhancing user interfaces.", level: 85 },
    { id: 6, name: "React", logo: PythonLogo, category: "Frameworks", description: "React is a JavaScript library for building reusable UI components.", level: 80 },
    { id: 7, name: "Django", logo: JavaScriptLogo, category: "Frameworks", description: "Django is a high-level Python framework for robust web development.", level: 75 },
    { id: 8, name: "Bootstrap", logo: CLogo, category: "Frameworks", description: "Bootstrap is a popular framework for responsive web design.", level: 70 },
  ];

  const categories = ["All", "Programming Languages", "Frameworks", "Data Stores", "Others"];

  const filteredSkills = activeCategory === "All" ? skills : skills.filter((skill) => skill.category === activeCategory);

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 300;
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      name="Skills"
      className={`py-12 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <h1
          className={`text-4xl font-bold text-center mb-8 ${
            darkMode ? "text-yellow-300" : "text-gray-800"
          }`}
        >
          Technical Proficiency
        </h1>

        {/* Categories */}
        <div className="flex justify-center gap-2 flex-wrap mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? darkMode
                    ? "bg-yellow-400 text-gray-900 shadow-lg"
                    : "bg-black text-white shadow-lg"
                  : darkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-yellow-400 hover:text-gray-900"
                  : "bg-gray-300 text-black hover:bg-black hover:text-white"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Arrow Buttons */}
        <div className="relative">
          <button
            className={`absolute left-2 top-[50%] transform -translate-y-1/2 text-3xl font-bold hidden md:block ${
              darkMode ? "text-yellow-300" : "text-black"
            }`}
            onClick={() => handleScroll("left")}
          >
            &lt;
          </button>

          {/* Cards */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto hide-scrollbar w-full"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {filteredSkills.map(({ id, name, logo, description, level }) => (
              <div
                key={id}
                className={`rounded-lg shadow-lg transition-transform transform hover:scale-105 relative min-w-[200px] md:min-w-[250px] max-w-[250px] flex-shrink-0 border ${
                  darkMode
                    ? "bg-gray-800 border-gray-600"
                    : "bg-white border-gray-300"
                }`}
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="p-4 flex flex-col items-center text-center">
                  {/* Logo */}
                  <div
                    className={`w-16 h-16 mb-4 flex items-center justify-center rounded-full ${
                      darkMode
                        ? "bg-gradient-to-br from-gray-600 to-gray-700"
                        : "bg-gradient-to-br from-gray-300 to-gray-100"
                    }`}
                  >
                    <img src={logo} alt={name} className="w-10 h-10" />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-lg font-semibold mb-2 ${
                      darkMode ? "text-yellow-300" : "text-gray-800"
                    }`}
                  >
                    {name}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {description}
                  </p>
                </div>

                {/* Skill Level */}
                <div className="p-3">
                  <div className="h-2 rounded-full overflow-hidden bg-gray-300">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${level}%`,
                        background: "linear-gradient(to right, #4caf50, #81c784)",
                      }}
                    ></div>
                  </div>
                  <small
                    className={`text-xs text-right mt-1 block ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {level}% Efficiency
                  </small>
                </div>
              </div>
            ))}
          </div>

          <button
            className={`absolute right-2 top-[50%] transform -translate-y-1/2 text-3xl font-bold hidden md:block ${
              darkMode ? "text-yellow-300" : "text-black"
            }`}
            onClick={() => handleScroll("right")}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
