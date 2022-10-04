import React from 'react'
import { Link } from 'react-router-dom';

import Logo from "../assets/images/logo_tasty.png";


const Register = () => {
  return (
    <div className="login">
      <div className="login__card">
        <div className="login__card__logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="login__card__title">signup</div>
        <div className="login__card__input">
        <input placeholder="name" type="text" />
          <input placeholder="email" type="text" />
          <input placeholder="password" type="text" />
          <input placeholder="compare password" type="text" />
          <button>sign up</button>
        </div>
        <div className="login__card__register">
          <span>I have an account? </span>
          <Link to="/Login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Register