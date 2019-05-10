class TextEvent {
	/**
	Inputs:
		text:       content to display on the screen (String)
		appearBy:   the way how the text is displayed. 
				    Default is by 'character'. Other options 
				    include by 'word' and 'line'. (String)
		xPos:       x position of the text (double)
		yPos:       y position of the text (double)
		textStyle:  text style configuration object (style object)
		effects:    list of effects applied on the text. (list of Effect object)
	**/
	constructor(text, options = {}){
		this.text = text;
		this.options = Object.assign(
			{
				appearBy: "character",
				x: undefined,
				y: undefined, 
				partDelay: 40,
				textStyle: { font: "15px Courier New", fill: "#ffffff", lineSpacing: 15 },
				sway: false,
				fade: false,
				flash: false,
				shake: false,
				pause: undefined,
				scrollSpeed: undefined
			}, options);
		this.finished = false;
	}

	preload(game) {

	}

	go(game) {
		game.scrollSpeed = this.options.scrollSpeed || 0.017;
		game.textY = this.options.y || game.textY;
		let textSprite = game.add.text(this.options.x || game.textX, game.textY, '', this.options.textStyle);
		game.textY += 50; //space between different lines
		game.scrollContainer.add(textSprite);
		if(this.options.appearBy === "word"){
			this.options.partDelay += 100;
			this.nextPart(game, textSprite, this.text.split(' '), 0, this.options.appearBy);
		} else{
			this.nextPart(game, textSprite, this.text.split(''), 0, this.options.appearBy);
		}
		
		if(this.options.sway){ this.sway(game, textSprite); }
		if(this.options.fade){ this.fade(game); }
		if(this.options.flash){ this.flash(game); }
		if(this.options.shake){ this.shake(game); }
	}

	nextPart(game, textSprite, parts, partIndex, appearBy) {
	    if(parts[partIndex]) {
	        textSprite.text += parts[partIndex];
	        if(appearBy === "word"){
	        	textSprite.text += " ";
	        }
	        game.time.addEvent({
	        	delay: this.options.partDelay,
	        	callback: () => this.nextPart(game, textSprite, parts, partIndex + 1, appearBy),
	        	callbackScope: this
	        });
	    } else {
	    	this.finished = true;
	    }
	}

	sway(game, textSprite){
		var tween = game.tweens.add({
		    targets: textSprite,
		    x: 400,
		    ease: 'Sine.easeInOut',
		    yoyo: true,
		    duration: 2000,
		    onComplete: function () {
		    	tween.stop();
		    }
		});
		
	}

	fade(game){
		game.cameras.main.fadeOut(1800);
		game.cameras.main.once('camerafadeoutcomplete', function (camera) {
		    camera.fadeIn(1500);
		});
	}

	flash(game){
		game.cameras.main.flash();
	}

	shake(game){
		game.cameras.main.shake(50, 0.05);
	}

}


