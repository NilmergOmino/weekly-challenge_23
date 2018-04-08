import '../scss/style.scss';
let $ = require('jquery');


$(document).on('scroll', function(){
    let scrollTop = $(document).scrollTop();
    if (scrollTop > 5){
        $('#navbar').addClass('-sticky');
    }
    else{
        $('#navbar').removeClass('-sticky');
    }
})

$('#trigger-nav').on('click', function(){
    $('#navbar').toggleClass('-active');
    $('#trigger-nav').toggleClass('-active');
})

// $(document).ready(function(){
//     $('._js-anchor').on('click', function(event){
//         $('#menu').removeClass('-toggle');
//         $('#trigger-menu').removeClass('-active');
//         let target = this.hash.slice(1),
//             hash = "#",
//             targetTop = 0;
//         if(target.length){
//             hash = this.hash;
//             targetTop = $('#'+target).offset().top;
//         }
//         $('html, body').animate({ scrollTop: targetTop }, 600, history.pushState(null,null,hash));
//         event.preventDefault();
//     })
// })
