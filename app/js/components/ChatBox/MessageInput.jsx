/** @jsx React.DOM */

'use strict';
var a = require("../../BoxyChatProxy.js");
var React = require("react/addons"),
    Reflux = require("reflux"),
    Router = require("react-router");

var MessageInput = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  keyHandler: function (event) {
    var msg = this.state.message.trim();
    if (event.keyCode === 13 && msg.length) {
      this.props.messageHandler(msg);
      this.setState({ message: '' });
    }
  },

  getInitialState: function () {
    return { message: '' };
  },

  render: function () {
    return (
      <div className="messagebar">
          <input type="text" placeholder="Type message..." valueLink={this.linkState('message')}
        onKeyUp={this.keyHandler}/>
          <div>
            <div className="icons-Group"></div>
            <div className="icons-smile"></div>
          </div>
        </div>
    );
  }
});

module.exports = MessageInput;