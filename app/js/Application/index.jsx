// vendor modules require
var React = require("react/addons"),
    Reflux = require("reflux"),
    Router = require("react-router");

var Header = require("../components/Header/index.jsx");
var Contacts = require("../components/Contacts/index.jsx");
var ChatBox = require("../components/ChatBox/index.jsx")
// shorthands
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var { CSSTransitionGroup } = React.addons;

var Application = React.createClass({
  getInitialState: function(){
    if(!localStorage.getItem('accessToken'))
      return window.location = '/login.html'

    this.contacts = { groups: [], users: [] };
    this.socket = io.connect('http://localhost:3000', {
      query: {token: localStorage.getItem('accessToken')}
    });

    this.socket.emit('user:self', this.saveSelf);
    this.socket.emit('user:contacts', this.gotContacts)
    
    return {users: [], messages:[], text: ''};
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
  },
  componentDidUpdate: function () {
    this.updateSize();
  },
  saveSelf: function(value) {
      console.log(value)
      this.user = value;
      //this.forceUpdate();
  },
  gotContacts: function(data) {
    console.log('data')
    //this.state.groups = data.groups;
    this.contacts = data;
    this.forceUpdate();
    //console.log(data)
  },
  // Reflux connect will automatically set/update this.state.list
  
  render: function() {
    if (!this.user) {
      return null;
    }
    return (
      <div>
        <Header/>
        <section id="wrapper">
          <Contacts socket={this.socket} groups={this.contacts.groups} users={this.contacts.users} />
          <RouteHandler socket={this.socket} contacts={this.contacts}/>
        </section>
        
      </div>
    );
  },
});

module.exports = Application;