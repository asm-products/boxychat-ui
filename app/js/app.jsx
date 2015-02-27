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


var routes = (
  <Route name="app" path="/" handler={require("./Application/index.jsx")}>
    
  </Route>
);


document.addEventListener("DOMContentLoaded", function(event) {
  // Add Router.HistoryLocation as a second argument to enable HTML5 history
  Router.run(routes, Router.HistoryLocation, function (Handler, state) {
    React.render(<Handler params={state.params} query={state.query}/>, document.body);
  });
});


// export routes
module.exports = routes;