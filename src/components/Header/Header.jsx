import './Header.scss';
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { Link } from 'react-router-dom';

export default function Header() {

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
                <Button>Login</Button>
            </div>
        </div>
    )
}
