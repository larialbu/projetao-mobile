import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import Login from './pages/Login';
import Home from './pages/Home'; 
import Course from './pages/Course.js';
import Quiz from './pages/Quiz.js'
import List from './pages/List.js';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="app">
        <Routes> 
          <Route
            path="/"
            element={loggedIn ? <Navigate to="/home" /> : <Login onLogin={setLoggedIn} />}
          />
          {loggedIn && (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/course" element={<Course />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/list" element={<List />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
