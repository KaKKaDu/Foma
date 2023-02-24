
let foot = $('#footer');
$(window).scroll(function() {
	if ($(window).scrollTop == $(document).height() - $(window).height()) {
		$('#footer').addClass('nav-link.active');
	}
})
