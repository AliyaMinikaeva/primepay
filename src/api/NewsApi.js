import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './NewsApi.scss';

const baseURL = "https://newsdata.io/api/1/news?apikey=pub_199701eaa09ae57317b3151a023e45714dd22&" +
        "q=online%20payment ";
        const App = () => { 
            const [posts, setPosts] = useState([]); 
            const [displayedCount, setDisplayedCount] = useState(6); // количество отображаемых новостей
         
            useEffect(() => { 
                axios.get(baseURL) 
                    .then((response) => { 
                        setPosts(response.data.results); 
                    }); 
            }, []); 
         
            if (!posts) return null; 
             
            return ( 
                <div className="news-container"> 
                    <div className="news-grid"> 
                        {posts.slice(0, displayedCount).map((post) => ( // изменяем метод map, чтобы отображать только первые displayedCount новостей
                            <div key={post.id} className="news__item"> 
                                <div className="news__item-category">{post.category}</div> 
                                <h4 className="news__item-title">{post.title}</h4> 
                                <div className="news__item-description">{post.description}</div> 
                            </div> 
                        ))} 
                    </div>
                    {displayedCount < posts.length && // если есть еще новости, которые не отображаются, показываем кнопку
                        <button className="load-more-button" onClick={() => setDisplayedCount(displayedCount + 6)}>SHOW MORE</button>} 
                </div> 
            ); 
        };
         
        export default App;
/*const baseURL = "https://newsdata.io/api/1/news?apikey=pub_199701eaa09ae57317b3151a023e45714dd22&" +
        "q=online%20payment ";

const App = () => {
    const [posts,
        setPosts] = useState([]);

    useEffect(() => {
        axios
            .get(baseURL)
            .then((response) => {
                setPosts(response.data.results);
            });
    }, []);

    if (!posts) 
        return null;
    
    return (
        <div className="news">
            {posts.map((post) => (
                <div key={post.id} className="news__item">
                    <div className="news__item-category">{post.category}</div>
                    <h4 className="news__item-title">{post.title}</h4>
                    <div className="news__item-description">{post.description}</div>
                </div>
            ))}
        </div>
    );
};

export default App;
*/
/*
const baseURL = "https://newsdata.io/api/1/news?apikey=pub_1995498457ae2d796e3bacd3202811cd24e26&language=en";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
        console.log(response.data.results)
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>{post.id}</p>
    </div>
  );
}
*/

/*
const baseUrl = "https://newsdata.io/api/1/news?apikey=pub_1995498457ae2d796e3bacd3202811cd24e26&language=en"

class News extends React.Component {
    constructor(props) {
        super(props)

        axios.get(baseUrl).then((res) => {
            console.log(res.data.results)
        })

        this.state = {
            news:[]
        }
    }
}

export default News;
*/
