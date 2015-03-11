// vendor modules require
var React = require("react/addons"),
    Router = require("react-router");

// app modules require

// shorthands
var { Route, DefaultRoute, RouteHandler, Link } = Router;


// polyfill
if(!Object.assign) {
  Object.assign = React.__spread;
}
var Default = React.createClass({
  render: function () {
    return <h2>Not found</h2>;
  }
});


var routes = (
  <Route name="app" path="/" handler={require("./Application/index.jsx")}>
  	<Route name="chat" path="/chat/:type/:id" handler={require("./components/ChatManager/index.jsx")} />
  	<DefaultRoute handler={Default}/>
  </Route>

);

document.addEventListener("DOMContentLoaded", function(event) {
  // Add Router.HistoryLocation as a second argument to enable HTML5 history
  Router.run(routes, Router.HistoryLocation, function (Handler, state) {
    React.render(<Handler params={state.params} query={state.query}/>, document.getElementById('superContainer'));
  });
});


// export routes
module.exports = routes;