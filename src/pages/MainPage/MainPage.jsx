import "./MainPage.scss";
import account from "./account.png";
import bank from "./bank.png";
import money from "./money.png";
import icon_money from "./icon_money.png";
import icon_cart from "./icon_cart.png"
import MyComponent from "./MainPageAnimation";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";

export default function MainPage() {

    return (
        <div>
            <div className="mainPage">
                <div className="mainPage__container">
                    <Header></Header>
                    <main className="mainPage__main">
                        <div className="mainPage__main-banner">
                            <h1 className="tracking-in-expand">
                                Ready To Launch Your
                                <br/>Online
                                <span
                                    style={{
                                    color: "white"
                                }}>
                                    Payment
                                </span>
                                App
                            </h1>
                            <p>
                                A simple yet modern solution to showcase your app
                            </p>
                            <Button>GET STARTED</Button>
                        </div>
                        <div className="money-wrp"><img src={icon_money} className="money-img"/>
                        </div>
                        <div className="cart-wrp"><img src={icon_cart} className="cart-img"/></div>
                            <MyComponent></MyComponent>
                            <div className="mainPage__main-action">
                                <div className="mainPage__main-action-wrp">
                                    <div className="mainPage__main-action-item scale1">
                                        <img src={account} alt="account"/>
                                        <div>
                                            <h4>Creat an account</h4>
                                            <p>Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus.
                                                Agencies define their new business</p>
                                        </div>
                                    </div>
                                    <div className="mainPage__main-action-item scale2">
                                        <img src={bank} alt="bank"/>
                                        <div>
                                            <h4>Attach bank accounts</h4>
                                            <p>Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus.
                                                Agencies define their new business</p>
                                        </div>
                                    </div>
                                    <div className="mainPage__main-action-item scale3">
                                        <img src={money} alt="money"/>
                                        <div>
                                            <h4>Send money</h4>
                                            <p>Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus.
                                                Agencies define their new business</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <Footer></Footer>
            </div>)}