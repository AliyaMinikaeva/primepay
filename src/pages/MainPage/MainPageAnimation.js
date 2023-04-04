import React, { useState, useEffect, useRef } from 'react';
import Phone from "./phone.png";
import "./MainPage.scss";


const MyComponent = () => {
  const [isVisible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // при попадании в зону видимости добавляем класс с анимацией
          setVisible(true);
        }
      }, 
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // измените значение при необходимости
      }
    );

    observer.observe(ref.current);

    // отключаем observer когда компонент больше не нужен
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <img 
      ref={ref} 
      className={`mainPage__main-phone ${isVisible ? 'scale-up-center' : ''}`}
      style={{ opacity: isVisible ? 1 : 0 }}
      src={Phone}
      alt="phone"
    />
  );
}

export default MyComponent;

