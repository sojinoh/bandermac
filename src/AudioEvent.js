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
		var sound = game.sound.add(this.fileName);
		sound.play(this.options);
		this.finished = true;
	}

	stop() {
		sound.stop();
	}

	pause() {
		sound.pause();
	}

	resume() {
		sound.resume();
	}

	isPlaying() {
		return sound.isPlaying;
	}

	isPaused() {
		return sound.isPaused;
	}
}
