import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as LinkedIn} from '../../assets/linkedin.svg';
import {ReactComponent as Mail} from '../../assets/gmail.svg';
import {ReactComponent as Github} from '../../assets/github.svg';
import './footer.styles.scss';


const Footer = () => {
    return(
        <div className='footer-Container'>
            <Link to='https://www.linkedin.com/in/binta-sani-123015248/' className='icon'><LinkedIn/></Link>
            <Link to='mailto:bintasani992@gmail.com?subject=subject&body=body' className='mail1 icon'><Mail/></Link>
            <Link to='https://github.com/BintaSani' className='icon git'><Github/></Link>
        </div>
    )
}
export default Footer;