import React from 'react';
import './project.styles.scss';


const Project= () => {
    return(
        <div className='project-container'>
            <div className='image-container cont'>
                <img src='https://i.ibb.co/3cHFxbK/weather.jpg' alt='weather app' className='image'/>
                <div className='props'>
                    <h3 className='title'>Weather</h3>
                    <p className='description'> weather is a weather forecast site that gives real time weather update of cities and counties across the globe.</p>
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
                <img src='https://i.ibb.co/w73nC9M/quotes.jpg' alt='weather app' className='image'/>
                <div className='props'>
                    <h3 className='title'>Quotes</h3>
                    <p className='description'> Quotes provides meaningful and inspiring quotes from inspiring people around the world.</p>
                    <h3 className='title'>Technologies</h3>
                
                    <ul>
                        <li>Html</li>
                        <li>Css</li>
                        <li>Javascript</li>
                    </ul>
                    
                    <button className='view' onClick={(e) => {window.open('https://bintasani.github.io/quote-generator/htmldom4.html')}}>View</button>
                </div>
            </div>
            <div className='image-container2 cont'>
                <img src='https://i.ibb.co/vjh5VL9/ecommerce.jpg' alt='weather app' className='image'/>
                <div className='props'>
                    <h3 className='title'>Crown Store</h3>
                    <p className='description'> Crown store is an online e-commerce app that provides ease with the process of purchasing hats, jackets, bag, shoes and jewelries.</p>
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
            <div className='image-container3 cont'>
                <img src='https://i.ibb.co/ZWnyGTN/20230926-095857.jpg' alt='weather app' className='image'/>
                <div className='props'>
                    <h3 className='title'>Image Gallery</h3>
                    <p className='description'>Image gallery is a simple image gallery that can be rearranged by dragging and dropping images in a desired position, images can also be filtered bay tags. sign in credentials are: email- user@example.com, password: 1Password. </p>
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
            <div className='image-container4 cont'>
                <img src='https://i.ibb.co/k9frTwf/20230926-095839.jpg' alt='weather app' className='image'/>
                <div className='props'>
                    <h3 className='title'>Movie Box</h3>
                    <p className='description'>Movie box is a simple movie site that showcases the top ten movies</p>
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