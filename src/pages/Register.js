import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/login.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      if (users.some(user => user.username === username)) {
        setErrorMessage('Username already exists');
      } else {
        const newUser = { username, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        setIsRegistered(true);
        alert('Registration successful!');
      }
    }
  };

  return (
    <div className="login">
      {isRegistered ? (
        <div className="login">
          <h2>Registration Successful!</h2>
          <p>Welcome, {username}!</p>
          <button onClick={() => setIsRegistered(false)}>Register Another Account</button>
        </div>
      ) : (
        <div className="login-form">
          <h2>Register</h2>
          {errorMessage && <div className="error">{errorMessage}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
          <p>
            If you already have an account, <Link to="/">login here</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Register;
