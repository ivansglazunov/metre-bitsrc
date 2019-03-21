import * as React from 'react';

export const UserPosts = ({
  name,
  posts,
  remove,
  createRandom,
}) => {
  return <div>
    <button onClick={createRandom}>createRandom</button> for {name}
    <ul>
      {posts && posts.map(post => <li key={post._id}>
        {post.content}
        <button onClick={() => remove(post._id)}>remove</button>
      </li>)}
    </ul>
  </div>;
};
