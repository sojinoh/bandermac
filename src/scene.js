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

var eventPollingInterval = 60;
var currentScene = "Start";
var currentEventIndex = -1;
var button1;
var button2;
var timer = 300;


function preload() {
    // call preload for all events in this scene
    for (let event of story[currentScene].events){
        event.preload(this);
    }
}

function create() {
    this.scrollContainer = this.add.container(this.textX, this.textY);
    this.textX = 250;
    this.textY = 100;

    button1 = this.add.text(300, 500, story[currentScene].decisions[0], {font: "16px Courier New", fill: "#c51b7d"})
        .setInteractive()
        .on('pointerdown', () => actionOnClick(this, 0) )
        .on('pointerover', () => actionOnHover(this, "button1"))
        .on('pointerout', () => actionHoverOut(this, "button1"));

    button2 = this.add.text(750, 500, story[currentScene].decisions[1], {font: "16px Courier New", fill: "#c51b7d"})
        .setInteractive()
        .on('pointerdown', () => actionOnClick(this, 1) )
        .on('pointerover', () => actionOnHover(this, "button2"))
        .on('pointerout', () => actionHoverOut(this, "button2"));

    button1.visible = false;
    button2.visible = false;

    checkEvent(this);
}

function checkEvent(game){
    if (currentEventIndex < 0 || (story[currentScene].events[currentEventIndex].finished
        && currentEventIndex+1 < story[currentScene].events.length)) {
        currentEventIndex++; 
        story[currentScene].events[currentEventIndex].go(game);
    }

    game.time.addEvent({
        delay: eventPollingInterval,
        callback: () => checkEvent(game)
    });
}

function update (time, delta){
    if (!story[currentScene].events[story[currentScene].events.length-1].finished){
        //when the whole scene is not shown yet
        this.scrollContainer.y -= 0.023 * delta;
    } else {
        if (timer > 0){
            //scrolling up text for a little bit so it doesn't overlap with the buttons
            this.scrollContainer.y -= 0.023 * delta;
            timer -= 1;
        } else {
            //show the decision buttons when the scene is over
            button1.text = story[currentScene].decisions[0].text;
            button2.text = story[currentScene].decisions[1].text;
            button1.visible = true;
            button2.visible = true;
        }
    }

}

function actionOnClick (game, decisionChosen) {
    console.log("clicked");
    currentScene = story[currentScene].decisions[decisionChosen].scene;
    currentEventIndex = -1;
    game.scrollContainer.removeAll();
    button1.visible = false;
    button2.visible = false;
    timer = 300;
    this.scrollContainer.y = this.textY;

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







