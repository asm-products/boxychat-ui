import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('index',{path:"/"},function(){
		this.resource('chatroom' ,{path:"/"});
		//this.resource('messagebox' ,{path:"/"});
	});
	
	this.route('chat');
	//this.route('map',{path:"/"});
});

export default Router;
