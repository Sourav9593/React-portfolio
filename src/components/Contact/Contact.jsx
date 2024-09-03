import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_68lz03g', 'template_70yusho', form.current, {
        publicKey: 'veKHYtxotZyLspS98',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="contactPage">
        <div id='contact'>
            <h1>Contact Me</h1>
            <span>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className='name' placeholder='Your Name' name='name'/>
                <input type="email" className='email' placeholder='Your Email' name='email'/>
                <textarea className='msg' name='message' rows={5} placeholder='Your Message'/>
                <button type='submit' value='send' className='submitBtn'>Submit</button>
            </form>
        </div>
    </section>
    
  )
}

export default Contact