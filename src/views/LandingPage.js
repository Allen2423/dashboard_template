import { React, useState } from "react";
import "../App.css";
import "../style.css";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";

const LandingPage = () => {
  const signUpButton = () => {
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
  };
  

  const signInButton = () => {
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
  };

  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_KEY = process.env.REACT_APP_API_KEY;
    try {
      const res = axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        JSON.stringify({
          username: username,
          password: password,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
      
      setMessage("");
      let message = document.getElementById('errorMessage');
      message.style.color = 'green';
      setMessage("Logged in successfully");
      sessionStorage.setItem('isLogin', true)
      navigate("/dashboard");
      sessionStorage.setItem('token', (await res).data.access_token)
      window.location.reload();
    } 
    catch (err) {
      if (err.res !== 200){
      setMessage('');
      let message = document.getElementById('errorMessage');
      message.style.color = 'red';
      setMessage('Username or password is incorrect!');
      }
    }
  };

  return (
    <div className="landingContainer">
      <div className="mainSection ">
        <div className="topnav">
          <span className="brandName px-4 py-2">Reno clinic</span>
        </div>
        <div className="mainSection_content">
          <div className="infoText ">
            <h1 className="text">Welcome to Reno clinic for better services</h1>
            <h3 className="text">
              We provide services that satisfy every customer
            </h3>
            <button
              type="button"
              className=" btn-login"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Sign In
            </button>
          </div>
          <div
            className="modal fade "
            id="loginModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="container " id="container">
                    <div className="form-container sign-up-container ">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <form className="lForm" action="#">
                        <h1>Create Account</h1>
                        <div className="form mt-2 ">
                          <input
                            type="text"
                            name="text"
                            autoComplete="off"
                            required
                          />
                          <label htmlFor="text" className="label-name">
                            <span className="content-name">User Name</span>
                          </label>
                        </div>
                        <div className="form mt-2 ">
                          <input
                            type="text"
                            name="text"
                            autoComplete="off"
                            required
                          />
                          <label htmlFor="text" className="label-name">
                            <span className="content-name">Full Name</span>
                          </label>
                        </div>
                        <div className="form mt-2 ">
                          <input
                            type="password"
                            name="text"
                            autoComplete="off"
                            required
                          />
                          <label htmlFor="text" className="label-name">
                            <span className="content-name">Password</span>
                          </label>
                        </div>
                        <div className="form mt-2 mb-3">
                          <input
                            type="password"
                            name="text"
                            autoComplete="off"
                            required
                          />
                          <label htmlFor="text" className="label-name">
                            <span className="content-name">Re-Password</span>
                          </label>
                        </div>
                        <button>Sign Up</button>
                      </form>
                    </div>

                    <div className="form-container sign-in-container">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <form className="lForm" onSubmit={handleSubmit}>
                        <h1>Sign in</h1>
                        <div className="form mt-3 ">
                          <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            autoComplete="off"
                            required
                          />
                          <label htmlFor="text" className="label-name">
                            <span className="content-name">User Name</span>
                          </label>
                        </div>
                        <div className="form mt-2">
                          <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="off"
                            required
                          />
                          <label htmlFor="text" className="label-name">
                            <span className="content-name">Password</span>
                          </label>
                        </div>
                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                        <h5 id="errorMessage" className="errorMessage">
                          {message}
                        </h5>
                      </form>
                    </div>
                    <div className="overlay-container">
                      <div className="overlay">
                        <div className="overlay-panel overlay-left">
                          <h1>Welcome Back!</h1>
                          <p>
                            To keep connected with us please login with your
                            personal info.
                          </p>
                          <button
                            className="ghost"
                            onClick={signInButton}
                            id="signIn"
                          >
                            Sign In
                          </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                          <h1>Hello, Friend!</h1>
                          <p>
                            Enter your personal details and start journey with
                            us.
                          </p>
                          {/* <button
                            className="ghost"
                            onClick={signUpButton}
                            id="signUp">
                            Sign Up
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
