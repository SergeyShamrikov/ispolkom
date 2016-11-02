;(function($){

	"use strict";

	$(document).ready(function(){

		/* ------------------------------------------------
				FormStyler
		------------------------------------------------ */

			if($('select').length){

				$('select').styler()				
			
			}

        /* ------------------------------------------------
				End of FormStyler
		------------------------------------------------ */

		/* ------------------------------------------------
				FormStyler
		------------------------------------------------ */

			if($('#parentHorizontalTab').length){

				$('#parentHorizontalTab').easyResponsiveTabs({
		            type: 'default', //Types: default, vertical, accordion
		            width: 'auto', //auto or any width like 600px
		            fit: true, // 100% fit in a container
		            tabidentify: 'hor_1', // The tab groups identifier
		            activate: function(event) { // Callback function if tab is switched
		                var $tab = $(this);
		                var $info = $('#nested-tabInfo');
		                var $name = $('span', $info);
		                $name.text($tab.text());
		                $info.show();
		            }
		        });			
			
			}

        /* ------------------------------------------------
				End of FormStyler
		------------------------------------------------ */

	});

	$(window).load(function(){

		/* ------------------------------------------------
				arcticmodal
		------------------------------------------------ */

			$('[data-modal]').on('click', function(){

				var modal = $(this).attr('data-modal');

				$(modal).arcticmodal();

			});

        /* ------------------------------------------------
				End of arcticmodal
		------------------------------------------------ */

	});

})(jQuery);