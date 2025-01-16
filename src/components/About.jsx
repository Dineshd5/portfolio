import React from "react";
import AboutImg from "../assets/about.png";
const About = () => {
  const config = {
    line1:
      " Hi, I’m Dinesh, a passionate and dedicated developer specializing in the MERN stack. With a strong foundation in HTML, CSS, and JavaScript, I am continuously exploring the world of React to build dynamic and user-friendly web applications.",
    line2:
      "My journey into coding is driven by a desire to create meaningful digital solutions and enhance user experiences. Alongside my technical expertise, I bring a detail-oriented approach and a commitment to delivering high-quality projects. Let’s connect and collaborate on bringing innovative ideas to life!",
  };
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row bg-secondary px-5 py-10"
    >
      <div className="md:w-1/2 py-5">
        <img src={AboutImg} />
      </div>
      <div className="md:w-1/2 flex justify-center ">
        <div className="flex flex-col justify-center text-white">
          {" "}
          <h1 className="text-4xl w-[170px] text-white border-b-4 border-[#ce0cc5] mb-5 font-bold ">
            About me
          </h1>
          <p>
            {config.line1}
            <br />
          </p>
          <br />
          <p>{config.line2}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
