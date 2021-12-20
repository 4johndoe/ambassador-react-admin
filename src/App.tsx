import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route path="/">
              <Users />
          </Route>
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/register">
              <Register />
          </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
