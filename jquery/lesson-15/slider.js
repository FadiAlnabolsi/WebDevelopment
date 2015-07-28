function Slider(container, nav) {
	this.container = container;
	this.nav = nav.show();

	this.imgs = this.container.find('img');
	this.imgWidth = this.imgs[0].width;
	this.imgsLen = this.imgs.length;

	this.current = 0;
}

Slider.prototype.transition = function( coords ){
	this.container.animate({
		'margin-left': coords || -( this.current * this.imgWidth )
	})
}

Slider.prototype.setCoordinates = function(dir) {
	if( dir === 'next' ) {
		this.current ++ ;
	} else {
		this.current -- ;
	}

	if(this.current < 0)
		this.current = this.imgsLen-1;

	if(this.current >= this.imgsLen)
		this.current = 0;

	console.log(this.current)
}


slider = new Slider( $('div.slider'), $('#slider-nav') );

