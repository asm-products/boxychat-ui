/** @jsx React.DOM */

'use strict';
var a = require("../../BoxyChatProxy.js");
var React = require("react/addons"),
    Reflux = require("reflux"),
    Router = require("react-router");

var ChatBox = require('../ChatBox/index.jsx');
//var MessagesList = require('./MessagesList.jsx');

var ChatManager = React.createClass({
  mixins: [Router.State],
  getInitialState: function () {
    var that = this;
    this.started = {};
    this.available = {};
    this.socket = this.props.socket;
    this.socket.on('chat:message', function(data) {
      that.refs['user-' + data.user].gotNewMessage(data.message);
    })
    return { chats: [] };
  },

  messageHandler: function (message) {
    this.addMessage({
      content: message,
      author : "myself"
    });

  },

  addMessage: function (message) {
    this.socket.emit('chat:chatMessage', message.content);
    if (message) {
      message.date = new Date();
      this.refs.messagesList.addMessage(message);
    }
  },
  resi: function() {

  },
  render: function () {
    var self = this;
    this.available = {};
    this.props.contacts.groups.forEach(function(group) {

      self.available['group-' + group.id] = group;
    });

    this.props.contacts.users.forEach(function(user) {
      self.available['user-' + user.id] = user;
    });
    var id;
    if(this.getParams().type == 'user') {
      id = 'user-' + this.getParams().id;
    } else if (this.getParams().type == 'group'){
      id = 'group-' + this.getParams().id;
    }

    if(!this.started[id]) {
      if(this.available[id])
        this.started[id] = this.getParams().id;
    }

    var messages = [];
    Object.keys(this.started).forEach(function(key) {
      var val = self.started[key];
      var hidden = !(id == key);
      messages.push(<ChatBox ref={key} hidden={hidden} socket={self.socket} data={val} />)
    });

    return (
      <div id="containerChat" className="containerChat">
        {messages}
      </div>
    );
  }
});

module.exports = ChatManager;
