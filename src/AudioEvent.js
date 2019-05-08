class AudioEvent {
	/**
	Inputs:
		fileName: name of the audio file to play
	**/
	constructor(fileName) {
		this.fileName = fileName;
	}

	go(game) {
		game.sound.add(this.fileName).play();
		this.finished = true;
	}
}
