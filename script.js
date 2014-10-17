// ici les scripts qui serviront pour le mobile et pour le mobile et le desktop
// je grossis le trait, le breakpoint est à 1024, c'est un test

// si on retaille la fenêtre
/*var doit;
window.onresize = function() {
	clearTimeout(doit);
	doit = setTimeout(affLogoBdc, 100);
};
*/

// charge un js à la demande
function callScript(url) {
	var id = 'js' + url.split('.')[0];
	if ( document.getElementById(id) === null ) {
		var s = document.createElement('script');
		s.id = id;
		s.type = 'text/javascript';
		s.async = 'async';
		s.src = url;
		document.body.appendChild(s);
	}
}

function tailleUtile() {
	// scripts si la fenêtre est grande
	if (window.matchMedia("(min-width : 1024px)").matches) {
		callScript('grand.js');
//		taille = 'grand';
	}
	// scripts si la fenêtre est petite
	if (window.matchMedia("(max-width : 1023px)").matches) {
		callScript('petit.js');
//		taille = 'petit';
	}
//console.log	(window.innerWidth+'px / '+taille);
}

window.onresize = tailleUtile();

tailleUtile();


/*
//comportement du logo au scroll
function affLogoBdc () {

	window.onscroll = function() {
console.log('gni scroll');
		var elem = document.getElementsByTagName('h1')[0];
		if (elem.getBoundingClientRect().top < 40-elem.offsetHeight) {
			document.getElementsByClassName('logoBdc')[0].style.display = "block";
console.log('g\'affiche');
		}
		else {
			document.getElementsByClassName('logoBdc')[0].style.display = "none";
console.log('g\'affiche p\'us');
		}
	};

}
*/

/*affLogoBdc();*/