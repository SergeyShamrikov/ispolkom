;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			self.tableToggle();

		},

		windowLoad: function(){

			var self = this;
			
		},

		/**
		**	table toggle
		**/

		tableToggle : function(){

		    $('.toggle_btn').on('click', function(){

		    	$(this).toggleClass('opened').closest('.toggle_btn_row').toggleClass("opened_box");
		    	$(this).closest('.toggle_btn_row').next('.toggle_row').children('td').children('.toggle_box').slideToggle();

		    });

		}

	}


	$(document).ready(function(){

		Core.DOMReady();

	});

	$(window).load(function(){

		Core.windowLoad();

	});

})(jQuery);