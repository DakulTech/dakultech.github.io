$(document).ready(function(){
	$('.header').height($(window).height());
})

var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

// MODAL
setTimeout(function() {
	$('#demo-modal').modal();
}, 500);

$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            item: 1,
            nav: false
        },
        600:{
            item: 2,
            nav: false
        },
        1000:{
            item: 3,
            nav: false
        },
    }

});