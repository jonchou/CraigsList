import React from 'react';
import axios from 'axios';
import Post from './Post.jsx';

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
        Search: <input placeholder="not implemented" />
        <div>
          {this.state.posts.map(post => {
            return <Post key={post.id} post={post} />;
          })}
        </div>
      </div>
    );
  }
}

export default Search;
