import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import './Login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const isValid = emailPattern.test(inputValue);
    setIsValidEmail(isValid);
    setEmail(inputValue);
  };

  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;
    setIsValidPassword(true);
    setPassword(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const isEmailValid = emailPattern.test(email);
    setIsValidEmail(isEmailValid);

    const isPasswordValid = password.length >= 6; 
    setIsValidPassword(isPasswordValid);

  };

  return (
    <>
      <div className="text">
        <div className="box">
          <h1>LOGIN</h1>
          <div className="email">
            <p>E-mail:</p>
            <input
              type="email"
              className="text"
              value={email}
              onChange={handleEmailChange}
            />
            {!isValidEmail && <p className="error"> Your email is incorrect! </p>}
          </div>
          <div className="pass">
            <p>Password:</p>
            <input
              type="password"
              className="password"
              value={password}
              onChange={handlePasswordChange}
            />
            {!isValidPassword && <p className="error">كلمة مرور غير صحيحة</p>}
          </div>
          <div className="checkbox">
            <input type="checkbox" name="option1" value="option1" />
            <p>Remember Me</p>
          </div>
          <button className="submit" type="button" onClick={handleSubmit}>
            Submit
          </button>
          <a href="http://" className="forget">
            <p>Forget Password?</p>
          </a>
          <div className="icoons">
            <a href="https://www.google.com.eg/"><FcGoogle className="icon" /></a>
            <a href="https://www.facebook.com/"><FaFacebook className="icon" /></a>
            <a href="https://www.linkedin.com/"><FaLinkedin className="icon" /></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

