import React,{ useRef } from 'react'
import { ContactContainer, ContactForm, ContactOption, ContactOptions, ContactSection } from './styles';

import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_74rhokg', 'template_j9cacsq', form.current, 'utfmATnbu18c4yEoq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <ContactSection id="contact">
      <h2>Contact Me</h2>
      <h5>Get In Touch</h5>
      <ContactContainer className="container">
        <ContactOptions>
          <ContactOption>
            <MdOutlineEmail className='icon'/>
            <h4>Email</h4>
            <h5>rafael.brito.1422@gmail.com</h5>
            <a href="mailto:rafael.brito.1422@gmail.com"  target="_blank">Envie uma mensagem</a>
          </ContactOption>

          <ContactOption>
            <BsWhatsapp className='icon'/>
            <h4>WhatsApp</h4>
            <h5>+55 (77) 98825-7032</h5>
            <a href="http://api.whatsapp.com/send?phone=77988257032" target="_blank">Envie uma mensagem</a>
          </ContactOption>

        </ContactOptions>
        <ContactForm ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Seu Nome Completo' required/>
          <input type="email" name="email" placeholder='Seu Email' required/>
          <textarea name="message" placeholder='Sua Mensagem' rows="7" required></textarea>
          <button type="submit" className='btn btn-primary'>Enviar Mensagem</button>
        </ContactForm>
      </ContactContainer>
      

    </ContactSection>
  )
}


export default Contact;