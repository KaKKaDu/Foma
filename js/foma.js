

window.currentopt = 'main';

$('#primarynavbar').on('activate.bs.scrollspy', function () {
	var hash = $(this).find(".nav-item .nav-link.active");
	hash.parentElement.classList.add('.nav-item-click');
	console.log(hash);
})

document.addEventListener('click', function (point) {
	if (point.target.classList.contains('nav-item')) {
		console.log(window.currentopt);
		console.log(document.getElementById(window.currentopt));
		document.getElementById(window.currentopt).classList.remove('nav-item-click');
		let tar = point.target;
		tar.classList.add('nav-item-click');
		window.currentopt = point.target.id;
		console.log(window.currentopt);
	} else if (point.target.classList.contains('nav-link')) {
		console.log(window.currentopt);
		console.log(document.getElementById(window.currentopt));
		document.getElementById(window.currentopt).classList.remove('nav-item-click');
		let tar = point.target.parentElement;
		tar.classList.add('nav-item-click');
		window.currentopt = point.target.parentElement.id;
		console.log(window.currentopt);
	}
})