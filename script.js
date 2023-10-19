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


var btn = document.getElementById('btnn');
btn.addEventListener('click',function(e){
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var body = 'name: ' + name + '<br/> email: ' + email + '<br/> subject: ' + subject + '<br/> message: ' + message;


    Email.send({
        Host : "smtp.gmail.com",
        Username : "nilesh12105@gmail.com",
        Password : "immq jpxj ojep tkgb",
        To : 'nilesh12105@gmail.com',
        From : email,
        Subject : subject,
        Body :body
    }).then(
    message => alert(message)
    );
})