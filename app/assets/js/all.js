// 首頁
$('.js-ham').on("click" ,function (e){

  e.preventDefault();
  $('.js-open').toggleClass('active');
  $('body').toggleClass('active');
  if ($('.blogNav').hasClass("active") === true) {
    $('.blogNav').removeClass('active');
    $('.js-blogMenu').removeClass('active');
  };
  
});

$('.js-close').on("click" , function (e){

  e.preventDefault();
  $('body').removeClass('active');
  setTimeout(() => {
    $('.js-open').removeClass('active');
  }, 300);

});




