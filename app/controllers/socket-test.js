import Ember from 'ember';

export default Ember.Controller.extend({
  name: '',

  age: 0,

  actions: {
    cherryPickName: function() {
      console.log('cherryPickName');
      this.socket.emit('cherryPickName');
    },
  },

  sockets: {
    cherryPickedName: ['name', 'age'],

    //// OR
    // cherryPickedName: function(name, age) {
    //   console.log('cherryPickedName', name, age);
    //   this.set('name', name);
    //   this.set('age', age);
    // },

    public: function (value) {
      console.log('public', value);
    },

    connect: function () {
      console.log('EmberSockets has connected...');
    },

    disconnect: function () {
      console.log('EmberSockets has disconnected...');
    }
  }
});
