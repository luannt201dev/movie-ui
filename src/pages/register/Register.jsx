/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./register.scss";
import { toast } from "react-toastify";
import { registerApi } from "../../API/auth.api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const usernameRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {error, registerSuccess} = useSelector((state) => state.auth)

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (registerSuccess) {
      toast.success("Đăng kí thành công! Đăng nhập để tiếp tục.");
      navigate("/login")
    }
  }, [error, registerSuccess])

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    setUsername(usernameRef.current.value);
    setName(nameRef.current.value);
    setPassword(passwordRef.current.value);

   await registerApi({ 
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      email, 
      name: nameRef.current.value 
    }, dispatch);
     
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="login-button">
            <Link to="/login">Sign In</Link>
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="text" placeholder="Your username" ref={usernameRef} />
            <input type="text" placeholder="Your name" ref={nameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
