import {Link} from 'react-router-dom'

import delivery from '../../assets/images/delivery.png'
import './index.css'

const Hero = () => (
  <div className="home-cont">
    <div>
      <div className="flex justify-between items-center">
        <div className="text-left w-5/12">
          <h1 className="text-5xl mb-7">
            Shopping on your schedule – delivered in 30 min!
          </h1>
          <button class="text-white">shop now</button>
        </div>
        <div className="w-7/12">
          <img src={delivery} className="" alt="delivery-img" />
        </div>
      </div>
    </div>
  </div>
)

export default Hero
