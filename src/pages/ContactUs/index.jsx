import {useState} from 'react'

import contactImg from '../../assets/images/contactImg.png'

const ContactUs = () => {
  const [name, setName] = useState('')
  const [email, setemail] = useState('')
  const [message, setMessage] = useState('')

  const onChangeName = event => {
    setName(event.target.value)
  }

  const onChangeEmail = event => {
    setemail(event.target.value)
  }

  const onChangeMessage = event => {
    setMessage(event.target.value)
  }

  const submitForm = event => {
    event.preventDefualt()
    setName('')
    setemail('')
    setMessage('')
  }

  return (
    <div className="flex flex-col justify-center md:justify-start items-center w-screen h-screen p-3 md:mt-10 ">
      <div className="flex flex-col md:flex-row items-start my-7 md:w-11/12">
        <h1 className="home-bg text-3xl font-bold p-5 py-3 bg-green-700 rounded-xl text-white my-2 md:my-0">
          Contact Us
        </h1>
        <p className="text-md md:text-xl text-left md:ml-5">
          Feel free to ask if you have any{' '}
          <br className="hidden md:block" />
          queries...
        </p>
      </div>
      <div className="flex justify-between items-center md:w-11/12 bg-gray-100 rounded-2xl py-3 my-3">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          onSubmit={submitForm}
          className="w-screen md:w-1/2 flex flex-col items-strech px-4 md:ml-10"
        >
          <input
            type="hidden"
            name="access_key"
            value="c0650b2d-a005-4619-9d43-e4ee05e14175"
          ></input>
          <div className="flex flex-col items-start my-3">
            <label for="name">Name*</label>
            <input
              value={name}
              onChange={onChangeName}
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              className="bg-white"
            />
          </div>
          <div className="flex flex-col items-start my-3">
            <label for="email">Email*</label>
            <input
              value={email}
              onChange={onChangeEmail}
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              className="bg-white"
            />
          </div>
          <div className="flex flex-col items-start my-3">
            <label for="message">Message*</label>
            <textarea
              rows="5"
              value={message}
              onChange={onChangeMessage}
              id="message"
              placeholder="Messge"
              name="message"
              className="bg-white"
            />
          </div>
          <button
            className="bg-black rounded-md text-white my-3 w-11/12 my-3"
            type="submit"
          >
            Send Message
          </button>
        </form>
        <div className="justify-self-end self-strech h-full">
          <img
            className="hidden md:block ml-auto h-full "
            src={contactImg}
            alt="contactus-img"
          />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
