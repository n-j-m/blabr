'use strict';

var React = require('react');

var ConvoListItem = React.createClass({

  render: function() {

    var convo = this.props.convo;

    return (
      <li className="list-group-item">
        <div className="media">
          <a className="media-left media-top" href="#">
            <img src="http://placekitten.com/g/25/25" />
          </a>
          <div className="media-body">
            <h4 className="media-heading">{convo.to}</h4>
            {convo.lastText}
          </div>
        </div>
      </li>
    );

  }

});

module.exports = ConvoListItem;