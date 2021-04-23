import { useState } from "react";
import "./Landing.css";

const Landing = (props) => {
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    name: "",
    quota_annual: "150000",
  });
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')


  const handleChangeSignIn = (e) => {
    const { name, value } = e.target;
    setSignInData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeSignUp = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="overall-container">
    <div className="landing-container">
      <div className="landing-sidebar-container">

        <div className="landing-logo"> Sales Skywalker</div>

        <form
          className="sign-in-form"
          onSubmit={(e) => {
            e.preventDefault();
            props.handleSignIn(signInData);
          }}
        >
            <div className="landing-label">Login</div>
            <label>
              <div className="form-label-landing">Email:</div>
              <input
                className="landing-input"
                type="text"
                name="email"
                value={signInData.email}
              onChange={handleChangeSignIn}
              autoFocus
              />
            </label>
            <label>
            <div className="form-label-landing">Password:</div>
              <input
                className="landing-input"
                type="password"
                name="password"
                value={signInData.password}
                onChange={handleChangeSignIn}
              />
          </label>
          <div className="password-error">{props.loginError}</div>
          <button className="landing-button">Login</button>
        </form>

        <form
          className="sign-up-form"
          onSubmit={(e) => {
            if (confirmPassword === signUpData.password) {
              e.preventDefault();
              props.handleSignUp(signUpData);
            }
            if (confirmPassword !== signUpData.password){
              e.preventDefault();
              setPasswordError('passwords do not match or must be 8+ characters')
            } 
            
          }}
        >
            <div className="landing-label">Sign Up</div>
            <label>
            <div className="form-label-landing">Name:</div>
              <input
                className="landing-input"
                type="text"
                name="name"
                value={signUpData.name}
                onChange={handleChangeSignUp}
              />
            </label>
            <label>
            <div className="form-label-landing">Email:</div>
              <input
                className="landing-input"
                type="text"
                name="email"
                value={signUpData.email}
                onChange={handleChangeSignUp}
              />
            </label>
            <label>
            <div className="form-label-landing">Password:</div>
              <input
                className="landing-input"
                type="password"
                name="password"
                value={signUpData.password}
                onChange={handleChangeSignUp}
              />
          </label>
          <label>
            <div className="form-label-landing"> Confirm Password:</div>
              <input
                className="landing-input"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
          </label>
          <div className="password-error">{passwordError}</div>
          <button className="landing-button">Sign Up</button>
        </form>
      </div>
          <div className="landing-video-container">
      <iframe
          title="landing player"
          className="landing-video"
        src="https://www.youtube.com/embed/bwdcmE8hHk8"
        ></iframe>
        </div>
        </div>
    </div>
  );
};

export default Landing;
