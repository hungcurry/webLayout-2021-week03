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

// 產品頁
$('.productsContent').hide();
$('.productsContent').eq(0).show();
let isOpen = true;
$('.js-pd-btn').on('click', function (){

  if (isOpen === true) {
    isOpen = false;
    let id = $(this).attr('id').substr(2);
    $('.productsMenu＿item').removeClass('active');
    $(this).addClass('active');
    $('.productsContent').fadeOut(100);
    $(".productsContent" + id).delay(100).fadeIn(100, function (){
      isOpen = true;
    });
  }
  
});


