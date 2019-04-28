class TextEvent{

	/**
	Inputs:
		line:       line content of the current TextEvent (String)
		appearBy:   the way how the text is displayed. 
				    Default is by 'character'. Other options 
				    include by 'word' and 'line'. (String)
		xPos:       x position of the text (double)
		yPos:       y position of the text (double)
		textStyle:  text style configuration object (style object)
		effects:    list of effects applied on the text. (list of Effect object)
	**/
	constructor(line, appearBy = "character", xPos = 350, yPos = 300, 
		textStyle = { font: "15px Courier New", fill: "#ffffff", lineSpacing: 15 }, effects = []){
		
		this.line = line;
		this.appearBy = appearBy;
		this.xPos = xPos;
		this.yPos = yPos;
		this.textStyle = textStyle;
		this.effects = effects;
	}

	addText(game) {
		game.add.text(this.xPos, this.yPos, this.line, this.textStyle);
	}

	runEffects() {
		// for (var effect in this.effects):
		// 	if (effect.name === 'tweens'):
		// 		this.game.tweens.add(effect.configuration);
	}
}