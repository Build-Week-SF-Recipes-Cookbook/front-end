import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import './App.css';
import Results from './Views/Results';
import Home from './Views/Home';
import NewRecipe from './Views/NewRecipe';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
        <Route path="/new">
          <NewRecipe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
