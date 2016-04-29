$(window).on('resize', function() {
    $('.hamburger').click(function(){
        $(this).toggleClass('open');
    });
	if ($(window).width() <= 720) {  
		$('.sub-link').on('click', function() {
			var menu = $(this).next('ul');
			var arrow = $(this).children('h3');
			var hght = menu.outerHeight();
			if (menu.hasClass('open')) {
				menu.removeClass('open');
				menu.removeAttr('style');
				arrow.addClass('down-arrow');
				arrow.removeClass('up-arrow');
				$(this).parent().removeAttr('style');
			}
			else {
				menu.addClass('open');
				menu.css('display', 'block');
				arrow.addClass('up-arrow');
				arrow.removeClass('down-arrow');
				$(this).parent().css('margin-bottom', hght);
			}
		});
		$('.sub-sub-link').on('click', function() {
			var menu = $(this).next('ul');
			var arrow = $(this).children('h3');
			var hght = menu.outerHeight();
			if (menu.hasClass('open')) {
				menu.removeClass('open');
				menu.removeAttr('style');
				arrow.addClass('arrow-down');
				arrow.removeClass('arrow-up');
				$(this).parent().removeAttr('style');
			}
			else {
				menu.addClass('open');
				menu.css('display', 'block');
				$(this).parent().css('margin-bottom', hght);
				arrow.addClass('arrow-up');
				arrow.removeClass('arrow-down');
			}
		});
	} else {
		if ($('.sub-link, .sub-sub-link').next('ul').hasClass('open')) {
			$('.sub-link, .sub-sub-link').next('ul').removeClass('open');
			$('.sub-link, .sub-sub-link').next('ul').removeAttr('style');
			$('.sub-link, .sub-sub-link').parent().removeAttr('style');
		}
	}
}).resize();