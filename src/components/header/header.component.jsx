import React  from 'react';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './header.styles.scss';


const Header = (disable) => {
//     const [isActive, setIsActive] = useState(true);

//     const  handleClick = event => {
//         setIsActive(current=> !current)
//   };
    const navigate = useNavigate();
    const {pathname} =useLocation();
    useEffect(()=> {
         navigate(`${pathname}`);
        
    },[navigate,pathname]);
    
    return(
        <div className='header-container'>
            <Link to='/' className={`${pathname === '/' ? 'disable': 'color'} links l1`} >About</Link>
            <Link to='/projects' className={`${pathname.includes('projects') ? 'disable': 'color'} links l2`} >Projects</Link>
            <Link to='/contact' className={`${pathname.includes('contact') ? 'disable': 'color'} links l3`} >Contact</Link>
        </div>
    )
}

export default Header;