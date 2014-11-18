 // app/controllers/map.js
import Ember from "ember";
/*global $*/

export default Ember.ObjectController.extend({

});

$(window,document).on('load resize ready',function(){
	var sidebarHeight = $(window).height()-$('#top-bar').height();
	var messageboxWidth = $(window).width()-$('#side-bar').outerWidth();
	$('#side-bar').css('height',sidebarHeight+'px');
	$('#messagebox,.messagebar').css('width',messageboxWidth+'px');
});