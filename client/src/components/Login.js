import React, { useState } from "react";
import axiosWithAuth from "./axiosWithAuth";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value })
  }

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('http:/localhost:5000/api/login', credentials)
      .then(response => {
        window.localStorage.setItem('token', response.data.payload);
        
      })
      .catch(error => {
        console.log('error:', error)
      })
      props.history.push('/colors')
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <h3>Login to Continue to Bubbles!</h3>
      <form onSubmit={login}>
        <label htmlFor='username'>Username:</label>
          <input 
            type='text'
            name='username'
            value={credentials.username}
            onChange={handleChange}
          />
        <label htmlFor='password'>Password:</label>
          <input
            type='password'
            name='password'
            value={credentials.password}
            onChange={handleChange}
          />
          <button type='submit'>Log In</button>
      </form>
    </>
  );
};

export default Login;
