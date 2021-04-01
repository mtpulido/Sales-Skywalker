import { useState } from "react";
import "./Landing.css"

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
    <div className="landing-container">
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
          Email:
          <input
            className="landing-input"
            type="text"
            name="email"
            value={signInData.email}
            onChange={handleChangeSignIn}
          />
        </label>
        <label>
          Password:
          <input
            className="landing-input"
            type="password"
            name="password"
            value={signInData.password}
            onChange={handleChangeSignIn}
          />
        </label>
        <button>Login</button>
      </form>

      <form
        className="sign-up-form"
        onSubmit={(e) => {
          e.preventDefault();
          props.handleSignUp(signUpData);
        }}
      >
        <div className="landing-label">Sign Up</div>
        <label>
          Name:
          <input
            className="landing-input"
            type="text"
            name="name"
            value={signUpData.name}
            onChange={handleChangeSignUp}
          />
        </label>
        <label>
          Email:
          <input
            className="landing-input"
            type="text"
            name="email"
            value={signUpData.email}
            onChange={handleChangeSignUp}
          />
        </label>
        <label>
          Password:
          <input
            className="landing-input"
            type="password"
            name="password"
            value={signUpData.password}
            onChange={handleChangeSignUp}
          />
        </label>
        <button>Sign Up</button>
      </form>

      <div className="landing-slogan">
        Fix the "Garbage-in, Garbage-out" data you're currently navigating
        through and increase your sales numbers.
      </div>
      <iframe
        className='landing-video'
        src="https://www.youtube.com/embed/iqyf-kJWwIg"
      ></iframe>
    </div>
  );
};

export default Landing;
