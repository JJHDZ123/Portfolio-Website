import { React, useState }from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { AppWrapp } from '../../wrapper'

import './Footer.scss'

const Footer = () => {
  
  const [form, setForm] = useState({name: '', email: '', phone: '', message: ''});

  function handleChange(id) {

  }

  function sendEmail(e) {

    e.preventDefault();

    emailjs.sendForm('service_wlw500g', 'template_um2g87j', form.current, 's8B4bpyUM9hR7VeaT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  }

  return (
    <motion.div className='app__footer'
      whileInView = {{y: [100,50,0], opacity: [0,0,1]}}
      transition={{duration: .5}}
    >
      <h2> Feel free to contact me! </h2>

      <div className='app__footer-cards app__flex'>
        <div className='app__footer-card'>
          <img alt='email'/ >
        </div>
        <div className='app__footer-card'>
          <img alt='phone'/ >
        </div>
      </div>

      <form onSubmit={sendEmail} >
        <div className='app__footer-form app__flex'>
          <div>
            <input type='text' placeholder='Your Name' name='name' id='name' value={form.name} onChange={() => handleChange(this.id)} required/>
          </div>
          <div>
            <input type='text' placeholder='Email id' name='email' id='email' value={form.email} onChange={() => handleChange(this.id)} required/>
          </div>
          <div>
            <input type='text' placeholder='Phone number' name='phone' id='phone' value={form.phone} onChange={() => handleChange(this.id)} required/>
          </div>
          <div>
            <textarea type='text' placeholder='Send me a message!' name='message' id='message' value={form.message} onChange={() => handleChange(this.id)} required/>
          </div>
          <button type='submit' className='contact__btn'>Send</button>
        </div>
      </form>
    </motion.div>
  )
}

export default AppWrapp(Footer, 'contact');