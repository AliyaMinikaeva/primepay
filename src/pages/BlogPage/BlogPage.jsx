import './BlogPage.scss';
import Header from '../../components/Header/Header';
import News from '../../news/News';
import icon1 from "../../assets/image/icon1.png";
import icon2 from "../../assets/image/icon2.png";
import icon3 from "../../assets/image/icon3.png";
import icon4 from "../../assets/image/icon4.png";


export default function MainPage() {

    return (
        <div className="container">
            <Header>Login</Header>
            <div className="blog">
                <h1 className="blog__header">BLOG</h1>
                <img src={icon1} className="icon1 shake"/>
                <img src={icon2} className="icon2 shake"/>
                <img src={icon3} className="icon3 shake"/>
                <img src={icon4} className="icon4 shake"/>
            </div>
            <News/>
        </div>
    )
}