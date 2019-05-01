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
    physics: {
        default: 'impact',
        arcade: {
            gravity: { y: 200 }
        },
        impact: {
            gravity: 100,
            maxVelocity: 500
        }
    },
    scene: {
        preload: preload,
        create: create
    },
    audio: {
        disableWebAudio: true
    }
};

new Phaser.Game(config);

var scene = {
    // background: "#df1432",  // for example
    events: [
        new TextEvent("Your eyes gradually open", { x: 100, y: 50, partDelay: 60 }),
        new TextEvent("as you slowly float into consciousness.", { partDelay: 30 }),
        // new SoundEvent("crash"),
        // new PauseEvent(1.2),
        new TextEvent("With your head pounding", { y: 300 }),
    ]
};

var eventPollingInterval = 100;
var currentEventIndex = -1;


function preload() {
    //load the audio asset
    this.load.audio('theme','assets/creepy.wav');
    this.load.audio('crash','assets/crash.wav');
}

function create() {
    var theme = this.sound.add('theme');
    theme.play();

    this.textX = 50;
    this.textY = 20;

    checkEvent(this);
}

function checkEvent(game){
    if (currentEventIndex < 0 || scene.events[currentEventIndex].finished) {
        currentEventIndex++; 
        scene.events[currentEventIndex].go(game);
    }

    game.time.addEvent({
        delay: eventPollingInterval,
        callback: () => checkEvent(game)
    });
}






