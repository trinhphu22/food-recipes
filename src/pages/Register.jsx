import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "@firebase/firestore";
import { auth } from "../config/firebaseConfig";
import { db } from "../config/firebaseConfig";

import Logo from "../assets/images/logo_tasty.png";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const navigate = useNavigate();

  const avatar =
    "https://firebasestorage.googleapis.com/v0/b/recipe-6b5fc.appspot.com/o/avatar.png?alt=media&token=2dcb9cae-4b30-426c-9b09-b1ef6139722b";

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
  };

  const handleAccount = async () => {
    const collectionRef = collection(db, "Account");
    const payload = {
      name: name,
      email: email,
      password: password,
      role: "Guest",
      avatar: avatar,
      isDeleted: false,
    };
    await addDoc(collectionRef, payload);
  };

  // Đăng ký từ auth fire
  const signUp = async () => {
    try {
      if (confirmPassword === password) {
        await createUserWithEmailAndPassword(auth, email, password);
        clearErrors();
        if (auth.currentUser) {
          await handleAccount(); // Nếu đăng ký tài khoản thành công thì add dữ liệu vào db
          navigate("/");
        }
      } else {
        setConfirmPasswordError("Those passwords didn't match. Try again.");
      }
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(error.message);
          break;
        case "auth/weak-password":
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
        <div className="login__card__title">signup</div>
        <div className="login__card__input">
          <input
            placeholder="name"
            type="text"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          <input
            placeholder="email"
            type="text"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
          />
          <input
            placeholder="password"
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
          />
          <input
            placeholder="compare password"
            type="password"
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
            value={confirmPassword}
          />
          <button onClick={() => signUp()}>sign up</button>
        </div>
        <div className="login__card__register">
          <span>{emailError}</span>
          <span>{passwordError}</span>
          <span>{confirmPasswordError}</span>
          <span>I have an account? </span>
          <Link to="/Login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
