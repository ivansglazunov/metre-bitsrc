import React from "react";
import ReactDOM from "react-dom";

import "normalize.css";

import { Firstname } from "./firstname.jsx";
import { UserPosts } from "./userposts.jsx";

const random = () =>
  Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 5);

class App extends React.Component {
  state = {
    open: true,
    user: null
  };
  toggle = () => this.setState(({ open }) => ({ open: !open }));
  createAndLogin = () => this.setState(() => ({ user: { _id: "a", profile: { firstname: random() }, posts: [] } }));
  logout = () => this.setState(() => ({ user: null }));
  random = () => this.setState(({ user }) => ({ user: { ...user, profile: { firstname: random() } } }));
  createRandomPost = () => this.setState(({ user }) => ({ user: { ...user, posts: [...user.posts, { _id: random(), content: random() }] } }));
  removePost = (id) => this.setState(({ user }) => ({ user: { ...user, posts: user.posts.filter(post => post._id !== id) } }));
  
  render() {
    const { open, user } = this.state;

    return (
      <div>
        <Firstname
          user={user}
          open={open}
          toggle={this.toggle}
          create={this.createAndLogin}
          login={this.createAndLogin}
          logout={this.logout}
          random={this.random}
        />
        <UserPosts
          name={user && user.profile && user.profile.firstname}
          posts={user ? user.posts : []}
          createRandom={this.createRandomPost}
          remove={this.removePost}
        />
      </div>
    );
  }
}

console.log(document);
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
