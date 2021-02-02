import React from "react";
import logo from '../assets/icon-film.png'
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
        <img className="login__logo" src={logo} alt="logo peliculas"/>
        {hasAccount ? (
          <label htmlFor="">iniciar Sesión:</label>
        ):(
          <label htmlFor="">Regístrate:</label>

        )}
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label htmlFor="">Contraseña:</label>
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
              <button onClick={handleLogin}>Iniciar sesión</button>
              <p>
                no tienes una cuenta?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Regístrate</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignUp}>Registrarse</button>
              <p>
                tienes una cuenta?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>iniciar sesión</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
