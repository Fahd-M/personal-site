import { useRef, useState } from 'react';
import './Contact.scss';
import { MdOutlineMail } from 'react-icons/md';
import { SiWhatsapp } from 'react-icons/si';
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(undefined);
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_johdowo', 'template_7jp0qqa', form.current, 'fK2MIDXw4W9_akY2Z')
      .then((result) => {
          console.log(result.text);
          setStatus({ type: 'success' })
      }, (error) => {
          console.log(error.text);
          setStatus({ type: 'error'})
      });
    
      e.target.reset();
  };

  return (
    <section className='contact wrapper'>
      <div className='contact__content section'>
        <h1 className='contact__title'>Get in Touch</h1>
        <h2 className='contact__sub-title'>Contact Me</h2>
      
        <div className='container contact__container'>
          <div className='contact__options'>
            <article className='contact__option'>
              <MdOutlineMail className='contact__icon'/>
              <div className='contact__text'>
                <h4 className='contact__method'>Email</h4>
                <p className='contact__credential'>fahd.munir.89@gmail.com</p>
                <a href='mailto:fahd.munir.89@gmail.com' target="_blank" rel="noreferrer"  className='contact__link'>Send an email</a>
              </div>
            </article>
            <article className='contact__option'>
              <SiWhatsapp  className='contact__icon'/>
              <div className='contact__text'>
                <h4 className='contact__method'>WhatsApp</h4>
                <p className='contact__credential'>+14165618142</p>
                <a href='https://api.whatsapp.com/send?phone=14165618142' target="_blank" rel="noreferrer" className='contact__link'>Send a message</a>
              </div>
            </article>

          </div>
          <h3 className='contact__sub-title'>You can also submit the form below to email me!</h3>
          <form ref={form} onSubmit={sendEmail} className="form">
            <label className="form__label" for="name">What is your name?</label>
            <input className="form__placeholder" type="text" name="name" placeholder="Your Full Name" required />
            <label className="form__label" for="email">What is your email?</label>

            <input className="form__placeholder" type="email" name="email" placeholder="Your Email" required />
            <label className="form__label" for="message">What is your message?</label>

            <textarea className="form__placeholder" name="message" rows="7" placeholder="Your Message" required></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
          </form>
        </div>

        <div className='alert'>
        {status?.type === 'success' && <h3 className='alert__success'> Your email has been sent!</h3>}
        {status?.type === 'error' && <h3 className='alert__error'> Your email has not been sent, please try again! </h3>}
        </div>
      </div>
    </section>
  )
}

export default Contact