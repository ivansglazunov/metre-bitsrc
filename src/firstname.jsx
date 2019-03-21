import * as React from "react";
import PropTypes from 'prop-types';

export class Firstname extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    open: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    create: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    random: PropTypes.func.isRequired,
  };

  render() {
    const {
      user,
      open,
      toggle,
      create,
      login,
      logout,
      random,
    } = this.props;
    
    return (
      <div>
        <button onClick={toggle}>{open ? "hide" : "show"}</button>
        {open && (
          <React.Fragment>
            {user ? (
              <React.Fragment>
                <button onClick={logout}>logout</button>
                <button onClick={random}>random</button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <button onClick={create}>create</button>
                <button onClick={login}>login</button>
              </React.Fragment>
            )}
            <div>{JSON.stringify(user)}</div>
          </React.Fragment>
        )}
      </div>
    );
  }
};
