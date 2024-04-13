import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './components.css';
import cimg from '../images/contactgif.gif'


function contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ncooh4w', 'template_21xty0p', form.current, {
                publicKey: 'RZkl3DePKJf33q6qq',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert("Message sent successfully")
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
        <div className="cc">
            <center>
                <img src={cimg} alt="" height='250px' />
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name"  placeholder='Enter your name' required/> <br/>
                    <input type="email" name="user_email" required placeholder='Enter your Email'/><br/>
                    <textarea name="message" className='msg' required placeholder='Enter your message here!'/><br />
                    <button type="submit" value="Send" className='send'>Send</button>
                </form>
            </center>
        </div>
        </>
    );
};
export default contact;