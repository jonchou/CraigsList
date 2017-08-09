import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <Link className="title" to="/">
        <div className="nav">
          <h1>CraigsList Mock</h1>
        </div>
      </Link>
    );
  }
}

export default NavBar;
