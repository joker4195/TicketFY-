import React from "react";
import "./LoginFormStyles.css";
// import logo from './logo.svg';
import { GoogleOAuthProvider } from "@react-oauth/google";
import Google from "../components/google";
// import {GoogleLogin} from 'react-google-login';
function LoginForm() {
  return (
    <div className="cover">
      <h1>Login</h1>
        <input  type="text" placeholder="Username"></input>
        <input  type="password" placeholder="Password"></input>
     

      <div className="login-btn">
        <b>Login</b>
      </div>
      <p className="text">
        <b>Or Login using</b>
      </p>

      <div className="App">
        <header className="App-header">
          {/* <img src="./"className="App-logo" alt="logo" /> */}

          <GoogleOAuthProvider clientId="951889866211-3felap3kc78ttqgm9n9h86odf8bo4jln.apps.googleusercontent.com">
            <Google></Google>
          </GoogleOAuthProvider>
        </header>
      </div>
    </div>
  );
}
export default LoginForm;

// return (

// <div className="alt-login">
// <div className="facebook"></div>
// <div className="google"></div>
// </div>

// )
