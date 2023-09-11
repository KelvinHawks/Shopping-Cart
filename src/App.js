import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
function App(){
 
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/'></Route>
          <Route path='/cart'></Route>
        </Routes> 
      </Router>
    </div>
    
   
  )
}


export default App;
