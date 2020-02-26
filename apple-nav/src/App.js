import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import NavHeader from './components/NavHeader.jsx';
import Home from './components/pages/Home.jsx';
import Mac from './components/pages/Mac.jsx';
import IPad from './components/pages/IPad.jsx';
import IPhone from './components/pages/IPhone.jsx';
import Watch from './components/pages/Watch.jsx';
import TV from './components/pages/TV.jsx';
import Music from './components/pages/Music.jsx';
import Support from './components/pages/Support.jsx';

function App() {
  return (
    <div className="App">
      <NavHeader />
      <Route exact path="/" >
        <Home />
      </Route>
      <Route exact path="/mac" >
        <Mac />
      </Route>
      <Route exact path="/ipad" >
        <IPad />
      </Route>
      <Route exact path="/iphone" >
        <IPhone />
      </Route>
      <Route exact path="/watch" >
        <Watch />
      </Route>
      <Route exact path="/tv" >
        <TV />
      </Route>
      <Route exact path="/music" >
        <Music />
      </Route>
      <Route exact path="/Support" >
        <Support />
      </Route>
    </div>
  );
}

export default App;
