var config = {
    type: Phaser.WEBGL,
    scale: {
        parent: 'gameWrapper',
        mode: Phaser.DOM.FIT,
        autoCenter: Phaser.DOM.CENTER_BOTH,
        width: 1250,
        height: 600
    },
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
    }
};

new Phaser.Game(config);

var eventPollingInterval = 60;
var currentScene = "geology";
var currentEventIndex = -1;
var button1;
var button2;
var timerAfterSceneIsDone = 300;
var timerForTextPause = 0;
var buttonClicked = false; 

function preload() {
    // call preload for all events in all scenes
    for (let scene of Object.values(story)) {
        for (let event of scene.events) {
            event.preload(this);
        }
    }

    //transition footstep image
    this.load.image('footprint', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsOc4o0Dd5zR6YxomB3MsecxjmyhJWHzq6q4vAOkYNz1h4laVk');
}

function create() {
    this.scrollContainer = this.add.container(this.textX, this.textY);
    this.textX = 250;
    this.textY = 100;
    this.scrollSpeed = 0.017;

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
    if(currentEventIndex > -1){
        timerForTextPause = story[currentScene].events[currentEventIndex].options.pause || 0;
    }
    if(timerForTextPause > 0){
        timerForTextPause -= 1;
    } else{
        if (!story[currentScene].events[story[currentScene].events.length-1].finished){
            //when the whole scene is not shown yet, keep scrolling
            this.scrollContainer.y -= this.scrollSpeed * delta;
        } else {
            if (timerAfterSceneIsDone > 0){
                //After the whole text is shown, scrol up text for another 3 seconds
                //so the text does not overlap with the buttons
                this.scrollContainer.y -= this.scrollSpeed * delta;
                timerAfterSceneIsDone -= 1;
            } else if (!buttonClicked) {
                //show the decision buttons when the scene is over, before transition
                button1.text = story[currentScene].decisions[0].text;
                button2.text = story[currentScene].decisions[1].text;
                button1.visible = true;
                button2.visible = true;
            } else{
                //do not update anything when the scene transition is still going on
            }
        }
    }

}

function actionOnClick (game, decisionChosen) {
    console.log("clicked");
    game.scrollContainer.removeAll();
    buttonClicked = true;
    button1.visible = false;
    button2.visible = false;

    //scene transition
    var footprintSprite = game.add.sprite(-400, 0, 'footprint');
    footprintSprite.setScale(.2);
    var transition = game.tweens.add({
        targets: footprintSprite,
        x: 1200,
        y: 550,
        duration: 3000,
        ease: 'Stepped',
        easeParams: [ 10 ],
        delay: 10,
        onComplete: function () {
            footprintSprite.destroy();
            currentScene = story[currentScene].decisions[decisionChosen].scene;
            currentEventIndex = -1;
            timerAfterSceneIsDone = 300;
            buttonClicked = false;
        }
    });


}


function actionOnHover (game, button){
    window[button].setStyle({ fontSize: 16, fill: '#ff0'});

}

function actionHoverOut (game, button){
    window[button].setStyle({ fontSize: 16, fill: '#c51b7d'});
}






