import React from "react";

const Login = ({
  email,
  password,
  setEmail,
  setPassword,
  emailError,
  passwordError,
  handleSignUp,
  handleLogin,
  hasAccount,
  setHasAccount,
}) => {
  return (
    <section className="login">
      <div className="loginContainer">
        <label htmlFor="">userName:</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label htmlFor="">password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>sign In</button>
              <p>
                Dont have a Account?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignUp}>sign Up</button>
              <p>
                have an Account?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
