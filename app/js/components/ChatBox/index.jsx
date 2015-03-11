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
    this.socket = this.props.socket;
    return { users: [] };
  },
  updateSize: function() {
    var sidebarHeight = $(window).height()-$('#top-bar').height();
    var messageboxWidth = $(window).width()-$('#side-bar').width();
    $('#side-bar').css('height',sidebarHeight+'px');
    $('#messagebox,.messagebar').css('width',messageboxWidth+'px');
    $('#containerchat').css('width',messageboxWidth+'px');
    $('.messagesBox').css('height',$(window).height() - 180);
  },
  componentDidMount: function () {
    this.updateSize();
    this.data = this.props.data;
  },
  messageHandler: function (message) {
    this.addMessage({
      content: message,
      author : "myself"
    });
    // this.chatProxy.broadcast(message);
  },
  gotNewMessage: function(message) {
    message = {content: message, author: 'other'};
    message.date = new Date();
    this.refs.messagesList.addMessage(message);
  },
  addMessage: function (message) {
    this.socket.emit('chat:chatMessage', this.data, message.content);
    if (message) {
      message.date = new Date();
      this.refs.messagesList.addMessage(message);
    }
  },
  componentDidUpdate: function () {
    this.updateSize();
    
  },
  render: function () {
    return (
      <div id="messagebox" className={this.props.hidden ? 'hidden' : ''}>
        <div className="groupbar">
          <h3>Marketing team<div className="icons-arrow"></div></h3>
          <div className="chat-actions">
            <ul>
              <li><div className="icons-Oval394Oval395"></div></li>
              <li><div className="icons-video"></div></li>
              <li><div className="icons-microphone"></div></li>
              <li className="invite-btn"><div className="icons-plus"></div><span>{this.props.data}</span></li>
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
