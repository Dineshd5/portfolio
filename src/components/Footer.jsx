import React from "react";

const Footer = () => {
  return (
    <div className=" py-4 bg-secondary text-center text-white">
      &copy; {new Date().getFullYear()} Dinesh. All Rights Reserved.
    </div>
  );
};

export default Footer;
