'use strict';

var React = require('react');

var ConvoListItem = require('./ConvoListItem.jsx');

var ConvoList = React.createClass({

  render: function() {

    var convo = {
      lastText: 'Some text from the convo...',
      to: 'Joe Shmo'
    };

    return (
      <div className="col-xs-12">
        <ul className="list-group">
          <ConvoListItem convo={convo} />
        </ul>
      </div>
    );

  }

});

module.exports = ConvoList;