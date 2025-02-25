import delivery from '../../assets/images/delivery.png'
import './index.css'

const Hero = () => (
  <div className="home-cont w-screen">
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-left w-8/12 md:w-5/12 self-start md:pt-15">
          <h1 className="text-2xl md:text-5xl font-semibold text-white mb-7">
            Shopping on your schedule – delivered in 30 min!
          </h1>
          <button class="text-white">shop now</button>
        </div>
        <div className="flex-grow md:w-1/2">
          <img src={delivery} className="" alt="delivery-img" />
        </div>
      </div>
    </div>
  </div>
)

export default Hero
