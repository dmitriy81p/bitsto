$(window).on('load', function() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    $('body').addClass('ios');
  } else {
    $('body').addClass('web');
  };
  $('body').removeClass('loaded');

});
/* viewport width */
function viewport() {
  var e = window,
  a = 'inner';
  if (!('innerWidth' in window)) {
    a = 'client';
    e = document.documentElement || document.body;
  }
  return {
    width: e[a + 'Width'],
    height: e[a + 'Height']
  }
};
/* viewport width */
$(function() {


  $('.links a').click(function () {
    var id = $(this).attr('href');
    $(id).addClass('popup__active');
    $('.popup').addClass('popup__active')
  });
  $('.js-close-popup').click(function () {
    $('.popup').removeClass('popup__active');
    $('.popup__container').removeClass('popup__active')
  });
  $('.popup').click(function () {
    $('.popup').removeClass('popup__active');
    $('.popup__container').removeClass('popup__active')
  });
  $('.js-close-error').click(function () {
    $(this).parents('.box-field__error').hide();
  });

  /* placeholder*/
  $('input, textarea').each(function() {
    var placeholder = $(this).attr('placeholder');
    $(this).focus(function() {
      $(this).attr('placeholder', '');
    });
    $(this).focusout(function() {
      $(this).attr('placeholder', placeholder);
    });
  });

  $('.form-control').focus(function() {
    $(this).parents('.box-field').addClass('focused-field');
  });
  $('.form-control').focus(function() {
    $(this).parents('.box-field').addClass('focused-field');
  });
  $('.form-control').focusout(function() {
    var val_field = $(this).val().length;

    if (val_field > 1) {
      $(this).parents('.box-field').addClass('focused-field');
    } else {
      $(this).parents('.box-field').removeClass('focused-field');
    };
  });

  /* placeholder*/
  /*mob-nav*/
  $('.js-button-nav').click(function() {
    $(this).toggleClass('active'),
    $('.main-nav-list').toggleClass('active');
    return false;
  });

    // scroll fix nav
    $(function(){
      if($('.fixed-block').length){
       $(window).scroll(function() { 
        var top = $(document).scrollTop();
        if (top > 50) $('.fixed-block').addClass('fixed');
        else $('.fixed-block').removeClass('fixed');
      });
     }
   });
    // scroll fix nav
    /*mob-nav*/
    /*list-lang*/
    $('.js-lang-title').click(function() {
        // $(this).parents('.box-lang').toggleClass('opened');
        $(this).parents('.box-lang').find('.list-lang').slideToggle();

        return false;
      });
    $('.js-list-lang .list-lang__label').click(function() {
      $(this).parent().siblings().removeClass('active');
      $(this).parent().addClass('active');
      var name = $(this).find('.list-lang__text').html();
      $('.lang-select__text').html(name);
      $('.box-lang').removeClass('opened');
      $(this).parents('.list-lang').slideUp();
    });
    $(document).on('touchstart click', function(e) {
      if ($(e.target).parents().filter('.js-list-lang').length != 1) {
        $('.js-list-lang').slideUp();
      }
    });


    /*list-lang*/

    /*login-mob*/
    $('.js-header-login__mob-btn').click(function() {
      $('.header-login__box').toggleClass('active');
      return false;
    });
    $(document).on('touchstart click', function(e) {
      if ($(e.target).parents().filter('.header-login__box').length != 1) {
        $('.header-login__box').removeClass('active');
      }
    });
    $(function(){
      if($('.header-login__box').length){
       $(window).scroll(function() { 
        var top = $(document).scrollTop();
        if (top > 50) $('.header-login__box').removeClass('active');
      });
     }
   });
    /*login-mob*/
    // form styler
    if ($('.styled').length) {
      $('.styled').styler();
    };
    // form styler
    // currency selection
    $('.js-list-check__label').click(function() {
      $currency = $(this).attr('data-currency-name');
      $(this).parents('.list-check').find('.list-check__label').removeClass('active');
      $(this).addClass('active');
      $(this).parents('.main-info-list__item').find('.box-field_crypto').find('.currency-name').html($currency);
    });
    // currency selection

  // currency change
  $box_field_sell_eur = $('.box-field_sell-eur');
  $box_field_sell_crypto = $('.box-field_sell-crypto');
  $list_check__item_get_eur = $('.list-check__item_get-eur');
  $list_check__item_get_crypto = $('.list-check__item_get-crypto');
  $box_field_get_eur = $('.box-field_get-eur');
  $box_field_get_crypto = $('.box-field_get-crypto');
  $list_check__label_method_bitcoin = $('.list-check__label_method-bitcoin');
  $list_check__label_method_ethereum = $('.list-check__label_method-ethereum');

  $('.js-change-currency').click(function() {
    $currency = $(this).attr('data-currency');
    $js_payment_method_available = $('.main-info-list__item_payment .js-payment-method-available .list-check_payment-method');
    $js_payment_method_unavailable = $('.main-info-list__item_payment .js-payment-method-unavailable .list-check_payment-method');

    $js_obtaining_method_available = $('.main-info-list__item_obtaining .js-obtaining-method-available .list-check_method-obtaining');
    $js_obtaining_method_unavailable = $('.main-info-list__item_obtaining .js-obtaining-method-unavailable .list-check_method-obtaining');


    if ($currency == 'eur'){
     $box_field_sell_eur.addClass('active');
     $box_field_sell_crypto.removeClass('active');
     $list_check__item_get_eur.addClass('hide');
     $list_check__item_get_crypto.removeClass('hide');
     $box_field_get_eur.removeClass('active');
     $box_field_get_crypto.addClass('active');
     $('.main-info-list__item_payment .js-payment-method-available .list-check_method-obtaining').appendTo('.main-info-list__item_obtaining .js-obtaining-method-available');
     $('.main-info-list__item_payment .js-payment-method-available .list-check_method-obtaining').detach();

     $('.main-info-list__item_payment .js-payment-method-unavailable .list-check_method-obtaining').appendTo('.main-info-list__item_obtaining .js-obtaining-method-unavailable');
     $('.main-info-list__item_payment .js-payment-method-unavailable .list-check_method-obtaining').detach();



     // $js_obtaining_method_available.appendTo('.main-info-list__item_obtaining .js-obtaining-method-available');
     $('.main-info-list__item_obtaining .js-obtaining-method-available .list-check_payment-method').appendTo('.main-info-list__item_payment .js-payment-method-available');
     $('.main-info-list__item_obtaining .js-obtaining-method-available .list-check_payment-method').detach();

     $('.main-info-list__item_obtaining .js-obtaining-method-unavailable .list-check_payment-method').appendTo('.main-info-list__item_payment .js-payment-method-unavailable');
     $('.main-info-list__item_obtaining .js-obtaining-method-unavailable .list-check_payment-method').detach();
     // $js_payment_method_unavailable.appendTo('.main-info-list__item_obtaining .js-obtaining-method-unavailable');
     // $js_obtaining_method_unavailable.appendTo('.main-info-list__item_payment .js-payment-method-unavailable');

   } else if($currency == 'crypto'){
    $box_field_sell_eur.removeClass('active');
    $box_field_sell_crypto.addClass('active');
    $list_check__item_get_eur.removeClass('hide');
    $list_check__item_get_crypto.addClass('hide');
    $box_field_get_eur.addClass('active');
    $box_field_get_crypto.removeClass('active');
    $js_payment_method_available.detach();
    $js_obtaining_method_available.detach();
    $js_payment_method_available.appendTo('.main-info-list__item_obtaining .js-obtaining-method-available');
    $js_obtaining_method_available.appendTo('.main-info-list__item_payment .js-payment-method-available');

    $js_payment_method_unavailable.detach();
    $js_obtaining_method_unavailable.detach();
    $js_payment_method_unavailable.appendTo('.main-info-list__item_obtaining .js-obtaining-method-unavailable');
    $js_obtaining_method_unavailable.appendTo('.main-info-list__item_payment .js-payment-method-unavailable');
  }
        //
        // $box_field_get.toggleClass('active');
        // $list_check__item_get.toggleClass('hide');
        return false;
      });
// currency change
$('.form-control').each(function() {
  var val_field = $(this).val().length;

  if (val_field > 1) {
    $(this).parents('.box-field').addClass('focused-field');
  } else {
    $(this).parents('.box-field').removeClass('focused-field');
  }
});

$('.js-show-pass').click(function () {
  var idInput = $(this).attr('data-id');
  if ($('#pass'+idInput).get(0).type=='password'){
    $('#pass'+idInput).get(0).type='text';
    $(this).addClass('active_in');
  } else {
    $('#pass'+idInput).get(0).type='password';
    $(this).removeClass('active_in');
  }
});

$('#tel').mask('(000) 000-0000');




});
function proverka(input) {
  input.value = input.value.replace(/[^\d,.]/g, '');
};



// converter
$('.js-currency__btn-more').click(function(){
  $(this).toggleClass('active');
  $(this).parents('.currency').find('.currency__more').toggleClass('active');
  $(this).parents('.converter-box').siblings().find('.currency__more').removeClass('active');
});

$(document).on('touchstart click', function(e) {
  if ($(e.target).parents().filter('.converter__item ').length != 1) {
    $('.currency__more').removeClass('active');
    $('.js-currency__btn-more').removeClass('active');
  }
});

$('.js-btn-more-mob').click(function(){
  // $('.currency__more').removeClass('mob-active');
  // $('.js-btn-more-mob').removeClass('mob-active');
  $(this).toggleClass('mob-active');
  $(this).parents('.currency').find('.currency__more').toggleClass('mob-active');
});
$('.js-currency__item').click(function() {
  $(this).siblings('.currency__item').removeClass('active');
  $(this).addClass('active');
  $(this).parents('.currency').find('.currency__more').removeClass('active');
  $(this).parents('.currency').find('.currency__btn-more').removeClass('active');
  $curency_name = $(this).find('.currency__name').text();
  $(this).parents('.currency').find('.quantity__currency-name').text($curency_name);
  $(this).parents('.converter-box').siblings().find('.currency__more').removeClass('active');
  $(this).parents('.converter-box').siblings().find('.currency__more').removeClass('mob-active');
  $(this).parents('.converter-box').siblings().find('.js-currency__item').removeClass('mob-active');
});
$('.js-currency__item_more').click(function() {
  $(this).siblings('.currency__item').removeClass('active');
  $(this).parents('.currency').find('.currency__more').removeClass('active');
  $(this).parents('.currency').find('.currency__more').removeClass('mob-active');
  $(this).parents('.currency').find('.btn-more-mob ').removeClass('mob-active');
  $(this).parents('.currency').find('.currency__btn-more').removeClass('active');
  $(this).parents('.currency').find('.js-currency__item').removeClass('active');
  $(this).parents('.currency').find('.js-currency__item:first').addClass('active');
  $curency_name_full = $(this).find('.currency__item-cont').html();
  $curency_name = $(this).find('.currency__name').text();
  $(this).parents('.currency').find('.quantity__currency-name').text($curency_name);

  $(this).parents('.currency').find('.js-currency__item:first').html($curency_name_full);
  $(this).parents('.converter-box').siblings().find('.currency__more').removeClass('mob-active');



});

$('.converter .form-control').focus(function(){
  $(this).parents('.box-field').addClass('focused-field');
});
$('.converter .form-control').focus(function(){
  $(this).parents('.box-field').addClass('focused-field');
});
$('.converter .form-control').focusout(function(){
  var val_field = $(this).val().length;		 

  if (val_field > 1) {
   $(this).parents('.box-field').addClass('focused-field');
 } else{
   $(this).parents('.box-field').removeClass('focused-field');
 };
});


$('.js-change-btn').click(function() {
  $js_converter_from = $('.js-converter-from .converter__item');
  $js_converter_to = $('.js-converter-to .converter__item');
  $js_converter_from.detach().insertAfter($('.js-converter-to .currency-title'));
  $js_converter_to.detach().insertAfter($('.js-converter-from .currency-title'));
  $('.js-converter-to .quantity').find('.form-control').attr('disabled','disabled');
  $('.js-converter-from').find('.form-control').removeAttr('disabled');
});

if($('.scroll').length) {
  $(".scroll").mCustomScrollbar({
      // axis:"x",
      theme:"dark-thin",
      // autoExpandScrollbar:true,
      // advanced:{autoExpandHorizontalScroll:true}
    });
};

$( '.js-form-control_search' ).keyup(function() {
  var val_field = $(this).val().length; 
  if (val_field > 0) {
    $(this).siblings('.icon-search').hide();
  } else{
    $(this).siblings('.icon-search').show('focused-field');
  };
});




var handler = function() {

  var height_footer = $('footer').height();
  var height_header = $('header').height();
  $(function() {
    $('.decor-small').height($('.decor-small').width());
    $('.decor-big').height($('.decor-big').width());
  });

  var viewport_wid = viewport().width;
  var viewport_height = viewport().height;


}
$(window).bind('load', handler);
$(window).bind('resize', handler);


