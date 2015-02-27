// vendor modules require
var React = require("react/addons"),
    Reflux = require("reflux"),
    Router = require("react-router");

// shorthands
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var { CSSTransitionGroup } = React.addons;

// style
//require("./index.scss");

var Group = React.createClass({
  render: function () {
    var item = this.props.item;
    return (
			<li>
				<div className="circle-outer-team"><div className="circle-team"><p>D</p></div></div>
				<span>Developers Team</span>
				<p className="notifications">6 new messages - 2 new files</p>
			</li>
    );
  }
});

var Contacts = React.createClass({
  render: function () {
    var item = this.props.item;
    return (
    <ul id="side-bar">
		<li className="sidebar-list team-list">
			<ul>
				<li className="active">
					<div className="circle-outer-team"><div className="circle-team"><p>M</p></div></div>
					<span>Marketing Team</span>
				</li>
				<li>
					<div className="circle-outer-team"><div className="circle-team"><p>D</p></div></div>
					<span>Developers Team</span>
					<p className="notifications">6 new messages - 2 new files</p>
				</li>
				<li>
					<div className="circle-outer-team"><div className="circle-team"><p>S</p></div></div>
					<span>Seo Team</span>
				</li>
				<li>
					<div className="circle-outer-team"><div className="circle-team"><p>G</p></div></div>
					<span>General</span>
				</li>
				<li>
					<div className="icons-Plusiconlarge"></div>
				</li>
			</ul> 
		</li>
		<li className="sidebar-list users-list">
			<ul>
				<li>
					<div className="online"></div>
					<div className="circle-outer-user"><div className="circle-user"><img src="images/Koala.jpg" /></div></div>
					<span>John Snow</span>
				</li>
				<li>
					<div className="online"></div>
					<div className="circle-outer-user"><div className="circle-user"><img src="images/Koala.jpg" /></div></div>
					<span>Hanry Potter</span>
					<p className="notifications">6 new messages - 2 new files</p>
				</li>
				<li>
					<div className="away"></div>
					<div className="circle-outer-user"><div className="circle-user"><img src="images/Koala.jpg" /></div></div>
					<span>Spider Man</span>
				</li>
				<li>
					<div className="circle-outer-user"><div className="circle-user"><img src="images/Koala.jpg" /></div></div>
					<span>Tony Stark</span>
				</li>
			</ul>
		</li>
</ul>
    );
  }
});

module.exports = Contacts;