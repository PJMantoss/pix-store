import React from "react"
import Header from './components/Header';
import Photos from './pages/Photos';
import Cart from "./pages/Cart";
import {Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route path=""></Route>

        <Route path=""></Route>
      </Switch>
    </div>
  );
}

export default App;
