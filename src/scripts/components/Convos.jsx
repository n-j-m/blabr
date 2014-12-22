'use strict';

var React = require('react');

var ConvoHeader = require('./ConvoHeader.jsx');
var ConvoList = require('./ConvoList.jsx');

var Convos = React.createClass({

  render: function() {

    return (
      <div className="row">
        <div className="col-xs-12 col-md-12 col-lg-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <ConvoHeader />
            </div>
            <div className="panel-body">
              <ConvoList />
            </div>
          </div>
        </div>
      </div>
    );

  }

});

module.exports = Convos;