var config = {
    type: Phaser.WEBGL,
    width: 1250,
    height: 600,
    parent: 'container',
    plugins: {
      global: [{
        key: 'GameScalePlugin',
        plugin: Phaser.Plugins.GameScalePlugin,
        mapping: 'gameScale',
        data: {
          minWidth: 400,
          minHeight: 300,
          maxWidth: 1600,
          maxHeight: 1200,
          snap: 0
        }
      }]
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    audio: {
        disableWebAudio: true
    }
};

new Phaser.Game(config);

var eventPollingInterval = 100;
var currentSceneIndex = 0;
var currentEventIndex = -1;


function preload() {
    //load the audio asset
    this.load.audio('theme','../assets/creepy.wav');
    this.load.audio('crash','../assets/crash.wav');
}

function create() {
    var theme = this.sound.add('theme');
    theme.play();

    this.scrollContainer = this.add.container(this.textX, this.textY);
    this.textX = 300;
    this.textY = 300;

    checkEvent(this);
}

function checkEvent(game){
    if (currentEventIndex < 0 || (story[currentSceneIndex][currentEventIndex].finished
        && currentEventIndex+1 < story[currentSceneIndex].length)) {
        currentEventIndex++; 
        story[currentSceneIndex][currentEventIndex].go(game);
    }

    game.time.addEvent({
        delay: eventPollingInterval,
        callback: () => checkEvent(game)
    });
}

function update (time, delta){
    if(!story[currentSceneIndex][story[currentSceneIndex].length-1].finished){
        this.scrollContainer.y -= 0.02 * delta;
    }
}





