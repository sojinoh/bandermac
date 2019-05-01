class Effect{
	/**
	Inputs:
		game:       current phaser game object (Phaser Game Object)
		line:       line content of the current TextEvent (String)
		appearBy:   the way how the text is displayed. 
				    Default is by character. Other options 
				    include by 'word' and 'line'. (String)
		xPos:       x position of the text (double)
		yPos:       y position of the text (double)
		textStyle:  text style configuration object (style object)
		effects:    list of effects applied on the text. (list of effect object)
	**/
	constructor(game, line, appearBy='character', xPos, yPos, 
				textStyle = { font: "15px Courier New", fill: "#ffffff", lineSpacing: 15 }, effects=[]){
		
		this.game = game;
		this.line = line;
		this.appearBy = appearBy;
		this.xPos = xpos;
		this.yPos = ypos;
		this.textStyle = textStyle;
		this.effects = effects;
	}

	
}