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
        create: create,
        update: update
    },
    audio: {
        disableWebAudio: true
    }
};

new Phaser.Game(config);

var content = [
    [//Scene 1 Amnesia:

        "Your eyes gradually open \nas you slowly float into consciousness.\n\n\nWith your head pounding",
        "you open your eyes to realize \nyou are lying flat on your back in the middle of Smail gallery.\n\n\n",
        "You glance to the backdoors \nonly to realize it is pitch black outside.",
        "\n\n\nThere is an eerie stillness to the place.\n\n\nThe building itself is completely dark", 
        "except for a light emanating from the top floor.\n\n\nSuddenly you hear a crash", 
        "coming from the geology wing."
    ],

    [//Scene 2a. Top

        "You stand carefully. You feel slightly off balance as you walk up the main",
        "staircase to the third floor. There, sitting at the one of the circular tables",
        "of the top floor is man. From his young features, you figure he must be a student.",
        "You walk over to him. You need to try to understand what is going on.",
    
    ],

    [//Scene 2b. Dino (1)

        "You stand carefully. You feel slightly off balance as you walk down the",
        "stairs towards the crash. As you come closer, you notice shards of glass",
        "scattered around a case containing a dinosaur skull. The case is broken,",
        "and you notice a note pinned between the dinosaur’s teeth. You pick up",
        "(action) the note. The notes reads, “They who hath awoken, hath stumbled",
        "upon the broken. Here upon these bones shall lead you deep into the unknown."
    ],

    [//Scene 2b. Dino (2)
        "Follow the red or suffer with dread.” You wonder what William Shakespeare",
        "was doing in OLRI. You also notice a trail of blood leading towards the staircase.",
        "You follow it and end up in a old part of the building, down a hallway you didn’t",
        "know existed. Along the way, you notice an orange and pick it up. It might be a clue.",
        "A small door opens at the end of the hallway, you crawl through."
    ]

];


var line = [];
var wordIndex = 0;
var lineIndex = 0;
var wordDelay = 100;
var lineDelay = 100;
var button1;
var button2;
var text1;
var currentDecision = 0;
var textDisplayDone = false;

var text1_animation_time = 0;

function preload(){

    //load the audio asset
    this.load.audio('theme','../assets/creepy.wav');
    this.load.audio('crash','../assets/crash.wav');

}


function create() {

    var theme = this.sound.add('theme');
    theme.play();

    text1 = this.add.text(350, 300, '', { font: "15px Courier New", fill: "#ffffff", lineSpacing: 15 });

    nextLine(this);

    button1 = this.add.text(300, 500, 'Go to the top floor', {font: "16px Courier New", fill: "#c51b7d"},actionOnClick1, this, 2, 1, 0)
        .setInteractive()
        .on('pointerdown', () => actionOnClick1(this) )
        .on('pointerover', () => actionOnHover1(this))
        .on('pointerout', () => actionHoverOut1(this) );
    button1.visible =! button1.visible

    button2 = this.add.text(750, 500, 'Go to the Geology wing', {font: "16px Courier New", fill: "#c51b7d"},actionOnClick2, this, 2, 1, 0)
        .setInteractive()
        .on('pointerdown', () => actionOnClick2(this) )
        .on('pointerover', () => actionOnHover2(this))
        .on('pointerout', () => actionHoverOut2(this) );

    button2.visible =! button2.visible

    //animation
    this.tweens.add({
        targets: text1,
        x: 450,
        ease: 'Sine.easeInOut',
        yoyo: true,
        repeat: 3,
        duration: 2000
    });

    this.cameras.main.fadeOut(1800);

    this.cameras.main.once('camerafadeoutcomplete', function (camera) {

        camera.fadeIn(1500);
    });



    //resizing the window
    this.events.on('resize', function (width, height) {
        console.log('Scene "resize" event', width, height);
    
        //Adjust the boundary
        this.physics.world.setBounds(0, 0, width, height);
      }, this);

    this.sys.game.events.on('resize', function (width, height) {
    console.log('Game "resize" event', width, height);
    }, this);

}

function update (time, delta){
    if(!textDisplayDone)
        text1.y -= 0.015 * delta;
}

function nextLine(game) {

    if (lineIndex != content[currentDecision].length) {

        //  Split the current line by characters, so one word per array element
        line = content[currentDecision][lineIndex].split('');
        console.log(line)

        //  Reset the word index to zero (the first word in the line)
        wordIndex = 0;

        //  Call the 'nextWord' function once for each word in the line (line.length)
        //console.log(game);

        game.time.addEvent({ delay: wordDelay, callback: () => nextWord(game), repeat: line.length -1, callbackScope: this});

        //  Advance to the next line
        lineIndex++;
    } else{
        textDisplayDone = true;
        button1.visible =! button1.visible;
        button2.visible =! button2.visible;
    }
}

function nextWord(game) {

    //text1.y -= 0.8;

    //  Add the next word onto the text string, followed by a space
    if(line[wordIndex]) {
        text1.text = text1.text.concat(line[wordIndex]);
    }

    //  Advance the word index to the next word in the line
    wordIndex++;

    //  Last word?
    if (wordIndex === line.length)
    {
        //  Add a carriage return
        text1.text = text1.text.concat("\n");

        console.log(game);

        //  Get the next line after the lineDelay amount of ms has elapsed
        game.time.addEvent({ delay: lineDelay, callback: () => nextLine(game), callbackScope: this});
        console.log(game + "passed");
        //nextLine(game);  //just trying to get it to work... go back to game.time
    }

}

function actionOnClick1 (game) {
    
    //transition physics 
    //game.impact.add.body(text1.x, text1.y).setGameObject(text1).setActiveCollision().setVelocity(0, -300)
    //this.impact.add.body(100, 200).setGameObject(text1).setActiveCollision().setVelocity(0, 200).setBounce(1);
    
    textDisplayDone = false
    text1.text = "";
    text1.y = 300;
    button1.text = "";
    button2.text = "";
    currentDecision = 1;
    line = [];
    wordIndex = 0;
    lineIndex = 0;
    nextLine(game);
}

function actionOnClick2 (game) {

	textDisplayDone = false
    text1.text = "";
    text1.y = 300;
    button1.text = "";
    button2.text = "";
    currentDecision = 2;
    line = [];
    wordIndex = 0;
    lineIndex = 0;
    nextLine(game);
}

function actionOnHover1 (game){
    button1.setStyle({ fill: '#ff0'});
}

function actionOnHover2 (game){
    button2.setStyle({ fill: '#ff0'});
}

function actionHoverOut1 (game){
    button1.setStyle({ fill: '#c51b7d'});
}

function actionHoverOut2 (game){
    button2.setStyle({ fill: '#c51b7d'});
}


