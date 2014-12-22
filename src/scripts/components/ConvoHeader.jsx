'use strict';

var React = require('react');

var ConvoHeader = React.createClass({

  render: function() {

    return (
      <div className="row">
        <div className="col-lg-11 col-md-11 col-xs-11">
          <input className="form-control" placeholder="search" />
        </div>
        <div className="col-lg-1 col-md-1 col-xs-1">
          <button className="btn btn-default btn-xs">
            <img className="img-circle" src="http://placekitten.com/g/32/32" />
          </button>
        </div>
      </div>
    );

  }

});

module.exports = ConvoHeader;