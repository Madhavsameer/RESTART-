import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Conditional from './components/Conditional';
import Counter from './components/Counter';
import StopWatch from './components/StopWatch';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import React from 'react';
import Routing from './components/Routing';

function App() {
  return (
    <div className="App">

      <Router>

        <Routes>
         
        <Route path='/' Component={Routing}></Route>
          <Route path='/form' Component={Form}></Route>
          <Route path='/counter' Component={Counter}></Route>
          <Route path='/conditional' Component={Conditional}></Route>
          
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
