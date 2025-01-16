import React from "react";
import HeroImg from "../assets/hero.png";
import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
const Hero = () => {
  const config = {
    subtitle: "'I'm a Full-Stack Developer'",
    social: {
      twitter: "https://x.com/dineshcivilian2?t=MBrQUy1vPdQ6p_BLyeDLlQ&s=08 ",
      linkedin:
        "https://www.linkedin.com/in/dinesh-s-649abb338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
    },
  };
  return (
    <section className=" flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
      <div className="md:w-1/2 flex flex-col">
        <h1 className=" text-white text-6xl font-hero-font">
          Hi, <br /> I'm Dinesh
          <p className="text-2xl">{config.subtitle}</p>
        </h1>
        <div className="flex py-10 ">
          <a href={config.social.twitter} className="pr-5 hover:text-white">
            <AiOutlineTwitter size={40} />
          </a>
          <a href="" className="pr-5 hover:text-white">
            <AiOutlineFacebook size={40} />
          </a>
          <a href={config.social.linkedin}  className=" hover:text-white">
            <AiOutlineLinkedin size={40} />
          </a>
        </div>
      </div>
      <img className="md:w-1/3 " src={HeroImg} alt="" />
    </section>
  );
};

export default Hero;
