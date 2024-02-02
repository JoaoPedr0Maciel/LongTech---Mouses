import { useState } from 'react'
import Header from '../Header/Header'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

const Contact = () => {
  const [name, setName] = useState('')
  const [surName, setSurName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      name.length === 0 ||
      surName.length === 0 ||
      email.length === 0 ||
      message.length === 0
    ) {
      alert('Preencha todos os campos')
    } else {
      const templateParams = {
        from_name: name,
        surName,
        email,
        message,
      }
      emailjs
        .send(
          'service_4674avm',
          'template_pp86dkb',
          templateParams,
          '33jd_EC5BYT96s4Vb',
        )
        .then((response) => {
          return console.log(response)
        })

      Swal.fire({
        position: 'top',
        icon: 'success',
        title: "Thanks for contact us, we'll answer your feedback soon!",
        showConfirmButton: false,
        timer: 2000,
      })
    }

    setName('')
    setSurName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="h-full w-full">
      <Header />
      <h1 className="text-center text-[2rem] text-title-color font-bold tracking-wider">
        Contact Us
      </h1>
      <div className="mt-[2rem] h-full w-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col gap-[.8rem] justify-center items-center font-bold"
        >
          <div className="flex gap-2">
            <input
              className="w-[15rem] h-[3rem] p-[1rem] bg-background-card placeholder:text-title-color rounded-xl text-white outline-none"
              type="text"
              name=""
              id=""
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <input
              className="w-[15rem] h-[3rem] p-[1rem] bg-background-card placeholder:text-title-color rounded-xl text-white outline-none"
              type="text"
              name=""
              id=""
              value={surName}
              onChange={(e) => setSurName(e.target.value)}
              placeholder="SurName"
            />
          </div>
          <input
            className="h-[3rem] w-full p-[1rem] bg-background-card placeholder:text-title-color rounded-xl text-white outline-none"
            type="email"
            name=""
            id=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />
          <textarea
            className="p-[1rem] w-full bg-background-card placeholder:text-title-color rounded-xl text-white outline-none resize-none"
            placeholder="Send us ae message"
            name=""
            id=""
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            cols={30}
            rows={10}
          ></textarea>

          <input
            className="bg-background-card w-[10rem] h-[3rem] rounded-xl font-bold text-white transintion duration-[.4s] hover:bg-title-color hover:text-black cursor-pointer "
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  )
}

export default Contact
