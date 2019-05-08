class AudioEvent {
	/**
	Inputs:
		fileName: name of the audio file to play
 	**/
	constructor(fileName, options = {}) {
		this.fileName = fileName;
		this.options = options;
	}

	preload(game) {
	    game.load.audio(this.fileName, './assets/' + this.fileName + '.wav');  // TODO: Convert all audio to AAC and change to .m4a
	}

	go(game) {
		console.log(this.options);
		game.sound
			.add(this.fileName)
			.play(this.options);
		this.finished = true;
	}
}
