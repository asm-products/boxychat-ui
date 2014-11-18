import Ember from 'ember';

export default Ember.Controller.extend({
  name: '',

  newMessage: '',

  actions: {
    chatMessage: function() {
      console.log('sending message..');
      this.socket.emit('chat:chatMessage', this.get('name'), this.get('newMessage'));
      this.set('newMessage', '');
    },
  },

  sockets: {

    connect: function () {
      console.log('EmberSockets has connected...');
    },

    disconnect: function () {
      console.log('EmberSockets has disconnected...');
    }
  }
});
