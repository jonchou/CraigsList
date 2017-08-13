import React from 'react';
import { Link } from 'react-router-dom';

class Post extends React.Component {
  render() {
    return (
      <div className="post-entry">
        <div className="post-image">
          <img src={this.props.post.image} />
        </div>
        <div className="post-content">
          <Link to={`/posts/${this.props.post.id}`}>
            <div className="post-title">
              {this.props.post.title}
            </div>
          </Link>
          <div>
            <span>
              ({this.props.post.location})
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
