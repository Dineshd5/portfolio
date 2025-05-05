import React from "react";
import ResumeImg from "../assets/resume.jpg";

const Resume = () => {
  const config = {
    link: "../src/assets/dineshResume.pdf", // Relative path to the file in the public folder
  };
  return (
    <section
      id="resume"
      className="flex flex-col md:flex-row bg-white px-5 py-10"
    >
      <div className="md:w-1/2 py-5 flex justify-center md:justify-end">
        <img className="w-[300px]" src={ResumeImg} alt="Resume preview" />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-black">
          <h1 className="text-4xl w-[135px] text-black border-b-4 border-[#ce0cc5] mb-5 font-bold">
            Resume
          </h1>
          <p>
            You can view my resume here:{" "}
            <a
              className="btn text-white"
              href={config.link}
              download="MyResume.pdf"
            >
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
