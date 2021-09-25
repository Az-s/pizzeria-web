import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Orders from './components/Orders/Orders';
import Dishes from './components/Dishes/Dishes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route exact path='/' component={Orders} />
        <Route path='/dishes' component={Dishes} />
      </Router>
    </div>
  );
}

export default App;
