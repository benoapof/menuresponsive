console.log('petit');

document.getElementById('affMenuSite').onclick = function () {
	console.log('t\'as cliqué sur affMenuSite');
	document.getElementById('affBdc').checked = false;
};
document.getElementById('affBdc').onclick = function () {
	console.log('t\'as cliqué sur affBdc');
	document.getElementById('affMenuSite').checked = false;
};