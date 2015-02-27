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

// style
//require("./index.scss");


var Application = React.createClass({
  getInitialState: function(){
    // this.socket = io.connect('http://localhost:3001', {
    //       query: {token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU0ZWUxNzQyYjkwZTFlZDUyODBkYzY3NiIsImlhdCI6MTQyNDg4OTY4N30.uw6F9ICICGBFbJ2-kpELlGQOH1ZLJtv21yre36wjqlw"}
    //     });
    // socket.on('init', this.initialize);
    // socket.on('send:message', this.messageRecieve);
    // socket.on('user:join', this.userJoined);
    // socket.on('user:left', this.userLeft);
    // socket.on('change:name', this.userChangedName);

    return {users: [], messages:[], text: ''};
  },
  // Reflux connect will automatically set/update this.state.list
  
  render: function() {
    return (
      <div>
        <Header/>
        <section id="wrapper">
        <Contacts/>
        <ChatBox socket={this.socket} />
        </section>
        <RouteHandler {...this.props}/>
      </div>
    );
  },
});

module.exports = Application;