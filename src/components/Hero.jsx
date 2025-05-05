import React, { useEffect, useState } from "react";
import HeroImg from "../assets/hero.png";
import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const config = {
    titles: ["Hi,", "I'm Dinesh"],
    subtitle: ["I'm a Full-Stack Developer"],
    social: {
      twitter: "https://x.com/dineshcivilian2?t=MBrQUy1vPdQ6p_BLyeDLlQ&s=08",
      linkedin:
        "https://www.linkedin.com/in/dinesh-s-649abb338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  };

  const [showSubtitle, setShowSubtitle] = useState(false);

  // Wait for top typewriter to finish before showing subtitle
  useEffect(() => {
    const delay = config.titles.length * 800 + 1500; // Estimate delay
    const timer = setTimeout(() => {
      setShowSubtitle(true);
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
      <div className="md:w-1/2 flex flex-col">
        <h1 className="text-white text-6xl font-hero-font leading-tight">
          <Typewriter
            words={config.titles}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={0}
            delaySpeed={1000}
          />
          {showSubtitle && (
            <p className="text-2xl text-slate-200 pt-3">
              <Typewriter
                words={config.subtitle}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </p>
          )}
        </h1>

        <div className="flex py-10">
          <a href={config.social.twitter} className="pr-5 hover:text-white">
            <AiOutlineTwitter size={40} />
          </a>
          <a href="#" className="pr-5 hover:text-white">
            <AiOutlineFacebook size={40} />
          </a>
          <a href={config.social.linkedin} className="hover:text-white">
            <AiOutlineLinkedin size={40} />
          </a>
        </div>
      </div>
      <img className="md:w-1/3" src={HeroImg} alt="Dinesh Hero" />
    </section>
  );
};

export default Hero;
