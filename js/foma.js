
let navmen = $("#navmen");

document.addEventListener('click', function(click) {
	if (click.target.id != 'buticon' && click.target.id != 'butspan' && click.target.id != 'buticon') {
		navmen.removeClass('show');
	}
})