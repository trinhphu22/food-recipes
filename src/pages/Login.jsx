import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";


import Logo from "../assets/images/logo_tasty.png";

const Login = () => {
  return (
    <div className="login">
      <div className="login__card">
        <div className="login__card__logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="login__card__title">login</div>
        <div className="login__card__input">
          <input placeholder="email" type="text" />
          <input className="password" placeholder="password" type="text" />
          <span className="text">Forgot Password? </span>
          <button>Log in</button>
        </div>
        <div className="login__card__choose">
          <span className="text">Or login with</span>
          <div className="login__card__choose__button">
            <button className="facebook">
              <FaFacebookSquare className="icon" />
              <span>Facebook</span>
            </button>
            <button className="google">
              <FcGoogle className="icon" />
              <span>Google</span>
            </button>
          </div>
        </div>
        <div className="login__card__register">
          <span>Don't have an account? </span>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
