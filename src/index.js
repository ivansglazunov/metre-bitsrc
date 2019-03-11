import React from "react";
import ReactDOM from "react-dom";

import "normalize.css";

import { Firstname } from "./firstname.jsx";

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
  createAndLogin = () =>
    this.setState(() => ({ user: { id: "a", firstname: random() } }));
  logout = () => this.setState(() => ({ user: null }));
  random = () =>
    this.setState(() => ({ user: { id: "a", firstname: random() } }));
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
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
