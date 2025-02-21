import {useState} from 'react'
import {Link} from 'react-router-dom'

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
    <div>
      <div className="flex justify-between m-6 px-10">
        <h1 className="w-3/12">YAP</h1>
        <ul className="flex justify-between w-5/12">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/">Careers</Link>
          </li>
          <li>
            <Link to="/">Customer Support</Link>
          </li>
        </ul>
      </div>
      <div className="flex">
        <div className="w-3/12">
          <h1>Contact Us</h1>
          <p>Email: info@YAP.com</p>
          <p>Phone: 555-567-5689</p>
          <p>
            Address: 1234 Main street, Moonstone city, wxyz bcde -
            1234
          </p>
        </div>
        <form
          onSubmit={submitForm}
          className="flex items-center w-6/12"
        >
          <input
            value={mail}
            onChange={onChangeMail}
            placeholder="Email"
            type="email"
            className="border-1 border-white"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <hr />
      <p>
        @ 2025 YAP. All Rights Reserved <span>PrivacyPolicy</span>
      </p>
    </div>
  )
}
export default Footer
