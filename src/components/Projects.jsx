import React from "react";

import landingPage from "../assets/landingPage.png";
import grid from "../assets/grid.png";
import socialLink from "../assets/socialLink.png";
import fourCard from "../assets/fourCard.png";
import productCard from "../assets/productCard.png";
import MernBookStore from "../assets/MernBookStore.png";
import recipePage from "../assets/recipePage.png";
import BlogCard from "../assets/BlogCard.png";

const Projects = () => {
  const config = {
    projects: [
      {
        img: landingPage,
        description:
          "A fully responsive landing page for an event/conference with modern layout, clean design, and accessibility. Built using HTML, CSS, Flexbox/Grid, and deployed on Vercel.",
        link: "https://responsive-conference-landing-page-epol.vercel.app/",
      },
      {
        img: grid,
        description:
          "A responsive testimonials section styled to pixel perfection based on a frontend challenge. Focused on image handling, grid layout, and consistent spacing.",
        link: "https://testimonials-grid-section-main-tau-navy.vercel.app/",
      },
      {
        img: socialLink,
        description:
          "A minimal user profile with multiple social media link buttons, Mobile-first responsive, with clean styling and semantic HTML.",
        link: "https://social-links-profile-ten-tau.vercel.app/",
      },
      {
        img: fourCard,
        description:
          "A beautifully designed four-card layout showcasing key features or services.Used advanced media queries and layout techniques for responsiveness..",
        link: "https://four-card-feature-section-five-cyan.vercel.app/",
      },
      {
        img: productCard,
        description:
          "A modern product card layout with hover effects, clean UI, and optimized asset loading.Built from scratch using vanilla HTML and CSS.",
        link: "https://product-preview-mocha.vercel.app/",
      },
      {
        img: MernBookStore,
        description:
          "A full-stack application (frontend deployed) simulating a book store UI. Emphasis on component reusability, routing, and clean state structure.",
        link: "https://mern-book-store-three.vercel.app/",
      },
      {
        img: recipePage,
        description:
          "A static recipe display page focusing on clean structure, readable content, and engaging UI.",
        link: "https://recipe-page-lac-eta.vercel.app/",
      },
      {
        img: BlogCard,
        description:
          "An elegant card UI layout for blogs/articles.Implemented using semantic HTML5, CSS3, and responsive techniques.",
        link: "https://blog-preview-card-plum-three.vercel.app/",
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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-10 gap-5">
          {config.projects.map((project, index) => (
            <div className="relative rounded-xl" key={index}>
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
