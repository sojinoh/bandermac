class AudioEventAction {

	/**
	Pauses, resumes or stops an audio file

	Inputs:
		audioEvent: an audioEvent created earlier
		action: what action to apply to that audioEvent
 	**/

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