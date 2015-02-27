// vendor modules require
var React = require("react/addons"),
    Reflux = require("reflux"),
    Router = require("react-router");

// shorthands
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var { CSSTransitionGroup } = React.addons;

// style
//require("./index.scss");


var Header = React.createClass({
  render: function () {
    var item = this.props.item;
    return (
     <header>
      <div id="top-bar">
        <div className="left-col">
          <div className="icons-back"></div>
          <h2>Uploof & Advicat</h2>
          <p className="selected-team">Marketing Team</p>
        </div>
        <div className="right-col">
          <div className="user-info">
            <div className="notifications">
              <div className="icons-Bell"></div>
            </div>
            <div className="circle-white">
              <div className="circle-avatar">
                <img src="images/Koala.jpg" />
              </div>
            </div>
            <p>Username</p>
          </div>
        </div>
      </div>
    </header>
    );
  }
});

module.exports = Header;