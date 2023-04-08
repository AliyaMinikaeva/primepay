import {Link} from "react-router-dom";
import Button from "../components/Button/Button";
import './Form.scss';
import Header from "../components/Header/Header";
import React from 'react';
import { useState, useEffect } from "react";

export default function Form({header, buttonText, linkText, linkTo}) {
  const [formData, setFormData] = useState({
    login: '',
    password: ''
  });
  useEffect(() => {
    const formLocalStorageKey = 'FORM_LOCAL_STORAGE_KEY';
    const formDataString = localStorage.getItem(formLocalStorageKey);
    if (formDataString !== null) {
      setFormData(JSON.parse(formDataString));
    }
  }, []);  

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });

    const formLocalStorageKey = 'FORM_LOCAL_STORAGE_KEY';
    localStorage.setItem(formLocalStorageKey, JSON.stringify(formData));
  };

  const handleSubmit = () => {
    // Handle form submission here
  };

  return  (
      <div className="wrp">
        <Header>Profile</Header>
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="form__header" >{header}</h1>
          <fieldset className="form__fieldset">
              <input id="login" placeholder="Логин" className="form__input" type="text"  value={formData.login}
            onInput={handleInputChange}></input>
          </fieldset>
          <fieldset className="form__fieldset">
          <input id="password" placeholder="Пароль" className="form__input" type="password" value={formData.password}
            onInput={handleInputChange}></input>
          </fieldset>
          <div className="form__btn-wrap">
          <Button>{buttonText}</Button>
          </div>
          <Link to={linkTo} href="#" className="form__link">
              {linkText}
              </Link>
      </form>
      </div>
  );
}





/*export default function Form({ header, buttonText, linkText, linkTo }) {

  return (
    <div className="wrp">
      <Header>
        <Logo></Logo>
        <Link to={linkTo} href="#" className="form__link">
          <Button>{linkText}</Button>
        </Link>
      </Header>
      <form className="form">
        <h1 className="form__header">{header}</h1>
        <fieldset className="form__fieldset">
          <input placeholder="Логин" className="form__input" type="text"></input>
        </fieldset>
        <fieldset className="form__fieldset">
          <input placeholder="Пароль" className="form__input" type="password"></input>
        </fieldset>
        <div className="form__btn-wrap">
          <Button>{buttonText}</Button>
        </div>
      </form>
    </div>
  );
}
*/