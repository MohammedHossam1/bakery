//nav scroll
window.addEventListener('scroll', function () {
  let scrolTop = $(window).scrollTop();
  if (scrolTop == 0) {
    $('nav').removeClass('bg-white')
    $('nav a').removeClass('text-dark')
    $('nav img').attr('src', 'img/bakery-light-1.png')
    $('nav').removeClass('shadow')

  } else {
    $('nav').addClass('bg-white')
    $('nav a').addClass('text-dark')
    $('nav img').attr('src', 'img/bakery-color.png')
    $('nav').addClass('shadow')

  }
})


//setting side
$('.side-setting').click(function (e) {
  if ($('.side-setting').css('right') == "0px") {


    $('.setting').animate({
      right: '0%'
    })
    $('.fa-gear').css('display', 'none')
    $('.fa-xmark').css('display', 'block')
    $('.side-setting').animate({
      right: '155px'
    })

  }
  else {

    $('.setting').animate({
      right: '-160px'
    })
    $('.fa-gear').css('display', 'block')
    $('.fa-xmark').css('display', 'none')
    $('.side-setting').animate({
      right: '0'
    })

  }
//span click
$('span').click(function (e) {
 let mainColor =$(this).css('backgroundColor')
 console.log(mainColor);
$(':root').css('--main-color',mainColor);
}
)


})


//active link
$('nav a').click(function () {
  $(this).addClass('active-li')
  $(this).siblings().removeClass('active-li')

})


//navicon
$('.nabar').click(function(){
  console.log('in');
  if( $('nav .container>div').css("display")=="none"){
  $('nav .container>div').css("display","flex",1000);}
  else{
  $('nav .container>div').css("display","none",1000);

  }
});


