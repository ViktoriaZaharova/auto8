// mobile menu
$('.btn-burger').on('click', function () {
	$(this).toggleClass('click');
	$('.overlay-menu').fadeToggle();
	$('.mobile-menu').fadeToggle();
});

$('.overlay-menu').on('click', function () {
	$('.mobile-menu').fadeOut();
	$('.overlay-menu').fadeOut();
	$('.btn-burger').removeClass('click');
});
// mobile menu end

// sliders
$('.home-slider').slick({
	slidesToShow: 1,
	arrows: false,
	fade: true,
});

// slick active mobile
$(window).on('load resize', function () {
	if ($(window).width() < 576) {
		$('.category-auto-slider:not(.slick-initialized)').slick({
			dots: true,
			infinite: true,
			slidesToShow: 1,
			arrows: false
		});
	} else {
		$(".category-auto-slider.slick-initialized").slick("unslick");
	}
});
// slick active mobile

// sliders end

$('.dropdown-menu .dropdown-menu-list .dropdown').on('click', function (e) {
	e.stopPropagation();
	e.preventDefault();
	$(this).addClass('show').find('.dropdown-menu').addClass('show');
});

//плавный скролл
$(document).ready(function () {
	$('.go_to').click(function (e) {
		e.preventDefault();
		var scroll_el = $(this).attr('href');
		if ($(scroll_el).length !== 0) {
			$('html, body').animate({
				scrollTop: $(scroll_el).offset().top
			}, 500);
		}
		return false;
	});
});
//плавный скролл end

// input file
$.fileup({
	url: window.location.pathname + window.location.search,
	inputID: 'upload-demo',
	queueID: 'upload-demo-queue',
	dropzoneID: '',
	files: [],
	fieldName: 'filedata',
	extraFields: {},
	// lang: 'en',
	sizeLimit: 0,
	filesLimit: 0,
	method: 'post',
	timeout: null,
	autostart: false,
});
