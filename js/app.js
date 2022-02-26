$(document).ready(function(){
    // banner-Slider
    $('#banner-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots: false,
        startSpeed: 1000,
        navText : ['PREV', 'NEXT'],
        responsive:{
            0:{
                nav:false,
            },
            768:{
                nav:true,
            }
        }
    })


    // Review-Slider
    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: true,
        startSpeed: 1000,
        margin:24,
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            768:{
                items:2,
            },
            1140:{
                items:2,
                center:true,
            },
        }
    })



    $('#review-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        items: 1,
        startSpeed: 1000,
        
    })
});