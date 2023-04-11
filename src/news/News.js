import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './News.scss';
import { setNewsItems, showMoreNews } from '../store/states/newsStates'

const baseURL = 'https://newsdata.io/api/1/news';

const News = () => {
  const dispatch = useDispatch();
  const { items, displayedCount, apiKey, searchQuery } = useSelector(state => state.news);

  useEffect(() => {
    axios
      .get(`${baseURL}?apikey=${apiKey}&q=${searchQuery}`)
      .then((response) => {
        dispatch(setNewsItems(response.data.results));
      })
  }, [dispatch, apiKey, searchQuery])

  return (
    <div className="news-container">
      <div className="news-grid">
        {items.slice(0, displayedCount).map((item) => (
          <div key={item.id} className="news__item">
            <div className="news__item-category">{item.category}</div>
            <h4 className="news__item-title">{item.title}</h4>
            <div className="news__item-description">{item.description}</div>
          </div>
        ))}
      </div>
      {displayedCount < items.length && (
        <button className="load-more-button" onClick={() => dispatch(showMoreNews())}>SHOW MORE</button>
      )}
    </div>
  );
};

export default News;