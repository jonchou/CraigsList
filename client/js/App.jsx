import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './Homepage.jsx';
import Search from './Search.jsx';
import preload from '../../data.json';

const App = () =>
  <Router>
    <div>
      <Route
        exact
        path="/"
        component={() => {
          return <Homepage categories={preload.categories} />;
        }}
      />
      <Route path="/search/:category" component={Search} />
    </div>
  </Router>;

export default App;
