import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import './App.css';
import Home from './Views/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
