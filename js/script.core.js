;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			self.tableToggle();
			self.dropdown();

		},

		windowLoad: function(){

			var self = this;

			self.proggresBur();
			
		},


		/**
		**	table toggle
		**/

		tableToggle : function(){

		    $('.toggle_btn').on('click', function(){

		    	$(this).toggleClass('opened').closest('.toggle_btn_row').toggleClass("opened_box");
		    	$(this).closest('.toggle_btn_row').next('.toggle_row').children('td').children('.toggle_box').slideToggle();

		    });

		},



		/**
		**	Dropdown
		**/

		dropdown: function(){

			$('.dropdown_btn').on('click',function(){
				$(this).closest('.dropdown_box').toggleClass('opened');
			});

			$(document).on('click', function(e){

				if(!$(e.target).closest('.dropdown_box').length){
					$('.dropdown_box').removeClass('opened');
				}

			});

		},



		/**
		**	Proggres Bur
		**/

		proggresBur: function(){

			$('.proggres_bur').each(function(index, el){

				var percent = $(el).attr('data-val');

				$(el).find('.proggres_bur_val').text(percent+'%');
				$(el).find('.proggres_bur_inner').animate({'width':percent+'%'},500);
			});

		},

	}


	$(document).ready(function(){

		Core.DOMReady();

	});

	$(window).load(function(){

		Core.windowLoad();

	});

})(jQuery);