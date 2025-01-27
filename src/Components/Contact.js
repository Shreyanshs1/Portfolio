import React from 'react'
import '../StyleSheets/Contact.css'
import line from '../assets/Line-Design.svg'

function Contact() {
  return (
    <>
    <div className='container-contact block' id='contact'>
        <h1 className='about-page-heading'>Contact Me</h1>
        <p className='about-page-subheading'>Write me here</p>
        <div className='main-contact'>
            <div className='contact-form'>
                <form action="https://formspree.io/f/mgvoolpe" method="POST">
                <div className='grid-two'>
                    <div className='lbl-nd-inpt'>
                        <input type='text' name='name' id='name' required autoComplete="off"/>
                        <label htmlFor='name'>Name</label>
                    </div>
                    <div className='lbl-nd-inpt'>
                        <input type='email' name='email' id="email" required/>
                        <label htmlFor='email'>Email</label>
                    </div>
                </div>
                    <div className='lbl-nd-inpt'>
                        <input type='subject' name='subject' required/>
                        <label for='subject'>Subject</label>
                    </div>
                    <div className='lbl-nd-txt'>
                        <label>Your Message</label>
                        <textarea
                        name='textarea'
                        id='textarea'
                        cols='30'
                        rows="10"
                        autocomplete='off'
                        required
                        minlength="4"
                        />
                    </div>
                    <div>
                        <input className='button' type="submit"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact