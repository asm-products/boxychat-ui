 // app/controllers/map.js
import Ember from "ember";
/*global $*/

export default Ember.ObjectController.extend({

});

$(window).on('load resize',function(){
	var sidebarHeight = $(window).height()-$('#top-bar').height()-32;
	$('#side-bar').css('height',sidebarHeight+'px');
});