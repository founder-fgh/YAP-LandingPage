import delivery from '../../assets/images/delivery.png'
import './index.css'
import React from 'react'
import Play from '../../assets/images/play.png';
import Apple from "../../assets/images/apple.png";
const Hero = () => (
  <div className="home-cont w-screen  ">
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-left w-8/12 md:w-5/12 self-start md:pt-15">
          <h1 className="text-2xl md:text-5xl font-semibold text-white mb-7">
            Shopping on your schedule – delivered in 30 min!
          </h1>
          <button className="text-white">shop now</button>
        </div>
        <div className="flex-grow md:w-1/2">
          <img src={delivery} className="" alt="delivery-img" />
        </div>
      </div>
    </div>
    <div>
    <div className="w-full max-w-7xl flex justify-center md:justify-end mt-4 space-x-2 md:space-x-4">
      <img src={Play} alt="Play Store" className="w-32 md:w-40" />
      <img src={Apple} alt="Apple Store" className="w-32 md:w-40" />
    </div>

    </div>
  </div>
)

export default Hero
