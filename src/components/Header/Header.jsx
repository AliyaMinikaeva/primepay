import './Header.scss';
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Header({children}) {  
  const [isSignInOpen, setIsSignInOpen] = useState(true); // изначально открываем страницу signIn 
  const [currentButtonText, setCurrentButtonText] = useState('Sign Up'); // текст текущей кнопки

  const handleClick = () => {
    setIsSignInOpen(!isSignInOpen);
    setCurrentButtonText(isSignInOpen ? 'Sign In' : 'Sign Up');
  }

  return ( 
    <div className="mainPage__header"> 
        <div><Link to='/'><Logo/></Link></div> 
        <div> 
            <ul> 
                <li>About us</li> 
                <li>Features</li> 
                <li>Pricing</li> 
                <li><Link to='/Blog'>Blog</Link></li> 
            </ul> 
        </div> 
        <div> 
            <Link to='/signIn'><Button>{children}</Button></Link> 
        </div> 
    </div> 
) 
} 
