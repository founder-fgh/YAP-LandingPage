import {useState} from 'react'
import {Link} from 'react-router-dom'
import React from 'react'
const Footer = () => {
  const [mail, setMail] = useState('')

  const onChangeMail = event => {
    setMail(event.target.value)
  }

  const submitForm = event => {
    event.preventDefault()
    setMail('')
  }

  return (
    <div className="flex w-screen">
      <div className="bg-black text-white rounded-4xl p-9 mt-16 w-full max-w-11/12 mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-wrap justify-between px-6 m-6 md:pb-10 transform -translate-x-10">
          <h1 className="text-white font-extrabold text-5xl tracking-wide">
            YAP
          </h1>
          <div className="ml-auto flex justify-between items-center">
            <ul className="hidden md:flex flex-col md:flex-row space-x-6 text-white text-sm mt-1">
              <li>
                <a className="tab" href="#hero">
                  <span className="underline cursor-pointer">
                    Home
                  </span>
                </a>
              </li>
              <li>
                <a className="tab" href="#why-choose">
                  <span className="underline cursor-pointer">
                    About Us
                  </span>
                </a>
              </li>
              <li>
                <a className="tab" href="#">
                  <span className="underline cursor-pointer">
                    Careers
                  </span>
                </a>
              </li>
              <li>
                <Link className="tab" to="/contact-us">
                  <span className="underline cursor-pointer">
                    Customer Support
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="flex flex-wrap justify-between">
            <div className="w-1/2 md:w-full text-left">
              <h2 className="text-lg font-semibold mb-2 md:mb-6">
                <span className="home-bg text-white px-[7px] pt-[2px] rounded-md">
                  Contact us:
                </span>
              </h2>
              <p className="md:mb-4">Email: yap.delivery@outlook.com</p>
              <p className="md:mb-4">Phone: 91772 40286</p>
              <p>
                Address: Shop No 8, opp Abhiram Hospital
                <br />
               Atmakur Mandal, SPSR Nellore District
              </p>
            </div>
            <div className="ml-auto flex justify-between items-center">
              <ul className="flex flex-col md:flex-row md:hidden space-x-6 text-white text-sm mt-1 text-left">
                <li>
                  <a className="tab" href="#hero">
                    <span className="underline cursor-pointer">
                      Home
                    </span>
                  </a>
                </li>
                <li>
                  <a className="tab" href="#why-choose">
                    <span className="underline cursor-pointer">
                      About Us
                    </span>
                  </a>
                </li>
                <li>
                  <a className="tab" href="#">
                    <span className="underline cursor-pointer">
                      Careers
                    </span>
                  </a>
                </li>
                <li>
                  <Link className="tab" to="/contact-us">
                    <span className="underline cursor-pointer">
                      Customer Support
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <form
              onSubmit={submitForm}
              className="bg-[#292A32] px-10 py-2 rounded-3xl flex items-center space-x-4 w-full md:max-w-[600px] flex-1 ml-auto h-20 md:h-55"
            >
              <input
                value={mail}
                onChange={onChangeMail}
                placeholder="Email"
                type="email"
                className="p-2 w-1/2 bg-gray-700 border border-white text-white rounded-3xl h-8 md:h-20"
                style={{borderColor: 'white'}}
              />
              <button
                type="submit"
                className="home-bg px-6 py-3 w-auto text-white font-semibold flex items-center justify-center hover:bg-green-700 rounded-full transition whitespace-nowrap h-8 md:h-20"
              >
                Subscribe for updates
              </button>
            </form>
          </div> */}

          <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-end">
              <form onSubmit={submitForm} className="bg-gray-800 p-4 rounded-xl flex items-center w-full max-w-md">
                <input 
                  type="email" 
                  value={mail} 
                  onChange={onChangeMail} 
                  placeholder="Email" 
                  className="flex-1 p-2 bg-gray-700 border border-white text-white rounded-l-lg" 
                />
                <button 
                  type="submit" 
                  className="bg-green-600 px-4 py-2 text-white rounded-r-lg hover:bg-green-700">
                  Subscribe
                </button>
              </form>
            </div>
        </div>
        <hr className="mt-10 border-gray-600 mb-10" />
        <p className="text-sm text-gray-400 text-left py-3">
          © 2025 YAP. All Rights Reserved.
          <span className="underline cursor-pointer text-white ml-6">
            Privacy Policy
          </span>
        </p>
      </div>
    </div>
  )
}
export default Footer
