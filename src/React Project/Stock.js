import React, { useState } from 'react';
import './Stock.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    // address: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign-up form submitted:', formData);
  };

  return (
    
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="label">
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="input"
          />
        </label>
        <label className="label">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="input"
          />
        </label>
        <label className="label">
          Email ID:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="input"
          />
        </label>
        <label className="label">
          Create Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="input"
          />
        </label> 
        <label className="label">
          Confirm Password:
          <input
            type="confirmPassword"
            name="confirmPassword"
            value={formData.password}
            onChange={handleInputChange}
            className="input"
          />
        </label> 
        <button type="submit" className="button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;