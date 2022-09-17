import { React,useState, useRef }from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { AppWrapp } from '../../wrapper'
import { BsPhone, BsEnvelope } from 'react-icons/bs'

import './Footer.scss'

const Footer = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    setIsLoading(true)

    e.preventDefault();

    emailjs.sendForm('service_wlw500g', 'template_um2g87j', form.current, 's8B4bpyUM9hR7VeaT')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          setIsFormSubmitted(true)
          setIsLoading(false)

      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <motion.div className='app__footer'
      whileInView = {{y: [100,50,0], opacity: [0,0,1]}}
      transition={{duration: .5}}
    >
      <h2 className='head-text'> Feel free to contact me! </h2>
      <div className='body-container'>
        <div className='app__footer-cards'>
          <div className='app__footer-card'>
            <BsEnvelope className='icon'/>
            <a href='mailto:juanherndev@gmail.com' className='p-text'>juanherndev@gmail.com</a>
          </div>
          <div className='app__footer-card'>
            <BsPhone className='icon'/>
            <a href='tel: +1 (832) 562-8723' className='p-text'>+1 (832) 562-8723</a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} >
          {!isFormSubmitted ?
          <div className='app__footer-form app__flex'>
            <div>
              <input type='text' placeholder='Your Name' name='name' required/>
            </div>
            <div>
              <input type='text' placeholder='Email' name='email' required/>
            </div>
            <div>
              <input type='text' placeholder='Phone number' name='phone' required/>
            </div>
            <div>
              <textarea type='text' placeholder='Send me a message!' name='message' required/>
            </div>
            <button type='submit' className='contact__btn'>{isLoading ? 'Sending' : 'Send Message'}</button>
          </div>
          : <motion.div
              animate={{y: [50,0], opacity: [0,1]}}
            >
              <h3 className='head-text'> Thank you for getting in touch!</h3>
            </motion.div>}
        </form>
      </div>
    </motion.div>
  )
}

export default AppWrapp(Footer, 'contact');