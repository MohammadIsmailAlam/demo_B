import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const adminCredentials = {
    username: 'admin',
    password: 'admin123'
  };

  const handleLogin = () => {
    if (isAdmin) {
      if (username === adminCredentials.username && password === adminCredentials.password) {
        setIsLoggedIn(true);
      } else {
        alert('Invalid admin credentials!');
      }
    } else {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(user => user.username === username && user.password === password);
      if (user) {
        setIsLoggedIn(true);
      } else {
        alert('Invalid credentials!');
      }
    }
  };

  return (
    <div className="login">
      {isLoggedIn ? (
        <div className="login">
          <h2>Welcome, {username}!</h2>
          {isAdmin && <p>You are logged in as admin.</p>}
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <div className="login-form">
          <h2>Login</h2>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label>Admin Login:</label>
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
          </div>
          <button onClick={handleLogin}>Login</button>
          <p>
            Don't have an account? <Link to="/reg">Register here</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
