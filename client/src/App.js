import { useState, useEffect } from "react";
import {Route, useHistory } from "react-router-dom";
import MainContainer from "./containers/MainContainer";
import {
  signInUser,
  signUpUser,
  verifyUser,
  removeToken,
} from "./services/auth";
import Landing from "./screens/landing/Landing";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loginError, setLoginError] = useState('')
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleSignIn = async (formData) => {
    try { 
    const userData = await signInUser(formData);
    setCurrentUser(userData);
    history.push("/businesses");
    } catch {
        setLoginError('invalid login credentials')
  }
  };

  const handleSignUp = async (formData) => {
    const userData = await signUpUser(formData);
    setCurrentUser(userData);
    history.push("/businesses");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push('/')
  };

  return (
    <div className="app">
      <Route exact path="/">
        <Landing handleSignUp={handleSignUp} handleSignIn={handleSignIn} setLoginError={setLoginError} loginError={loginError}/>
      </Route>

        <MainContainer currentUser={currentUser} handleLogout={handleLogout} />
    

      
    </div>
  );
}

export default App;
