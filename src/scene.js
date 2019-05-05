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
var currentSceneDecisionIndex = 0;
var currentEventIndex = -1;
var button1;
var button2;


function preload() {
    //load the audio asset
    this.load.audio('theme','../assets/creepy.wav');
    this.load.audio('crash','../assets/crash.wav');
}

function create() {
    var theme = this.sound.add('theme');
    theme.play();

    this.scrollContainer = this.add.container(this.textX, this.textY);
    this.textX = 250;
    this.textY = 300;

    button1 = this.add.text(300, 500, decisions[currentSceneIndex][0], {font: "16px Courier New", fill: "#c51b7d"})
        .setInteractive()
        .on('pointerdown', () => actionOnClick(this, 0) )
        .on('pointerover', () => actionOnHover(this, "button1"))
        .on('pointerout', () => actionHoverOut(this, "button1"));

    button2 = this.add.text(750, 500, decisions[currentSceneIndex][0], {font: "16px Courier New", fill: "#c51b7d"})
        .setInteractive()
        .on('pointerdown', () => actionOnClick(this, 1) )
        .on('pointerover', () => actionOnHover(this, "button2"))
        .on('pointerout', () => actionHoverOut(this, "button2"));

    button1.visible = false;
    button2.visible = false;

    checkEvent(this);
}

function checkEvent(game){
    if (currentEventIndex < 0 || (story[currentSceneIndex][currentSceneDecisionIndex][currentEventIndex].finished
        && currentEventIndex+1 < story[currentSceneIndex][currentSceneDecisionIndex].length)) {
        currentEventIndex++; 
        story[currentSceneIndex][currentSceneDecisionIndex][currentEventIndex].go(game);
    }

    game.time.addEvent({
        delay: eventPollingInterval,
        callback: () => checkEvent(game)
    });
}

function update (time, delta){
    if(!story[currentSceneIndex][currentSceneDecisionIndex][story[currentSceneIndex][currentSceneDecisionIndex].length-1].finished){
        //when the whole scene is not shown yet
        this.scrollContainer.y -= 0.02 * delta;
    } else{
        //show the decision buttons when the scene is over
        button1.text = decisions[currentSceneIndex][0];
        button2.text = decisions[currentSceneIndex][1];
        button1.visible = true;
        button2.visible = true;
    }

}

function actionOnClick (game, decisionChosen) {
    console.log("clicked");
    currentSceneIndex += 1;
    currentSceneDecisionIndex = decisionChosen;
    currentEventIndex = -1;
    game.scrollContainer.removeAll();
    button1.visible = false;
    button2.visible = false;

    checkEvent(game);
}


function actionOnHover (game, button){
    console.log("hoveron");
    window[button].setStyle({ fill: '#ff0'});
}

function actionHoverOut (game, button){
    console.log("hoverout");
    window[button].setStyle({ fill: '#c51b7d'});
}







