$(document).ready(function(){


    /* Begin */
    let menu = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.header .nav');
    let header = document.querySelector('.header');

    menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    }

    window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }

    }

    const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    });











    $('.home-slider').owlCarousel({
        items:1,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:8000,
        loop:true
    });

    
    $('.small-image-1 img').click(function(){

        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        $('.big-image-1 img').attr('src', image);

    });

    $('.small-image img').click(function(){

        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        $('.big-image img').attr('src', image);

    });

    $('.gallery .btn').click(function(){

        let filter = $(this).attr('data-filter');
        if(filter == 'all'){
            $('.gallery .box').show(400);
        }else{
            $('.gallery .box').not('.'+filter).hide(200);
            $('.gallery .box').filter('.'+filter).show(400);
        }

        $(this).addClass('button-active').siblings().removeClass('button-active');

    });

});