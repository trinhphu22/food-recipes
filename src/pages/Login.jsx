import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";

import Logo from "../assets/images/logo_tasty.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  // Đăng nhập từ auth firebase
  const logIn = async () => {
    try {
      clearErrors();
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(error.message);
          break;
        case "auth/wrong-password":
          setPasswordError(error.message);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="login">
      <div className="login__card">
        <div className="login__card__logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="login__card__title">login</div>
        <div className="login__card__input">
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
            placeholder="email"
            type="text"
          />
          <input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
            className="password"
            placeholder="password"
            type="password"
          />
          <Link className="text">Forgot Password? </Link>
          <button 
            onClick={() => logIn()}
          >Log in</button>
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
