import Ember from 'ember';

export default Ember.Controller.extend({
  username:'',
  password: '',
  toName: '',
  isLoggedIn: false,
  newMessage: '',
  messages: Ember.ArrayProxy.create({ content: Ember.A([]) }),
  users: Ember.ArrayProxy.create({ content: Ember.A([]) }),

  actions: {
    login: function () {
      var that = this;
      $.post('http://' + this.socket.host + ':' + this.socket.port + '/login', {
        email: this.get('email'),
        password: this.get('password')
      }, function (data) {
        that.socket.connect({
          query: {token: data['access_token']}
        });
      });

    },
    chatMessage: function() {
      console.log('sending message..');
      if (!this.get('toName').length) {
        this.socket.emit('chat:chatMessage', this.get('newMessage'));
      } else {
        this.socket.emit('chat:privateMessage', this.get('toName'), this.get('newMessage'));
      }
      this.set('toName', '');
      this.set('newMessage', '');

    },
  },

  sockets: {

    connect: function () {
      console.log('EmberSockets has connected...');
      this.set('isLoggedIn', true);
    },

    disconnect: function () {
      console.log('EmberSockets has disconnected...');
      this.set('isLoggedIn', false);
    },

    'chat:message': function (message) {
      this.get('messages').pushObject(message);
    },

    'chat:userList': function (users) {
      this.get('users').clear();
      this.get('users').pushObjects(users);
    },

    'chat:userJoined': function (user) {
      this.get('users').pushObject(user);
    },

    'chat:userLeft': function (user) {
      this.get('users').removeObject(user);
    }
  }
});
