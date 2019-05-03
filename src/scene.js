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

var scene = {
    // background: "#df1432",  // for example
    events: [
        new TextEvent("Your eyes gradually open", { partDelay: 60 }),
        new TextEvent("as you slowly float into consciousness.", {}),
        new TextEvent("                     ", {}),
        // new SoundEvent("crash"),
        // new PauseEvent(1.2),
        new TextEvent("With your head pounding", {}),
        new TextEvent("you realize you are lying flat on your back in the middle of Smail gallery. ", {}),
        new TextEvent("                     ", {}),
        new TextEvent("You cannot remember who you are or what happened to you.", {}),
        new TextEvent("You glance to the backdoors only to realize it is pitch black outside.", {}),
        new TextEvent("                     ", {}),
        new TextEvent("There is an eerie stillness to the place.", {}),
        new TextEvent("                     ", {}),
        new TextEvent("The building itself is completely dark", {}),
        new TextEvent("except for a light emanating from the top floor.", {}),
        new TextEvent("                     ", {}),
        new TextEvent("Suddenly you hear a crash coming downstairs from the geology wing.", {}),
    ]
};

var eventPollingInterval = 100;
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
    if (currentEventIndex < 0 || (scene.events[currentEventIndex].finished
        && currentEventIndex+1 < scene.events.length)) {
        currentEventIndex++; 
        scene.events[currentEventIndex].go(game);
    }

    game.time.addEvent({
        delay: eventPollingInterval,
        callback: () => checkEvent(game)
    });
}

function update (time, delta){
    if(!scene.events[scene.events.length-1].finished){
        this.scrollContainer.y -= 0.02 * delta;
    }
}





