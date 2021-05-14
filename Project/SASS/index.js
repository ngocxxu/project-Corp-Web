$(document).ready(function () {
	$('.single-item').slick({
		dots: true,
		infinite: false,
		speed: 300,
	});
});

// Create fullscreen button search

// Scroll and header follow.

function changeCSSHeader() {
	var navElementCSS = document.querySelector('header');
	// var navToggle = document.getElementsByClassName('headerToggle')
	var changeColorNav = document.getElementsByClassName('nav1');
	var u;

	if (this.scrollY > 100) {
		for (u = 0; u < changeColorNav.length; u++) {
			changeColorNav[u].classList.toggle('changeColorNavbar');
		}

		navElementCSS.style.cssText =
			'background-color:#3f3a64 ; box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; ';
		// for(u=0;  u<navElementA.length;u++){
		//   navElementA.style.backgroundColor= "#797693";
		// }
		// navToggle.classList.toggle("navBarColor");
	} else {
		navElementCSS.style.cssText = 'transparent ; box-shadow:none ';
	}
}
window.addEventListener('scroll', changeCSSHeader, false);
// Scroll and header follow.

var navToggle = document.getElementsByClassName('headerToggle');
navToggle.onscroll = function () {
	functionScroll;
};

function functionScroll() {
	var textBla = document.getElementsByClassName('textBlack1');
	textBla.classList.toggle('navBarColor');
}

// Dark mode and trigger
function myFunction() {
	document.body.classList.toggle('dark-mode');

	var changeToWhite = document.getElementsByClassName('whiteText'); //thay đổi các chữ thành màu trắng
	var i;
	for (i = 0; i < changeToWhite.length; i++) {
		changeToWhite[i].classList.toggle('dark-mode-about');
	}

	var changeToBg = document.getElementsByClassName('bgDark'); //thay đổi 1 số BG thành màu tối
	var j;
	for (j = 0; j < changeToBg.length; j++) {
		changeToBg[j].classList.toggle('dark-mode-bg');
	}
}

function myChange(x) {
	x.classList.toggle('fa-sun');
}

//Zoom button search
var zoomButton=document.getElementById('zoomButton');
var zoomButtonBig=document.getElementById('zoomButtonBig');
var closeSearch=document.getElementById('closeSearch');

zoomButton.onclick=function zoomButtonBigger(){
	zoomButtonBig.style.display="block";
}

closeSearch.onclick=function closeSearching() {
	zoomButtonBig.style.display="none";
}



//hover change color
document.getElementsByClassName('hoverChange').onmouseover = function () {
	var hoverChange = document.getElementsByClassName('hoverChange');
	var n;
	for (n = 0; n < hoverChange.length; n++) {
		hoverChange[n].style.color = "green";
	}
};

// Create Modal
//img1
var img = document.getElementById('myImg');
var modal = document.getElementById('myModal');
var imgModal = document.getElementById('img01');
var captionModal = document.getElementById('caption');

img.onclick = function () {
	modal.style.display = 'block';
	imgModal.src = '/c1.jpg';
	imgModal.style.width = '50%';
	imgModal.style.transform = 'scale(1)';
	captionModal.innerHTML = 'Project 1';
	return modal;
};

var closeModal = document.getElementById('close1');
closeModal.onclick = function () {
	modal.style.display = 'none';
};

// Img2
var img2 = document.getElementById('myImg2');
var modal2 = document.getElementById('myModal2');
var imgModal2 = document.getElementById('img02');
var captionModal2 = document.getElementById('caption2');

img2.onclick = function () {
	modal2.style.display = 'block';
	imgModal2.src = '/c2.jpg';
	imgModal2.style.width = '50%';
	imgModal2.style.transform = 'scale(1)';
	captionModal2.innerHTML = 'Project 2';
};

var closeModal2 = document.getElementById('close2');
closeModal2.onclick = function () {
	modal2.style.display = 'none';
};

// Img3
var img3 = document.getElementById('myImg3');
var modal3 = document.getElementById('myModal3');
var imgModal3 = document.getElementById('img03');
var captionModal3 = document.getElementById('caption3');

img3.onclick = function () {
	modal3.style.display = 'block';
	imgModal3.src = '/c3.jpg';
	imgModal3.style.width = '50%';
	imgModal3.style.transform = 'scale(1)';
	captionModal3.innerHTML = 'Project 3';
};

var closeModal3 = document.getElementById('close3');
closeModal3.onclick = function () {
	modal3.style.display = 'none';
};

// Img4
var img4 = document.getElementById('myImg4');
var modal4 = document.getElementById('myModal4');
var imgModal4 = document.getElementById('img04');
var captionModal4 = document.getElementById('caption4');

img4.onclick = function () {
	modal4.style.display = 'block';
	imgModal4.src = '/c4.jpg';
	imgModal4.style.width = '50%';
	imgModal4.style.transform = 'scale(1)';
	captionModal4.innerHTML = 'Project 4';
};

var closeModal4 = document.getElementById('close4');
closeModal4.onclick = function () {
	modal4.style.display = 'none';
};

// Img5
var img5 = document.getElementById('myImg5');
var modal5 = document.getElementById('myModal5');
var imgModal5 = document.getElementById('img05');
var captionModal5 = document.getElementById('caption5');

img5.onclick = function () {
	modal5.style.display = 'block';
	imgModal5.src = '/c5.jpg';
	imgModal5.style.width = '50%';
	imgModal5.style.transform = 'scale(1)';
	captionModal5.innerHTML = 'Project 5';
};

var closeModal5 = document.getElementById('close5');
closeModal5.onclick = function () {
	modal5.style.display = 'none';
};

// Img6
var img6 = document.getElementById('myImg6');
var modal6 = document.getElementById('myModal6');
var imgModal6 = document.getElementById('img06');
var captionModal6 = document.getElementById('caption6');

img6.onclick = function () {
	modal6.style.display = 'block';
	imgModal6.src = '/c6.jpg';
	imgModal6.style.width = '50%';
	imgModal6.style.transform = 'scale(1)';
	captionModal6.innerHTML = 'Project 6';
};

var closeModal6 = document.getElementById('close6');
closeModal6.onclick = function () {
	modal6.style.display = 'none';
};
