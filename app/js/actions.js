var Reflux = require('reflux');

var Actions = Reflux.createActions({
  "addItem": {},
  "fetchItem": { asyncResult: true },
  "deleteItem": {}
});


// Actions.addItem.preEmit = function() { 
//   console.log(arguments);
// };


module.exports = Actions;