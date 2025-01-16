import React from "react";

const Contact = () => {
  const config = {
    email: "dineshcivilians6@gmail.com",
    phone: "8838422032",
  };
  return (
    <section
      id="contact"
      className="flex flex-col  text-white bg-primary px-5 py-32 "
    >
      <div className="flex flex-col items-center ">
        {" "}
        <h1 className="text-4xl w-[135px] text-white border-b-4 border-[#ce0cc5] mb-5 font-bold ">
          Contact
        </h1>
        <p className="pb-5  ">
          If you want to discuss more in detail you can contact me
        </p>
        <p className=" py-2">
          <span className="font-bold">Email: </span>
          {config.email}
        </p>{" "}
        <p className=" py-2">
          <span className="font-bold">Phone: </span>
          {config.phone}
        </p>
      </div>
    </section>
  );
};

export default Contact;
