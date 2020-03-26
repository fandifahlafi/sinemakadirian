$('.page-scroll').on('click', function(e){
	var tujuan = $(this).attr('href');
	var elemenTujuan = $(tujuan);

	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top
	}, 1000);

e.preventDefault();
});




$(window).scroll(function() {
	let wScroll = $(this).scrollTop();
	// parallax
	$('.parallax .sinema-kadirian').css({
		'transform' : 'translate(0px, '+ wScroll/2.5 +'%)'
	});
	$('.parallax h1').css({
		'transform' : 'translate(0px, '+ wScroll/.7 +'%)'
	});
	$('.parallax p').css({
		'transform' : 'translate(0px, '+ wScroll/.4 +'%)'
	});
	$('.parallax .layer-2').css({
		'transform' : 'translate(0px, '+ wScroll/14 +'%)'
	});
	$('.parallax .layer-4').css({
		'transform' : 'translate(0px, '+ wScroll/18 +'%)'
	});
	$('.parallax .layer-3').css({
		'transform' : 'translate(0px, '+ wScroll/13 +'%)'
	});

	// agenda
	if (wScroll > $('.agenda').offset().top -150) {
		$('.agenda .poster-agenda').each(function(i) {
			setTimeout(function() {
				$('.agenda .poster-agenda').eq(i).addClass('load');
			}, 300 * i);
		});
	};

	// About
	if (wScroll > $('.about').offset().top -350) {
		$('.about .about-content').addClass('load');
	};
	if (wScroll > $('.about').offset().top -300){
		$('.about .ig-logo').addClass('load');
	};
});

// lightbox
function closeLb() {
	let closeLb = document.getElementById('lightbox')
	closeLb.style.display = "none";
};

function openLb() {
var openLb = document.getElementById('lightbox');
openLb.style.display = "block";	
};

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide (n) {
	showSlides(slideIndex = n);
}
function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName('lightbox-content');
	if (n > slides.length) {slideIndex = 1};
	if (n < 1) {slideIndex = slides.length};
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	};
	slides[slideIndex-1].style.display = "block";

};
function plusSlides(n) {
	showSlides(slideIndex += n);
};