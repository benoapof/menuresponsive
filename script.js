// ici les scripts qui serviront pour le mobile et pour le mobile et le desktop
// je grossis le trait, le breakpoint est à 1024, c'est un test

// si on retaille la fenêtre
var doit;
window.onresize = function() {
	clearTimeout(doit);
	doit = setTimeout(affLogoBdc, 100);
};

//comportement du logo au scroll
function affLogoBdc () {

	window.onscroll = function() {
		var elem = document.getElementsByTagName('h1')[0];
		if (elem.getBoundingClientRect().top < 40-elem.offsetHeight)
			document.getElementsByClassName('logoBdc')[0].style.display = "block";
		else
			document.getElementsByClassName('logoBdc')[0].style.display = "none";
	};

}

affLogoBdc();