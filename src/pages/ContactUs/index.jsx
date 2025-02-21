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
    <div className="flex flex-col justify-center w-screen h-screen p-3 mt-10 w-10/12">
      <div className="flex my-7 w-11/12">
        <h1 className="text-3xl font-bold p-5 py-3 bg-green-700 rounded-xl text-white">
          Contact Us
        </h1>
        <p className="text-xl text-left ml-5">
          Feel free to ask if you have any <br />
          queries...
        </p>
      </div>
      <div className="flex justify-between items-center w-11/12 h-[92vh] bg-gray-100 rounded-2xl py-3">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          onSubmit={submitForm}
          className="w-1/2 flex flex-col items-strech px-4 ml-10"
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
            className="ml-auto h-full "
            src={contactImg}
            alt="contactus-img"
          />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
