import React from 'react';
import './contact.styles.scss';


const Contact = () =>{
    return(
        <div className='contact-container'>
            <h3 className='contact-title'> Get in touch </h3>
            <p className='contact-text'>
                If you are looking for a team player, committed, detail oriented, reliable and skilled developer  with good communication skills to add to your team then look no further.
                <br/>
                <br/>
                I am open to internship opportunities where i can contribute to the best of my abilities, learn from inspiring developers and gain work experience.   
            </p>
            <button className='contact' onClick={(e) => {window.open('mailto:bintasani992@gmail.com?subject=subject&body=body')}}>Gmail</button>
            <button className='contact c1' onClick={(e) => {window.open('https://www.linkedin.com/in/binta-sani-123015248/')}}>LinkedIn</button>
        </div>
    )
}

export default Contact;
