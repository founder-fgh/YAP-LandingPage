import collaboration from '../../assets/images/collaboration.png'

const Collaboration = () => {
    console.log(this)
    return (
  <div className="flex flex-col">
    <marquee
      className="bg-black text-white py-3 my-5 w-screen"
      behaviour="scroll"
      direction="left"
    >
      <span className="text-2xl font-semibold">
        Currently our services are available only at Atmakur, Nellore
        Dist
      </span>
    </marquee>
    <div className="flex flex-col md:flex-row items-center p-5 m-10">
      <div className="w-4/12 text-left">
        <h1 className="text-3xl font-semibold">Let's make things happen together</h1>
        <p className="text-xl">
          Contact us today to see how YAP can boost your business with
          lightning fast deliveries and ocal reach!"
        </p>
        <button>Collaborate with us</button>
      </div>
      <div className="w-3/12 mx-auto">
        <img className="" src={collaboration} alt='collaboration'/>
      </div>
    </div>
  </div>
)}

export default Collaboration
