/**
 * Chat Message
 * @class Chat Message
 *
 **/

/** @jsx React.DOM */
'use strict';

var React = require("react/addons"),
    Reflux = require("reflux"),
    Router = require("react-router");

var ChatMessage = React.createClass({

  render: function () {
    var msg = this.props.message;
    var hours = msg.date.getHours();
    var minutes = msg.date.getMinutes();
    hours = (hours < 9) ? '0' + hours : hours;
    minutes = (minutes < 9) ? '0' + minutes : minutes;
    return (
      <div className="collection-item avatar">
        <i className="circle"></i>
        <span className="title">{msg.author}</span>
        <p>{msg.content}</p>
        <span href="#!" className="secondary-content">{ hours + ':' + minutes }</span>
      </div>
    );
  }
});

module.exports = ChatMessage;