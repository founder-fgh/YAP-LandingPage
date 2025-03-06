
import React from "react";
import prasad from "../../assets/images/prasad.jpg";

const characteristics = [
  {
    name: "Fast & Reliable",
    description: `Get your orders delivered in just 30 minutes in Atmakur.
        No more waiting - your essentials arrive at lightning speed!`,
  },
  {
    name: "Local Support",
    description: `We partner with trusted local vendors to ensure fresh and high-quality products, supporting the community while offering convenience.`,
  },
  {
    name: "Easy Payments",
    description: `Seamless and secure payment options for a hassle-free shopping experience.`,
  },
];

const WhyChoose = () => (
  <div className="w-screen flex flex-col items-center px-5 md:px-10 py-10">
    {/* Why Choose YAP */}
    {/* <div className="flex flex-col md:flex-row items-start md:items-center w-full max-w-7xl">
  <h1 className="text-white home-bg rounded-xl p-3 text-3xl font-bold md:w-5/12 my-1 md:mr-6">
    Why Choose YAP
  </h1>
  
  <p className="text-left text-lg md:w-7/12 my-1 md:mt-0 mt-4">
    YAP delivers in just 30 minutes with trusted local vendors, ensuring
    freshness and community support. Unlike others, we blend speed,
    reliability, and local care for a better shopping experience.
  </p>
</div> */}


    {/* About Founder Section */}
    <div className="flex flex-col md:flex-row-reverse items-center w-full max-w-7xl my-10">
      {/* Right: Text Section */}
      <div className="w-full md:w-7/12">
        <h1 className="text-white home-bg rounded-xl p-3 text-3xl font-bold my-1">
          About Founder
        </h1>
        <br />
        <p className="text-left text-lg my-3 leading-relaxed">
          Welcome to YAP, a vision born out of the need for fast, reliable, and
          convenient delivery services in Atmakur. As the founder, my mission is
          to revolutionize the way people shop for daily essentials, ensuring
          speed, quality, and customer satisfaction in every delivery.
          <br />
          <br />
          With a background in sustainability, business strategy, and
          technology, I have always believed in leveraging innovation to make
          life easier. YAP is not just a delivery service—it’s a commitment to
          efficiency, reliability, and trust.
          <br />
          <br />
          Join us on this journey as we redefine convenience and bring the best
          of everyday shopping to your doorstep.
          <br />
          <span className="font-semibold">Prasad M, Founder, YAP</span>
        </p>
      </div>

      {/* Left: Image Section - Comes below text on small screens */}
      <div className="w-full md:w-5/12 flex justify-center mt-5 md:mt-0">
        <img
          src={prasad}
          alt="Prasad M"
          className="rounded-xl shadow-lg w-72 h-72 object-cover"
        />
      </div>
    </div>

    {/* Characteristics Section */}
    <ul className="dark-bg flex flex-col md:flex-row justify-evenly items-start bg-black text-white rounded-4xl p-5 py-7 my-5 w-full max-w-7xl">
      {characteristics.map((charac, index) => (
        <li
          key={index}
          className={`px-3 md:px-10 my-7 text-left md:w-4/12 ${
            index !== characteristics.length - 1
              ? "md:border-r-1 md:border-white"
              : ""
          }`}
        >
          <h3 className="text-xl font-semibold">{charac.name}</h3>
          <p className="my-5 md:w-11/12">{charac.description}</p>
          {index !== characteristics.length - 1 && <hr className="md:hidden my-2" />}
        </li>
      ))}
    </ul>
  </div>
);

export default WhyChoose;
