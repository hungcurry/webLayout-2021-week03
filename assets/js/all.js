"use strict";

// 首頁
$('.js-ham').on("click", function (e) {
  e.preventDefault();
  $('.js-open').toggleClass('active');
  $('body').toggleClass('active');

  if ($('.blogNav').hasClass("active") === true) {
    $('.blogNav').removeClass('active');
    $('.js-blogMenu').removeClass('active');
  }

  ;
});
$('.js-close').on("click", function (e) {
  e.preventDefault();
  $('body').removeClass('active');
  setTimeout(function () {
    $('.js-open').removeClass('active');
  }, 300);
}); // 產品頁

$('.productsContent').hide();
$('.productsContent').eq(0).show();
var isOpen = true;
$('.js-pd-btn').on('click', function () {
  if (isOpen === true) {
    isOpen = false;
    var id = $(this).attr('id').substr(2);
    $('.productsMenu＿item').removeClass('active');
    $(this).addClass('active');
    $('.productsContent').fadeOut(100);
    $(".productsContent" + id).delay(100).fadeIn(100, function () {
      isOpen = true;
    });
  }
}); // 部落格

$('.subNavMenu＿btn').on('click', function () {
  $('.subNavMenu＿btn').toggleClass('active');
  $('.subNav').toggleClass('active');
  $('.js-blogMenu').toggleClass('active');
});
var len = 130; // 超過109個字以"..."取代

$(".js-ellipsis").each(function (i) {
  if ($(this).text().length > len) {
    $(this).attr("title", $(this).text());
    var text = $(this).text().substring(0, len - 1) + "...";
    $(this).text(text);
  }
});
$('.card＿body').hide();
$('.card＿item').eq(0).addClass('active');
$('.card＿body').eq(0).show();
$('.card＿item').on("click", function (e) {
  e.preventDefault();
  $(this).toggleClass('active').siblings().removeClass('active');
  $(this).children().next().slideToggle();
  $(this).siblings().children().next().slideUp();
});
$(window).scroll(function () {
  var HH = $(window).scrollTop();

  if (HH > 900) {
    $(".topBack").stop().animate({
      "opacity": "1"
    }, 500);
    $(".topBack").on("click", clickFn);
  } else {
    $(".topBack").stop().animate({
      "opacity": "0"
    }, 500);
  }
});

function clickFn() {
  $(".topBack").off("click", clickFn);
  $("html,body").stop().animate({
    scrollTop: 0
  }, 500);
}
//# sourceMappingURL=all.js.map
