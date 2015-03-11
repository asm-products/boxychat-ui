// vendor modules require
var React = require("react/addons"),
    Reflux = require("reflux"),
    Router = require("react-router");

// shorthands
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var { CSSTransitionGroup } = React.addons;

// style
//require("./index.scss");
var resi = function() {

}
var Group = React.createClass({
  render: function () {
    var group = this.props.group;
    return (
            <Link className="contact" to="chat" params={{id: group.id, type: 'group'}} onClick={resi}>
                <li>
                    <div className="circle-outer-team"><div className="circle-team"><p>D</p></div></div>
                    <span>{group.name}</span>
                    <p className="notifications">6 new messages - 2 new files</p>
                </li>
            </Link>
    );
  }
});

var User = React.createClass({
    render: function () {
        var user = this.props.user;
        return (
            <Link className="contact" to="chat" params={{id: user.id, type: 'user'}}>
                <li>
                    <div className="online"></div>
                    <div className="circle-outer-user"><div className="circle-user"><img src="images/Koala.jpg" /></div></div>
                    <span>{user.name}</span>
                </li>
            </Link>
        );
    }
});

var Contacts = React.createClass({
    getInitialState: function () {
        this.socket = this.props.socket;
        return { groups: [], users: [] };
    },
    render: function () {
        var item = this.props.item;
        var groups;
        groups = this.props.groups.map(function (g) {
          return (
            <Group group={g}></Group>
          );
        });

        users = this.props.users.map(function (g) {
          return (
            <User user={g}></User>
          );
        });
        return (
        <ul id="side-bar">
            <li className="sidebar-list team-list">
                <ul>
                    {groups}
                </ul> 
            </li>
            <li className="sidebar-list users-list">
                <ul>
                    {users}
                </ul>
            </li>
    </ul>
    );
  }
});

module.exports = Contacts;