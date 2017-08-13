import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import Homepage from './Homepage.jsx';
import Search from './Search.jsx';
import PostView from './PostView.jsx';
import preload from '../../data.json';

const App = () =>
  <Router>
    <div className="container">
      <NavBar />
      <Switch>
        <Route
          exact
          path="/"
          component={() => {
            return <Homepage categories={preload.categories} />;
          }}
        />
        <Route path="/posts/:id" component={PostView} />
        <Route path="/:category" component={Search} />
      </Switch>
    </div>
  </Router>;

export default App;
