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

var content = [
    [//Scene 1 Amnesia:
        "Your eyes gradually open \nas you slowly float into consciousness.\n\n\nWith your head pounding",
    ],

    [//Scene 2a. Top

    ],

    [//Scene 2b. Dino (1)

    ],

    [//Scene 2b. Dino (2)
       
    ]

];


var currentLine = [];
var textOfLines = [];

var wordIndex = 0;
var lineIndex = 0;
var currentDecision = 0;

var wordDelay = 100;
var lineDelay = 100;
var textDisplayDone = false;


function preload(){

    //load the audio asset
    this.load.audio('theme','assets/creepy.wav');
    this.load.audio('crash','assets/crash.wav');

}


function create() {

    var theme = this.sound.add('theme');
    theme.play();

    nextLine(this);

}

function nextLine(game) {

    textOfLines[lineIndex] = new TextEvent (line = '');
    textOfLines[lineIndex].addText(game);

    if (lineIndex != content[currentDecision].length) {

        //  Split the current line on spaces, so one word per array element
        currentLine = content[currentDecision][lineIndex].split('');

        //  Reset the word index to zero (the first word in the line)
        wordIndex = 0;

        //  Call the 'nextWord' function once for each word in the line (line.length)
        game.time.addEvent({ delay: wordDelay, callback: () => nextWord(game), repeat: currentLine.length -1, callbackScope: this});

    } else{
        textDisplayDone = true;
    }
}

function nextWord(game) {

    //  Add the next word onto the text string, followed by a space
    if(currentLine[wordIndex]) {
        textOfLines[lineIndex].line = textOfLines[lineIndex].line.concat(currentLine[wordIndex]);
        textOfLines[lineIndex].addText(game);

    }

    //  Advance the word index to the next word in the line
    wordIndex++;

    //  Last word?
    if (wordIndex === currentLine.length)
    {
        //  Add a carriage return
        textOfLines[lineIndex].line = textOfLines[lineIndex].line.concat("\n");


        //  Get the next line after the lineDelay amount of ms has elapsed
        game.time.addEvent({ delay: lineDelay, callback: () => nextLine(game), callbackScope: this});

        //  Advance to the next line
        lineIndex++;
    }

}