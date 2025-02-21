import {Link} from 'react-router-dom'

const Navbar = () => (
  <nav className="flex justify-between items-center">
    <h1 className="p-0 w-4/12">YAP</h1>
    <ul className="flex justify-between w-8/12">
      <li>
        <a href="#hero">Home</a>
      </li>
      <li>
        <a href="#">About us</a>
      </li>
      <li>
        <a href="#">Customer Support</a>
      </li>
      <li>
        <a href="#">Careers</a>
      </li>
      <li>
        <Link to="/contact-us">Contact Us</Link>
      </li>
    </ul>
  </nav>
)

export default Navbar
