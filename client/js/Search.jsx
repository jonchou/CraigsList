import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    const self = this;
    axios
      .get(`/api/category/${this.props.match.params.category}`)
      .then(results => {
        self.setState({
          posts: results.data
        });
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
          {this.state.posts.map(post => {
            return post.title;
          })}
        </div>
      </div>
    );
  }
}

export default Search;
