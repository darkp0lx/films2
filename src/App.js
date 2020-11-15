import { useState, useEffect } from "react";
import Login from "./components/Login";
import Hero from "./components/Hero";
import fire from "./fire";
import "./assets/App.css";
import './assets/imagehover.min.css'
function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const handleLogin = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmail(error.message);
            break;
          case "auth/wrong-password":
            setPasswordError(error.message);
        }
      });
  };
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };
  const handleSignUp = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in use":
          case "auth/invalid-email":
          case "auth/user-not-found":
            setEmailError(error.message);
            break;
          case "auth/weak-password":
            setPasswordError(error.message);
            break;
        }
      });
  };
  const handleLogOut = () => {
    fire.auth().signOut();
  };
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authListener();
  });
  return (
    <div className="App">
      {user ? (
        <Hero handleLogOut={handleLogOut} />
      ) : (
        <Login
          email={email}
          password={password}
          emailError={emailError}
          passwordError={passwordError}
          setEmail={setEmail}
          setPassword={setPassword}
          handleSignUp={handleSignUp}
          handleLogin={handleLogin}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
        />
      )}
    </div>
  );
}

export default App;
