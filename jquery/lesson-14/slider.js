/* */
(function($) {
	var sliderUL = $('div.slider').css('overflow', 'hidden').children('ul'),
		imgs = sliderUL.find('img'),
		imgWidth = imgs[0].width, //600
		imgsLen = imgs.length, //4
		current = 1,
		totalImgsWidth = imgWidth * imgsLen; //2400

	$('#slider-nav').show().find('button').on('click', function(){
		
	});
})(jQuery);