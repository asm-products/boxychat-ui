/** @jsx React.DOM */

'use strict';

var React = require("react/addons"),
    Reflux = require("reflux"),
    Router = require("react-router");

var ChatMessage = require("./ChatMessage.jsx");

var MessagesList = React.createClass({

  getInitialState: function () {
    return { messages: [] };
  },

  addMessage: function (message) {
    var messages = this.state.messages;
    var container = this.refs.messageContainer.getDOMNode();
    messages.push(message);
    this.setState({ messages: messages });
    // Smart scrolling - when the user is
    // scrolled a little we don't want to return him back
    if (container.scrollHeight -
        (container.scrollTop + container.offsetHeight) >= 50) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  },

  componentDidUpdate: function () {
    if (this.scrolled) {
      return;
    }
    
    var container = this.refs.messageContainer.getDOMNode();
    container.scrollTop = container.scrollHeight;
  },

  render: function () {

    var messages;
    messages = this.state.messages.map(function (m) {
      return (
        <ChatMessage message={m}></ChatMessage>
      );
    });
    if (!messages.length) {
      messages = <div className="chat-no-messages">No messages</div>;
    }
    return (
      <div ref="messageContainer" className="messagesBox collection">
        {messages}
      </div>
    );
  }
});

module.exports = MessagesList;