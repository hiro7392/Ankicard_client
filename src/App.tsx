import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, useRoutes } from 'react-router-dom';
import {Router} from './routes/Router';

function App() {
  
  return (
    <>
    <BrowserRouter>
      <div className="App">
        <Router/>
      </div>
    </BrowserRouter>
    
    </>
  );
}

export default App;
