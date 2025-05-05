import React from "react";
import ResumeImg from "../assets/resume.jpg";

const Resume = () => {
  const config = {
    link: "/Dinesh_Resume.pdf", // Relative path to the file in the public folder
  };
  return (
    <section
      id="resume"
      className="flex flex-col md:flex-row bg-secondary px-5 py-10"
    >
      <div className="md:w-1/2 py-5 flex justify-center md:justify-end">
        <img className="w-[300px]" src={ResumeImg} alt="Resume preview" />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl w-[135px] text-white border-b-4 border-[#ce0cc5] mb-5 font-bold">
            Resume
          </h1>
          <p>
            You can view my resume here:{" "}
            <a className="btn" href={config.link} download="My_Resume.pdf">
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
