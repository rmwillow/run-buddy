(function($){

	// enguage page tabs
	$('ul.trackDataTabs li').click(function() {
		var tab_id = $(this).attr('data-tab');
		$('ul.trackDataTabs li').removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
	$('ul.trackDataTabsB li').click(function() {
		var tab_id_b = $(this).attr('data-tab');
		$('ul.trackDataTabsB li').removeClass('current');
		$('.tab-content-b').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id_b).addClass('current');
	});

	// divi collapsible mobile menu
	function setup_collapsible_submenus() {
		var $menu = $('#mobile_menu'),
			top_level_link = '#mobile_menu .menu-item-has-children > a';

		$menu.find('a').each(function() {
			$(this).off('click');

			if ( $(this).is(top_level_link) ) {
				$(this).attr('href', '#');
			}

			if ( ! $(this).siblings('.sub-menu').length ) {
				$(this).on('click', function(event) {
					$(this).parents('.mobile_nav').trigger('click');
				});
			} else {
				$(this).on('click', function(event) {
					event.preventDefault();
					$(this).parent().toggleClass('visible');
				});
			}
		});
	}
	$(window).load(function() {
		setTimeout(function() {
			setup_collapsible_submenus();
		}, 700);
	});

})(jQuery);