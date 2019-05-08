class AudioEvent {
	/**
	Inputs:
		fileName: name of the audio file to play
	**/
	constructor(fileName) {
		this.fileName = fileName;
	}

	preload(game) {
	    game.load.audio(this.fileName, '../assets/' + this.fileName + '.wav');  // TODO: Convert all audio to AAC and change to .m4a
	}

	go(game) {
		game.sound.add(this.fileName).play();
		this.finished = true;
	}
}
