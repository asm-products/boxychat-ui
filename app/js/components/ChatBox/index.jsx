/** @jsx React.DOM */

'use strict';
var a = require("../../BoxyChatProxy.js");
var React = require("react/addons"),
    Reflux = require("reflux"),
    Router = require("react-router");

var MessageInput = require('./MessageInput.jsx')
var MessagesList = require('./MessagesList.jsx')
var ChatBox = React.createClass({
  getInitialState: function () {
    return { users: [] };
  },

  componentDidMount: function () {
    this.socket = this.props.socket;
    // this.chatProxy = this.props.chatProxy;
    // this.chatProxy.connect(this.props.username);
    // this.chatProxy.onMessage(this.addMessage.bind(this));
    // this.chatProxy.onUserConnected(this.userConnected.bind(this));
    // this.chatProxy.onUserDisconnected(this.userDisconnected.bind(this));
  },

  // userConnected: function (user) {
  //   var users = this.state.users;
  //   users.push(user);
  //   this.setState({
  //     users: users
  //   });
  // },

  // userDisconnected: function (user) {
  //   var users = this.state.users;
  //   users.splice(users.indexOf(user), 1);
  //   this.setState({
  //     users: users
  //   });
  // },

  messageHandler: function (message) {
    this.addMessage({
      content: message,
      author : "myself"
    });
    // this.chatProxy.broadcast(message);
  },

  addMessage: function (message) {
    this.socket.emit('chat:chatMessage', message.content);
    if (message) {
      message.date = new Date();
      this.refs.messagesList.addMessage(message);
    }
  },

  render: function () {
    return (
      <div id="messagebox">
        <div className="groupbar">
          <h3>Marketing team<div className="icons-arrow"></div></h3>
          <div className="chat-actions">
            <ul>
              <li><div className="icons-Oval394Oval395"></div></li>
              <li><div className="icons-video"></div></li>
              <li><div className="icons-microphone"></div></li>
              <li className="invite-btn"><div className="icons-plus"></div><span>Invite</span></li>
            </ul>
          </div>
        </div>
        <div>
          <MessagesList ref="messagesList" />
        </div>
        <MessageInput
          ref="messageInput"
          messageHandler={this.messageHandler} />
      </div>
    );
  }
});

module.exports = ChatBox;
