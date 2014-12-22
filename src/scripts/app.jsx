'use strict';

var React = require('react');
window.React = React;

var Login = require('./components/Login.jsx');
var Convos = require('./components/Convos.jsx');

var App = React.createClass({

  render: function() {
    return (
      <Convos />
    );
  }

})

React.render(<App />, document.getElementById('content'));
