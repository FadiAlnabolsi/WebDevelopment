/* */
(function($) {
	var sliderUL = $('div.slider').css('overflow', 'hidden').children('ul'),
		imgs = sliderUL.find('img'),
		imgWidth = imgs[0].width, //600
		imgsLen = imgs.length, //4
		current = 1,
		totalImgsWidth = imgWidth * imgsLen; //2400

	$('#slider-nav').show().find('button').on('click', function(){
		var direction = $(this).data('dir'),
			loc = imgWidth;

		//update current value
		( direction === 'next') ? current++ : current--

		//if first iamge
		if (current === 0) {
			current = imgsLen;
			loc = totalImgsWidth - imgWidth;
			direction = 'next';
		} else if (current > imgsLen) {
			//are we at end? should we reset?
			current = 1;
			loc = 0;
		}

		transition(sliderUL, loc, direction);

		console.log(current);
	});

	function transition( container, loc, direction ) {
		var unit; //-= or +=
		if ( direction && loc !== 0 ) {
			unit = (direction === 'next') ? '-=' : '+='
		}

		container.animate({
			'margin-left': unit ? (unit + loc) : loc
		})
	}

})(jQuery);