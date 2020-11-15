import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SearchFilter from './pages/SearchFilter';
import ShowResult from './pages/ShowResult';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/search' component={SearchFilter} />
        <Route path='/result' component={ShowResult} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
