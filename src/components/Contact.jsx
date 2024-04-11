// import React from 'react';
// import './components.css';
// import cimg from '../images/contactgif.gif'

// function contact() {
//         return (
//             <div className='cc'>
//                 <center>
//                     <img src={cimg} alt=""  height='250px'/>
//                     <form action="">
//                         <input type="text" name="name" id="name" placeholder='Enter Your Name' required/>
//                         <input type="email" name='email' placeholder='Enter your Email id' required/>
//                         <textarea name="" id="" cols="30" rows="10" placeholder='Enter Your message here'></textarea>
//                         <button type="submit">Send</button>
//                     </form>

//                 </center>
//             </div>
//         );
//     }
// export default contact;

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
                    <textarea name="message" required placeholder='Enter your message here!'/><br />
                    <button type="submit" value="Send">Send</button>
                </form>
            </center>
        </div>
        </>
    );
};
export default contact;