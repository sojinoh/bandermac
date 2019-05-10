class AudioEventAction {

	constructor(audioEvent, action) {

		this.audioEvent = audioEvent;
		this.action = action;
	}

	preload(game) {

	}

	go(game) {

		if (this.action === 'pause') {
			this.audioEvent.pause();
		}

		if (this.action === 'stop') {
			this.audioEvent.stop();
		}

		if (this.action === 'resume') {
			this.audioEvent.resume();
		}

		this.finished = true;

	}
}