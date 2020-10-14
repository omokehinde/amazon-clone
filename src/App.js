import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';
import './App.css';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/checkout'>
            <h1>Checkout Page</h1>
          </Route>
          <Route path='/login'>
            <h1>Login Page</h1>
          </Route>
          <Route path='/'>
            <Header />
            <h1>WELCOME TO THE HOME PAGE!!!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
