class AudioEvent {
	/**
	Inputs:
		fileName: name of the audio file to play
 	**/
	constructor(fileName, options = {}) {
		this.fileName = fileName;
		this.options = options;
		this.sound;
	}

	preload(game) {
	    game.load.audio(this.fileName, './assets/' + this.fileName + '.wav');  // TODO: Convert all audio to AAC and change to .m4a
	}

	go(game) {
		var sound = game.sound.add(this.fileName);
		this.sound = sound;
		this.sound.play(this.options);
		this.finished = true;
	}

	stop() {
		this.sound.stop();
	}

	pause() {
		this.sound.pause();
	}

	resume() {
		this.sound.resume();
	}

	isPlaying() {
		return this.sound.isPlaying;
	}

	isPaused() {
		return this.sound.isPaused;
	}
}
