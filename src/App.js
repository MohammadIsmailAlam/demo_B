// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
// import AdminDashboard from './pages/AdminDashboard';
// import Register from './pages/Register';

function App() {
  return (
    <div style={{display: "grid", justifyContent: "center", margin: '2rem', padding: "5rem"}}>
      {/* <LoginPage/>
      <Register/>     */}
      <Router>
      <Routes>
         <Route path="/" element={<LoginPage />} />
         <Route path="/reg" element={<Register />} />
         {/* <Route path="/admin" role="admin" element={<AdminDashboard />} /> */}
       </Routes>
     </Router>
    </div>

  );
}

export default App;

// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import './App.css'
// import { useEffect, useState } from 'react'
// import Login from './pages/LoginPage';
// import Home from './pages/Home';

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false)
//   const [email, setEmail] = useState('')

//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
//           <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }