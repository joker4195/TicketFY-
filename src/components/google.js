import React from 'react';

import { GoogleLogin } from '@react-oauth/google';
// import {GoogleLogin} from '@react-oauth/google';
// import {GoogleLogin }from 'react-google-login';
const google = () => {

    return (
        <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
    )
}

export default google;