import './BlogPage.scss';
import Header from '../../components/Header/Header';
import NewsApi from '../../api/NewsApi';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';


export default function MainPage() {

    return (
        <div className="container">
            <Header></Header>
            <div className="blog">
                <h1 className="blog__header">BLOG</h1>
                <img src={icon1} className="icon1 shake"/>
                <img src={icon2} className="icon2 shake"/>
                <img src={icon3} className="icon3 shake"/>
                <img src={icon4} className="icon4 shake"/>
            </div>
            <NewsApi></NewsApi>
        </div>
    )
}