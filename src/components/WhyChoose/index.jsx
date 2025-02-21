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
  <div className="h-[92vh] flex flex-col justify-start items-center">
    <div className="flex items-center my-5 py-5 w-10/12">
      <h1 className="text-white bg-green-700 rounded-xl p-3 text-3xl font-bold w-5/12 mr-7">
        Why Choose YAP
      </h1>
      <p className="text-left text-lg w-10/12">
        YAP delivers in just 30 minutes with trusted local vendors,
        ensuring freshness and community support. Unlike others, we
        blend speed, reliability, and local care for a better shopping
        experience
      </p>
    </div>
    <ul className="flex justify-evenly items-start bg-black text-white rounded-4xl p-5 py-7 my-5 md:mx-10 h-[45%]">
      {characteristics.map(charac => {
        const {name, description} = charac
        if (charac === characteristics[characteristics.length - 1]) {
          return (
            <li className="px-10 my-8 text-left w-4/12">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="my-5 w-11/12">{description}</p>
            </li>
          )
        }
        return (
          <li className="px-10 my-8 border-r-1 border-white text-left w-4/12">
            <h3 className="text-xl font-semibold ">{name}</h3>
            <p className="my-5 w-11/12">{description}</p>
          </li>
        )
      })}
    </ul>
  </div>
)

export default WhyChoose
