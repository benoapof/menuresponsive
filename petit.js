console.log('petit');

document.getElementById('affMenuSite').onclick = function () {
	console.log('t\'as cliqué sur affMenuSite');
	document.getElementById('affBDC').checked = false;
};
document.getElementById('affBDC').onclick = function () {
	console.log('t\'as cliqué sur affBDC');
	document.getElementById('affMenuSite').checked = false;
};