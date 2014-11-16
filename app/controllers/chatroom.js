 // app/controllers/map.js
import Ember from "ember";
/*global $*/

export default Ember.ObjectController.extend({

});

$(document).ready(function(){
	var sidebarHeight = $(window).height()-$('#top-bar').height()-32;
	$('#side-bar').css('height',sidebarHeight+'px');
});