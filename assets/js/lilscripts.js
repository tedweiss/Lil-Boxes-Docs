$(window).on('resize', function() {
	if ($(window).width() <= 720) {  
		$('.sub-link').on('click', function() {
			var menu = $(this).next('ul');
			var hght = menu.outerHeight();
			if (menu.hasClass('open')) {
				menu.removeClass('open');
				menu.removeAttr('style');
				$(this).parent().removeAttr('style');
			}
			else {
				menu.addClass('open');
				menu.css('display', 'block');
				$(this).parent().css('margin-bottom', hght);
			}
		});
	} else {
		if ($('.sub-link').next('ul').hasClass('open')) {
			$('.sub-link').next('ul').removeClass('open');
			$('.sub-link').next('ul').removeAttr('style');
			$('.sub-link').parent().removeAttr('style');
		}
	}
}).resize();