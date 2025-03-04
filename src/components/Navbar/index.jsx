import {Link} from 'react-router-dom'
import {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

import yapLogo from '../../assets/images/yapLogo.png'

import './index.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <nav className="home-bg w-screen flex justify-between items-start md:items-center md:pt-10 md:px-15">
        <div className="w-4/12 md:w-2/12">
          <img className="" src={yapLogo} alt="logo" />
        </div>
        <div className="max-w-7xl ml-auto flex justify-between items-center">
          {/* Navigation Links (Desktop) */}
          <ul className="hidden md:flex space-x-6 text-white">
            <li>
              <a className="tab text-xl" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="tab text-xl" href="#why-choose">
                About us
              </a>
            </li>
            <li>
              <a className="tab text-xl" href="#">
                Careers
              </a>
            </li>
            <li>
              <Link className="tab text-xl" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* Hamburger Button for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="home-bg text-white md:hidden hover:outline-none focus:outline-none justify-self-end	"
        >
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="home-bg md:hidden w-screen flex flex-col items-start space-y-3 p-4 text-white">
          <li>
            <a href="#hero" className="tab gap-2">
              {' '}
              Home
            </a>
          </li>
          <li>
            <a href="#why-choose" className="tab gap-2">
              {' '}
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="tab gap-2">
              {' '}
              Carrers
            </a>
          </li>
          <li>
            <Link className="tab" to="/contact-us">
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}
export default Navbar
