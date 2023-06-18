import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router>
        <div className="App">
          <HomePage />
        </div>
    </Router>
  );
}

export default App;
