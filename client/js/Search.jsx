import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div>
        <div>In Search</div>
        <div>
          {console.log(this.props.match.params.category)}
        </div>
      </div>
    );
  }
}

export default Search;
