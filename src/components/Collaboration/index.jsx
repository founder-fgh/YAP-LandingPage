import collaboration from '../../assets/images/collaboration.png'
import './index.css'

const Collaboration = () => (
  <div className="flex flex-col items-center w-screen">
    <marquee
      className="dark-bg text-white py-3 my-5 w-screen"
      behaviour="scroll"
      direction="left"
    >
      <span className="text-2xl font-semibold">
        Currently our services are available only at Atmakur, Nellore
        Dist
      </span>
    </marquee>
    <div className="main-section flex flex-col md:flex-row justify-between items-center rounded-3xl p-5 md:p-0 m-10 md:w-10/12">
      <div className="md:w-4/12 md:text-left md:m-5 md:p-3 ">
        <h1 className="text-3xl font-semibold my-1">
          Let's make things happen together
        </h1>
        <p className="text-xl">
          Contact us today to see how YAP can boost your business with
          lightning fast deliveries and ocal reach!"
        </p>
        <button className="dark-bg text-white my-2">
          Collaborate with us
        </button>
      </div>
      <div className="md:w-4/12 md:absolute right-0">
        <img className="" src={collaboration} alt="collaboration" />
      </div>
    </div>
  </div>
)

export default Collaboration
