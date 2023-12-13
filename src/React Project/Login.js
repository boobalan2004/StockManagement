import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h1>USER LOGIN</h1>
      <form action="#" method="post">
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <h3>Forgot Password?</h3>
        {/* <input type="checkbox" className="checkbox"/>
        <label htmlFor="checkbox">Terms and Conditions</label> */}
        <button type="submit">Login</button>
        <h4>Doesn't have any account?</h4>
      </form>
      
        <Link to='./SignUpForm'>Sign Up</Link>
    </div>
  );
};

export default Login;
