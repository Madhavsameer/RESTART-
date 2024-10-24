import './App.css';
import Form from './components/Form';
import Conditional from './components/Conditional';
import Counter from './components/Counter';
import StopWatch from './components/StopWatch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Routing from './components/Routing';
import ObjectData from './components/ObjectData';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="App">
      {/* Move Router to the top level to use Routing consistently across all routes */}
      <Router>
        {/* Include Routing component at the top, so it appears on every page */}
        <Routing />
        
        <Routes>
          
          <Route path='/form' element={<Form />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/conditional' element={<Conditional />} />
          <Route path='/stopwatch' element={<StopWatch />} />
          <Route path='/object' element={<ObjectData />} />
          <Route path='/quiz' element={<Quiz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
