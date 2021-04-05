import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import MainContainer from "./containers/MainContainer";
import Layout from "./layout/Layout";
import {
  signInUser,
  signUpUser,
  verifyUser,
  removeToken,
} from "./services/auth";
import Landing from "./screens/landing/Landing";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleSignIn = async (formData) => {
    const userData = await signInUser(formData);
    setCurrentUser(userData);
    history.push("/dashboard");
  };

  const handleSignUp = async (formData) => {
    const userData = await signUpUser(formData);
    setCurrentUser(userData);
    history.push("/dashboard");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  return (
    <div className="App">
      <Route exact path="/">
        <Landing handleSignUp={handleSignUp} handleSignIn={handleSignIn} />
      </Route>

      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <MainContainer currentUser={currentUser}/>
      </Layout>
    </div>
  );
}

export default App;
