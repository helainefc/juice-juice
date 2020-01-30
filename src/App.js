import React from 'react';
import './App.css';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Error from './pages/Error'
import Juices from './pages/Juices'
import SingleJuice from './pages/SingleJuice'
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/juices/" component={Juices} />
        <Route exact path="/juices/:slug" component={SingleJuice} />        
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
