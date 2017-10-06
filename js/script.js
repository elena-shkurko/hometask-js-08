;(function($){
	"use strict";

	$(document).ready(function(){

		$('.ba-game__list').on('click', 'a', function(evt){
			evt.preventDefault();

			// var $tab_id = $(this).attr("href");
			// $('.ba-tabs__item').removeClass('ba-tabs__item--active');

			// $($tab_id).addClass('ba-tabs__item--active');

			var $tab_id = $(this).data('tab');
			$('.ba-game__item').removeClass('ba-game__item--active');

			// $('.ba-tabs__item[data-tab="' + $tab_id + '"]').addClass('ba-tabs__item--active');

			$('#' + $tab_id).addClass('ba-game__item--active');
		});

	});

})(jQuery);