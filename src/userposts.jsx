import * as React from 'react';
import PropTypes from 'prop-types';

export class UserPosts extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    posts: PropTypes.oneOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      }),
    ).isRequired,
    remove: PropTypes.func.isRequired,
    createRandom: PropTypes.func.isRequired,
  };

  render() {
    const {
      name,
      posts,
      remove,
      createRandom,
    } = this.props;
    
    return <div>
      <button onClick={createRandom}>createRandom</button> for {name}
      <ul>
        {posts && posts.map(post => <li key={post._id}>
          {post.content}
          <button onClick={() => remove(post._id)}>remove</button>
        </li>)}
      </ul>
    </div>;
  }
};
