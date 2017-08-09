import React from 'react';
import Section from './Section.jsx';

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>CraigsList Mock</h1>
        </div>
        {this.props.categories.map(category =>
          <Section key={category.name} category={category.name} subCtg={category.subCtg} />
        )}
      </div>
    );
  }
}

export default Homepage;
