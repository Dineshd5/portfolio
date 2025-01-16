import React from "react";
import WebsiteImg1 from "../assets/ecommerce-websites.jpg";
import WebsiteImg2 from "../assets/food-ecommerce.jpg";
import WebsiteImg3 from "../assets/website-blog.jpg";

const Projects = () => {
  const config = {
    projects: [
      {
        img: WebsiteImg1,
        description:
          "These are some of my best projects built with React, JavaScript, HTML, and CSS.",
        link: "https://github.com/Dineshd5",
      },
      {
        img: WebsiteImg2,
        description: "An E-commerce website built with the MERN stack.",
        link: "https://github.com/Dineshd5",
      },
      {
        img: WebsiteImg3,
        description: "A food e-commerce website like Swiggy, built with React.",
        link: "https://github.com/Dineshd5",
      },
    ],
  };

  return (
    <section
      id="projects"
      className="flex flex-col py-20 px-5 justify-center bg-primary text-white"
    >
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl w-[140px] text-white border-b-4 border-[#ce0cc5] mb-5 font-bold">
            Projects
          </h1>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          {config.projects.map((project, index) => (
            <div className="relative" key={index}>
              <img
                className="h-[300px] w-[500px]"
                src={project.img}
                alt={`Preview of project: ${project.description}`}
              />
              <div className="project-desc">
                <p className="text-center px-5 py-5">{project.description}</p>
                <div className="flex justify-center">
                  <a
                    className="btn"
                    target="_blank"
                    href={project.link}
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
