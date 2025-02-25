const characteristics = [
  {
    name: 'Fast & Reliable',
    description: `Get your orders delivered in just 30 minutes in Atmakur.
        No more waiting - your essentials arrive at lightning spedd!`,
  },
  {
    name: 'Local Support',
    description: `Get your orders delivered in just 30 minutes in Atmakur.
        No more waiting - your essentials arrive at lightning spedd!`,
  },
  {
    name: 'Easy Payments',
    description: `Get your orders delivered in just 30 minutes in Atmakur.
        No more waiting - your essentials arrive at lightning spedd!`,
  },
]

const WhyChoose = () => (
  <div className=" w-screen flex flex-col justify-start items-center">
    <div className="flex flex-col md:flex-row items-start md:items-center my-5 py-5 w-10/12">
      <h1 className="text-white home-bg rounded-xl p-3 text-3xl font-bold md:w-5/12 mr-7 my-1">
        Why Choose YAP
      </h1>
      <p className="text-left text-lg md:w-10/12 my-1">
        YAP delivers in just 30 minutes with trusted local vendors,
        ensuring freshness and community support. Unlike others, we
        blend speed, reliability, and local care for a better shopping
        experience
      </p>
    </div>
    <ul className="flex flex-col md:flex-row justify-evenly items-start bg-black text-white rounded-4xl p-2 md:p-5 py-7 my-5 mx-3 md:mx-10 md:h-[45%]">
      {characteristics.map(charac => {
        const {name, description} = charac
        if (charac === characteristics[characteristics.length - 1]) {
          return (
            <li className="px-3 md:px-10 my-7 text-left md:w-4/12">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="my-5 md:w-11/12">{description}</p>
            </li>
          )
        }
        return (
          <li className="px-3 md:px-10 my-7 md:border-r-1 md:border-white text-left md:w-4/12">
            <h3 className="text-xl font-semibold ">{name}</h3>
            <p className="my-5 md:w-11/12">{description}</p>
            <hr className="md:hidden my-2" />
          </li>
        )
      })}
    </ul>
  </div>
)

export default WhyChoose
