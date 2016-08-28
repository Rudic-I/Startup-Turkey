var burger = $(".fa-bars");

function showHiddenMenu(){
	var showMenu = $(".menu2");
	showMenu.addClass("hiddenMenu");
	showMenu.removeClass("menu2");
}
burger.click(showHiddenMenu);


var xBtn = $("#cross");

function hideMenu() {
	var menu = $(".hiddenMenu");
	menu.addClass("menu2");
	menu.removeClass("hiddenMenu");
}
xBtn.click(hideMenu);

// var modal = document.getElementById("modal");
// var btn = document.getElementById("burger");
// var close = document.getElementById("cross");

// btn.onclick = function() {
// 	modal.style.display = "block";
// }

// close.onclick = function() {
// 	modal.style.display = "none";
// }



var windowHeight = screen.height;

window.onscroll = function() {
	burgerSticky()
 };

function burgerSticky() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("burger").className = "fa fa-bars sticky";
    }
    else {
    	document.getElementById("burger").className = "fa fa-bars burgerSticky";
    }
}

var music = document.getElementById("bgvid");
var volume = $("#volumeOff");
var mute = $("#volumeOn");

function musicOn() {
	var volumeOn = $("#volumeOn");
	volumeOn.addClass("audio");
	music.muted = false;
}

volume.click(musicOn);


function musicOff() {
	mute.removeClass("audio");
	music.muted = true;
}

mute.click(musicOff);



var modal = document.getElementById("AloTech");
var aloTech = document.getElementById("alotechClick");

aloTech.onclick = function() {
	modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}