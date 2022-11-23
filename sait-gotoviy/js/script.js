$('.reviews-slider').slick({
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1
    });
    sliderSecondBlock()
    function sliderSecondBlock(){
    $('.reviews .reviewsBlock .info-block .item.slick-active').eq(1).addClass('active')
    }
    $('button').on('click', function(){
    $('.reviews .reviewsBlock .info-block .item.slick-active').removeClass('active')
    $('.reviews .reviewsBlock .info-block .item.slick-center').addClass('active')
    })
    
   
