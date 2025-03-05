import delivery from "../../assets/images/delivery.png";
import "./index.css";
import React from "react";
import Play from "../../assets/images/play.png";
import Apple from "../../assets/images/apple.png";
const Hero = () => (
  <div className="home-cont w-screen  ">
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-left w-8/12 md:w-5/12 self-start md:pt-15">
          <h1 className="text-2xl md:text-5xl font-semibold text-white mb-7">
            Shopping on your schedule – delivered in 30 min!
          </h1>
          <a
            href="https://yap.busyness.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Shop Now
            </button>
          </a>
        </div>
        <div className="flex-grow md:w-1/2">
          <img src={delivery} className="" alt="delivery-img" />
        </div>
      </div>
    </div>
    <div>
      <div className="w-full max-w-7xl flex justify-center md:justify-end mt-4 space-x-2 md:space-x-4">
        <a
          href="https://play.google.com/store/apps/details?id=babh.busyness.app&pcampaignid=web_share"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Play} alt="Play Store" className="w-32 md:w-40" />
        </a>
        <a
          href="https://apps.apple.com/in/app/yap/id6740156331"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Apple} alt="Apple Store" className="w-32 md:w-40" />
        </a>
      </div>
    </div>
  </div>
);

export default Hero;
