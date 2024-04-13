import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';
import {useState } from 'react';
import './components.css';
import cimg from '../images/contactgif.gif';
function contact() {
    const form = useRef();
    const [sent,useSent]=useState("Submit")
    const [color, setColor] = useState('white');
    const sendEmail = (e) => {
        e.preventDefault();
        useSent("Loading...")
        emailjs
            .sendForm('service_ncooh4w', 'template_21xty0p', form.current, {
                publicKey: 'RZkl3DePKJf33q6qq',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    useSent('sent')
                    setColor('green')
                },
                (error) => {
                    useSent('Failed')
                    console.log('FAILED...', error.text);
                    setColor('red')
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
                    <button type="submit" value="Send" className='send' style={{ backgroundColor: color }}>{sent}</button>
                </form>
            </center>
        </div>
        </>
    );
};
export default contact;