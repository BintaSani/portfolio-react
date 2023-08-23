import React from 'react';
import './content.styles.scss';


const Content = () => {
    return(
        <div className='container'>
            <div className='content'>
                <h1 className='introduction'>Hi! </h1>
                <h1 className='introduction'>I am Binta Sani </h1>
                <h2 className='developer'>Web Developer</h2>
                <p className='dev'>I am a Web Developer who uses HTML,
                    CSS, vanilla Javascript and React.JS to design responsive
                    web pages and applications.
                    I also enjoy playing around with Adobe XD and Adobe photoshop.
                    <br/>
                    <br/>
                    Interestingly, I got introduced to programming after my 
                    graduation from the university, After which i dedicated my
                    time to learning frontend web development in order to become
                    a software developer with a goal-driven creative mindset and 
                    passion for learning and innovating. I also love baking and Photography.
                </p>
                <div className='container-m'>
                <div className='mail-container'>
                    <h4 className='mail'>Email:</h4>
                    <h4 className='p'>bintasani992@gmail.com</h4>
                </div>
                <div className='mail-container'>
                    <h4 className='mail'>Behance:</h4>
                    <h4 className='p'>behance.bintasani</h4>
                </div>
                </div>
                <div className='button-container'> 
                    <button className='button1 btn' onClick={(e) => {window.open('https://drive.google.com/uc?export=download&id=1LW9UoU93p5L6cedi1jTi1eda_N3I73_K')}}>Download CV</button>
                    <button className='button btn'onClick={(e) => {window.open('mailto:bintasani992@gmail.com?subject=subject&body=body')}}>Hire me</button>
                </div>
            </div>
            <div className='avatar'>
                <img src='https://i.ibb.co/HdGxkPf/vect.png' alt='avatar' className='avatar1'/>
            </div>
        </div>
    )
} 

export default Content;