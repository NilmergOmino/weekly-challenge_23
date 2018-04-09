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
    $('._js-anchor').each(function(index, element){
        let target = $(element.hash);
        let targetTop = target.offset().top-1;
        let targetBottom = target.offset().top + target.height();
        let current = $(window).scrollTop();
        if( targetTop <= current && targetBottom > current){
            $(element).addClass('-active');
        }
        else{
            $(element).removeClass('-active');
        }
    })
})

$('#trigger-menu').on('click', function(){
    $('#menu').toggleClass('-active');
    $('#trigger-menu').toggleClass('-active');
})

$(document).ready(function(){
    $('._js-anchor').on('click', function(event){
        $('#menu').removeClass('-active');
        $('#trigger-menu').removeClass('-active');
        let target = this.hash.slice(1),
            hash = "#",
            targetTop = 0;
        if(target.length){
            hash = this.hash;
            targetTop = $('#'+target).offset().top;
        }
        $('html, body').animate({ scrollTop: targetTop }, 600, history.pushState(null,null,hash));
        event.preventDefault();
    })
})
