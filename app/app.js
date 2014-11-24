import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var Socket = EmberSockets.extend(_.extend(
  config.EmberSockets, {
    controllers: ['chat'],
    autoConnect: false
  }
));

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver,
  Socket: Socket
});

loadInitializers(App, config.modulePrefix);

export default App;
