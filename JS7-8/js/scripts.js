'use strict';
$(document).ready(function(){
    // $('input').hover(function() {
    //     $(this).next('em').animate({opacity: 'show', top: '-75'}, 'slow');
    // }, function() {
    //     $(this).next('em').animate({opacity: 'hide', top: '-85'}, 'fast');
    // });


    
    $('input').hover(function () {
      const $elem = $(this).parent().find('.title');
      $elem.fadeIn(1000);
    }, function () {
      const $elem = $(this).parent().find('.title');
      $elem.fadeOut(2000);
    }).focusin(function () {
      const $elem = $(this).parent().find('.title');
      $elem.fadeIn(2000).fadeOut(2000);
    });


	$('button').click(function () {
       $('input').parent().find('.title').fadeIn(1500).fadeOut(2000);
    	});



	$('.tab_content').hide();
	$('.tab_content:first').show();
	$('a:first').addClass('active');

	$('a').on('click focus', function(event) {
		event.preventDefault();
		$('a').removeClass('active');
		$(this).addClass('active');
		$('.tab_content').hide();
	 
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn();
	});
});
