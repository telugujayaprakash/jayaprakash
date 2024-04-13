import React from 'react';
import './components.css';
import 'animate.css';

function about() {
    return (
        <div className='aa'>
            <h1 className='a1' >About Me</h1>
            <p className='ap'>Welcome to my portfolio! I'm Jayaprakash, a dynamic and passionate Frontend Web Developer with a zest for creating unique and innovative designs. I'm a quick learner who's always eager to expand my skillset and stay ahead of the curve in this ever-evolving field.</p>
<hr />
            <section className='askills'>
                <h3 className='skills'>My Skills</h3>
                <p className='as'>Python</p>
                <p className='as'>React</p>
                <p className='as'>Mongodb</p>
                <p className='as'>Basic flutter</p>
            </section>

            <p className='acon'>If you're looking for a Frontend Web Developer who's passionate, creative, and always up for a challenge, I'd love to hear from you. Let's create something amazing together!</p>
        </div>
    );
}
export default about;