import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  componentDidMount() {
    axios
      .get(`/api/${this.props.match.params.category}`, {
        params: { name: this.props.match.params.category }
      })
      .then(results => {
        console.log(results.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

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
