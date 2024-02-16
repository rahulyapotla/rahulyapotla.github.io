import React from 'react'
import './contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
   

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_70sotn1', 'template_ve081zg', form.current, 'e8OkEzCZyevB9qODX')
        e.target.reset()
    };
    // var templateParams = {
    //     name: 'James',
    //     notes: 'Check this out!',
    //   };

    // emailjs.sendForm('service_70sotn1', 'template_ve081zg', templateParams).then(
    //     (response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //     },
    //     (error) => {
    //       console.log('FAILED...', error);
    //     },
    //   );

    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMailOutline className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>rpotla@uncc.edu</h5>
                        <a href="mailto:dummyegator@gmail.com">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <MdOutlineMailOutline className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>rpotla@uncc.edu</h5>
                        <a href="mailto:dummyegator@gmail.com">Send a message</a>
                    </article>
                </div>
                
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Your Full Name" required/>
                <input type="email" name="email" placeholder='Your Email' required />
                <textarea name="message" id="" cols="30" rows="7" placeholder='Your message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </section>
    )
}

export default Contact 