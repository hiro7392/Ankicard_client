import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, useRoutes } from 'react-router-dom';
import {Router} from './routes/Router';
import { Provider } from './context/StateProvider';

function App() {
  
  return (
    <>
      
      <BrowserRouter>
        <Provider>
          <div className="App">
            <Router/>
          </div>
        </Provider>
      </BrowserRouter>
      
    </>
  );
}

export default App;
