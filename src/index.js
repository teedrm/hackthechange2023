import React from 'react';
import ReactDOM from 'react-dom';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom';
import Homepage from './Homepage';
import SignIn from './SignIn';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ToastContainer />
      <App />
    </Router>
  </React.StrictMode>
);
