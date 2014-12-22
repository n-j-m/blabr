'use strict';

var React = require('react');

var Login = React.createClass({

  render: function() {
    return (
      <form className="form-signin" role="form">
        <h2 className="form-signin-heading">Please sign in</h2>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" ref="email" className="form-control" placeholder="email@address" required autofocus />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" ref="password" className="form-control" placeholder="password" required />
        <button className="btn btn-lg btn-primary btn-block">Sign in</button>
      </form>
    );
  }

});

module.exports = Login;