import "./Footer.scss";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import line from "../../assets/image/Line.png";

export default function Footer() {

    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__color">
                    <div className="footer__color-header">
                        <h2>
                            Take control of your<br/>personal <span style={{color:"white"}}>finances today</span>
                        </h2>
                    </div>
                    <div className="footer__color-email">
                        <input type="email" placeholder="Enter your email" autocomplete="on | off"></input>
                    </div>
                    <div className="footer__color-button">
                        <Button>SUBSCRIBE</Button>
                    </div>
                </div>
                <div className="footer__contacts">
                    <div className="footer__contacts-media">
                        <Logo></Logo>
                        <p>Lorem ipsum dolor sitonsecteturadipisicing elit<br/>sed do eiusmod temporincididunt Laoreet non<br/>sagittis aliquam bibendum.</p>
                    </div>
                    <div><img src={line}/></div>
                    <div className="footer__contacts-menu list">
                        <h5>Menu</h5>
                        <ul className="footer__contacts-list">
                            <li>About</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Blog</li>
                            <li>How it Work</li>
                        </ul>
                    </div>
                    <div className="footer__contacts-utility list">
                        <h5>Utility pages</h5>
                        <ul className="footer__contacts-list">
                            <li>Style guide</li>
                            <li>Password protected</li>
                            <li>404 Not found
                            </li>
                            <li>Licenses</li>
                            <li>Changelog</li>
                        </ul>
                    </div>
                    <div className="footer__contacts-address list">
                        <h5>Address</h5>
                        <ul className="footer__contacts-list">
                            <li>1700 W Blancke St, kiyev<br/>port south USA, America
                            </li>
                            <li><br/></li>
                            <li>+3255 456 789
                            </li>
                            <li>mail@primpay.com
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
