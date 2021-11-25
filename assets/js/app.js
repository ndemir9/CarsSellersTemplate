$('.owl1').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    nav:true,
    responsive:{
        0:{
            items:1
        }
    }
})
$('.owl2').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        }
    }
})
$('.owl3').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        }
    }
})
$('.owl4').owlCarousel({
    loop:true,
    margin:0,
    autoplay:false,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        }
    }
})
/*
window.addEventListener("scroll", function(){
    var navmenu = document.querySelector(".menu-box");
    navmenu.classList.toggle("sticky", window.scrollY > 550);
})
*/
$('.hamburgerOpenBtn').click(function(){
    $('.hamburgerMenu').css({
        right: 0,
        transition: ".4s"
    })
})

$('.hamburgerCloseBtn').click(function(){
    $('.hamburgerMenu').css({
        right: "-150%",
        transition: ".4s"
    })
})