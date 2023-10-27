import React from 'react';
import './project.styles.scss';


const Project= () => {
    return(
        <div className='project-container'>
            <div className='image-container cont'>
                <img src='https://i.ibb.co/3cHFxbK/weather.jpg' alt='weather app' className='image'/>
                <div className='props'>
                    <h3 className='title'>Weather</h3>
                    <p className='description'> Weather is a global weather forecast website developed with HTML, CSS, and JavaScript, integrated with the OpenWeatherMap API. This site provides detailed weather information for the current day and the next four days, including wind speed, pressure, humidity, and cloud cover data for locations worldwide.</p>
                    <h3 className='title'>Technologies</h3>
                
                    <ul>
                        <li>Html</li>
                        <li>Css</li>
                        <li>Javascript</li>
                    </ul>
                
                    <button className='view' onClick={(e) => {window.open('https://bintasani.github.io/weatherapp/weather%20site/weatherHtml')}}>View</button>
                </div>
            </div>
            <div className='image-container1 cont'>
                <img src='https://i.ibb.co/vjh5VL9/ecommerce.jpg' alt='weather app' className='image'/>
                <div className='props'>
                    <h3 className='title'>Crown Store</h3>
                    <p className='description'>Crown Stores is an e-commerce website developed with React.js which offers simple authentication through Firebase and secure payment processing via Stripe. It features advanced state management powered by React-Redux, ensuring an optimal user experience. The site's design is polished and dynamic, thanks to the use of Styled-Components.</p>
                    <h3 className='title'>Technologies</h3>
                    
                    <ul>
                        <li>React.js</li>
                        <li>Styled Components</li>
                        <li>Redux</li>
                        <li>Npm Packages</li>
                        <li>D3</li>
                        <li>Firebase</li>
                        <li>Stripe</li>
                        <li></li>
                    </ul>
                    
                    <button className='view v1' onClick={(e) => {window.open('https://crownstores.netlify.app/')}}>View</button>
                </div>
            </div>
            <div className='image-container2 cont'>
                <img src='https://i.ibb.co/ZWnyGTN/20230926-095857.jpg' alt='weather app' className='image'/>
                <div className='props'>
                    <h3 className='title'>Image Gallery</h3>
                    <p className='description'>Image Gallery is a user-friendly image gallery website developed with React.js, allowing easy sign-in using Firebase. Images can be rearranged simply by dragging and dropping images in the desired position, thanks to DND Kit integration.<br/> sign in credentials are:<br/> email: user@example.com <br/> password: 1Password </p>
                    <h3 className='title'>Technologies</h3>
                    
                    <ul>
                        <li>React.js</li>
                        <li>Scss</li>
                        <li>Npm Packages</li>
                        <li>Firebase</li>
                        <li>DnD kit</li>
                        
                    </ul>
                    
                    <button className='view v1' onClick={(e) => {window.open('https://hng-task3.netlify.app/')}}>View</button>
                </div>
            </div>
            <div className='image-container3 cont'>
                <img src='https://i.ibb.co/k9frTwf/20230926-095839.jpg' alt='weather app' className='image'/>
                <div className='props'>
                    <h3 className='title'>Movie Box</h3>
                    <p className='description'>MovieBox is an interactive movie website created using React.js which offers users the opportunity to explore the top 10 related movies along with their in-depth details. Additionally, the platform features a search functionality to discover specific movies of interest. TMDb API was incorporated to enhance the design and user experience, I utilized SCSS for styling and customization.</p>
                    <h3 className='title'>Technologies</h3>
                    
                    <ul>
                        <li>React.js</li>
                        <li>Scss</li>
                        <li>Npm Packages</li>
                        <li>TMDB api</li>
                        
                    </ul>
                    
                    <button className='view v1' onClick={(e) => {window.open('https://moviesitetask.netlify.app/')}}>View</button>
                </div>
            </div>
            
        </div>

    )
}

export default Project;