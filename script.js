$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
});

// slide-up script
$('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
});

$('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
});

// toggle menu/navbar script
$('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
});

// typing text animation script
var typed = new Typed(".typing", {
        strings: ["Student", "Learner", "Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
});

var typed = new Typed(".about .typing-2", {
        strings: ["Student", "Learner", "Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
});

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbwZjVsnll7823F9AVGaW3Bw2iDUAsFUsufVKEMaxjdftyGxeicbOcUZ3rI-ZHIzc5oNSA/exec'

const form = document.forms['contact-form']



form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

