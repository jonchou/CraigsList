import React from 'react';
import { Link } from 'react-router-dom';

class Section extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.category}
        </h1>
        <div>
          {this.props.subCtg.map(sub =>
            <div key={sub}>
              <Link to={`/search/${sub}`}>
                {sub}
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Section;
