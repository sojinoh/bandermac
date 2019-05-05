var story = {
    "Start": {
        events: [
            //[//scene 1 (index:0)   [A = audio; V = visual effect]
            //A:creepy.wav audio
            //V: Effect: blink and sway
            new TextEvent("Your eyes gradually open", {partDelay: 60}),
            new TextEvent("as you slowly float into consciousness.", {}),
            //A: creepy.wav audio continues
            new TextEvent("                     ", {}),
            new TextEvent("With your head pounding", {}),
            new TextEvent("you realize you are lying flat on your back in the middle of Smail gallery. ", {}),
            //A: heartbeat audio
            //V: Effect: sway stops; shake w heartbeat
            new TextEvent("                     ", {}),
            new TextEvent("You cannot remember who you are or what happened to you.", {}),
            new TextEvent("You glance to the backdoors only to realize it is pitch black outside.", {}),
            //Effect: fade
            new TextEvent("                     ", {}),
            new TextEvent("There is an eerie stillness to the place.", {}),
            //Audio: silence (stop creepy)
            //Effect: pause 2 seconds
            new TextEvent("                     ", {}),
            new TextEvent("The building itself is completely dark", {}),
            new TextEvent("except for a light emanating from the top floor.", {}),
            //[A: light buzzing, creepy; V: flash/light top right].
            new TextEvent("                     ", {}),
            new TextEvent("Suddenly you hear a crash coming downstairs from the geology wing.", {}),
            // [A: crash, glass shatter; V: shake]
        ],
        decisions: [
            {text: "Go to the top floor", scene: "top-floor"}   //A:footsteps
            {text: "Go to the Geology wing", scene: "geology"}  //A: footsteps
        ]
    },

    "top-floor": {
        events: [    //scene 2a
            //[A: heartbeat; creepy V: slight sway then pause]
            new TextEvent("You stand carefully.", {}),
            new TextEvent("                     ", {}),
            //[A: footsteps, creepy; V: scroll up and shake]
            new TextEvent("You feel slightly off balance as you walk up the main staircase to the third floor.", {}),
            new TextEvent("                     ", {}),
            new TextEvent("Sitting at the one of the circular tables of the top floor is a figure of a man.", {}),
            //A: heartbeat, creepy, shriek; V: zoom in (figure?)]
            new TextEvent("                     ", {}),
            new TextEvent("From his young features, you guess he must be a student.", {}),
            new TextEvent("You walk over to him.", {}),
            //[A: footsteps; V: pause?]

            //[A: silence; V: text message style (pop from side?) (if time?)]
            new TextEvent("Hello.", {}),
            new TextEvent("                     ", {}),
            new TextEvent("”What do you want?” he grumbles. Not looking up from the molecule he’s drawing.", {}),
            new TextEvent("                     ", {}),
            new TextEvent("“I’m… I woke up in Smail and…”", {}),
            new TextEvent("                     ", {}),
            new TextEvent("That gets his attention. He smirks.", {}),
            new TextEvent("                     ", {}),
            new TextEvent("“Oh it’s you. She told me to me tell you to go as far below as you can. And take this.”", {}),
            new TextEvent("                     ", {}),
            new TextEvent("He hands you an orange.", {}),
            //  [A: thump/hand noise]
            new TextEvent("                     ", {}),
            new TextEvent("“What? What am I supposed to do with this?”", {}),
            new TextEvent("                     ", {}),
            new TextEvent("He’s no longer paying attention to you.", {}),
            new TextEvent("Below? You wonder to yourself.", {}),
            new TextEvent("Below what?", {}),
            new TextEvent("                     ", {}),
            new TextEvent("You start walking downstairs", {}),
            //[A: footsteps; V: scroll]
            new TextEvent("                     ", {}),
            new TextEvent("You walk all the way down to the bottom floor.", {}),
            //  [A: creak/crack;]
            new TextEvent("Is that what he meant? You start to wander.", {}),
            new TextEvent("                     ", {}),
            new TextEvent("You end up in a old part of the building, down a hallway you didn’t know existed.", {}),
            //[A: creepy, door hinge]
            new TextEvent("A small door is open at the end of it you crawl through.", {}),
        ],
        decisions: [
            {text: "Crawl through", scene: "tunnels"}   //[A: shuffle; V: enter? (text towards screen (3D?))]
        ]
    },



    //********Need to fix way to cause new line other than the "new TextEvent("                     ", {}),"

    "geology": {
        events: [//scene 2b
            new TextEvent("You stand carefully.", {}),
            //[A: heartbeat; creepy V: slight sway then pause]
            new TextEvent("You feel slightly off balance as you walk down the stairs towards the crash.", {}),
            // [A: footsteps, creepy; V: scroll down and shake]
            new TextEvent("                     ", {}),
            new TextEvent("As you come closer, you notice shards of glass scattered around a case containing a dinosaur skull.", {}),
            //[A: glass shuffle, slight growl;]
            new TextEvent("The case is broken, and you notice a note pinned between the dinosaur’s teeth.", {}),
            new TextEvent("You pick up the note.", {}),
            //[A: paper flutter; V: quick pause]
            new TextEvent("The notes reads, “They who hath awoken, hath stumbled upon the broken.", {}),
            new TextEvent("Here upon these bones shall lead you deep into the unknown. Follow the red or suffer with dread.”", {}),
            //[A: paper flutter; V: pause]
            new TextEvent("You wonder what William Shakespeare was doing in OLRI.", {}),
            new TextEvent("You also notice a trail of blood leading towards the staircase.", {}),
            //[A: water drip;]

            new TextEvent("You follow it and end up in a old part of the building, down a hallway you didn’t know existed.", {}),
            //[A: footsteps;]
            new TextEvent("Along the way, you notice an orange and pick it up.", {}),
            //[A: pick up (hand noise);]
            new TextEvent("It might be a clue.", {}),
            //[A: door hinge creak; V: scroll]
            new TextEvent("A small door opens at the end of the hallway, you crawl through.", {}),
        ],
        decisions: [
            {text: "Crawl through", scene: "tunnels"}   //[A: shuffle; V: enter? (text towards screen (3D?))]
        ]
    },

    "tunnels": {
        events: [ //scene 3
            //[A: water drip, creepy, creaks; V: darkness/nothing]
            new TextEvent("Inside the door, you see a vast, cobwebbed tunnel.", {}),
            //[A: (same as previous) + groan/noise; V: pause, shake]
            new TextEvent("As you travel further into the tunnel, it begins smelling musty and damp.", {}),
            //[A: footsteps; V: scroll]
            new TextEvent("It looks like this place hasn’t been touched in years, besides for some recent footprints ahead. ", {}),
            new TextEvent("Eventually, you notice something on the wall ahead. As you get closer, you become shocked and start shaking with fear. ", {}),
            //[A: footsteps, (sudden noise (dun dun dun); V: shake text after displayed]
            new TextEvent("You see, “Drink blood” smeared on the wall with seemingly fresh blood.", {}),
            //[A: drip]
            new TextEvent("Your world seems to be closing in and you feel compelled to touch the bloody wall.", {}),
            //[A: heartbeat; V: zoom in]
            new TextEvent("Do you touch it or leave it alone?", {}),
        ],
        decisions: [
            {text: "Touch it", scene: "stonedoor"}, //[A: heartbeat then rumble; V: fade to black, slight shake]
            {text: "Leave it alone", scene: "aloneKO"}   //[A: shake sound; V: shake then fade to black]
        ]

    },

    "stonedoor": {
        events: [
            new TextEvent("After touching the door, the tunnel starts to rumble.", {}),
            //[A: rumbling; V: shake]
            new TextEvent("Suddenly, a hidden stone door opens from where you touched it.", {}),
            //[A: stone sliding, rumbling;, V:slight shake after displayed]
            new TextEvent("You fear you are done for if you stay.", {}),
            new TextEvent("You want to go inside, but you are afraid and might want to stay outside.", {}),

            //
        ],
        decisions: [
            {text: "Go inside", scene: "devgarden"}, //[A: footsteps, rumbling; V: ???]
            {text: "Stay outside", scene: "aloneKO"}, //[A: rumbling, heartbeat, doom; V: shake, fade to black]
        ]
    },

    "aloneKO": {
        events: [
            //[A: rumbing, creepy]
            new TextEvent("You start to feel afraid and confused.", {}),
            new TextEvent("Your head is pounding.", {}),
            //[A: pounding sound; V: text pounds (heartbeat-like)]
            new TextEvent("You walk past the bloody wall.", {}),
            //[A: footsteps; V: scroll]
            new TextEvent("A few more steps and you foot presses down on a slightly discolored tile.", {}),
            //[A: footsteps, diff stone sliding/lever/platepress,; V: scroll]
            new TextEvent("The tile lowers and the tunnel begins to shake.", {}),
            //[A: shaking; V: shake]
            new TextEvent("Rocks and rubble fall from the dark ceiling.", {}),
            //[A: rocks falling, crashes; V: scroll]
            new TextEvent("You try to run, but you are too late.", {}),
            new TextEvent("You are crushed in the rubble.", {}),
            //[A: crash, sound muffled to silence; V: fades to black then shows -->] GAME OVER
        ],

        decisions: [
           //GAME OVER SCREEN
        ]
    },

    "devgarden": {
        events: [
            //[A: water drip;]
            new TextEvent("Inside the stone door is a small crawl space.", {}),
            new TextEvent("After crawling for what feels like hours, you reach a hatch and climb out.", {}),
            //[A: crawl/dragging, shuffle, hatch/door opens; V: scroll up]
            new TextEvent("You realize you are in the basement of the library.", {}),
            new TextEvent("It is eerily quiet, even for a library, and only the backup generator lights are on.", {}),
            //[A: silence, then whirring; V: slight light]
            new TextEvent("You walk upstairs and hear a sound coming from the second floor.", {}),
            //[A: footsteps, typing/clatter; V: scroll up]
            new TextEvent("As you walk up, the clattering sound gets louder.", {}),
            //[A: louder clattering]
            new TextEvent("You notice a figure in the dimly lit idea lab. For some reason, this person seems familiar.", {}),
            //[V: small zoom in and out]
            new TextEvent("Somehow, you remember that this person’s name is Paul, but that is all that you remember.", {}),
            new TextEvent("As you get closer, you realize that Paul is frantically typing on an unconnected keyboard.", {}),
            //[A: footsteps, clattering/typing; V: bigger text?]
            new TextEvent("He stands there typing, staring straight into nothingness with bloodshot eyes.", {}),
            new TextEvent(" He is muttering… “Devvvv Gardennn. Deeeeev Garden.”", {}),
            //[A: muttering/whispers
            new TextEvent("He appears to be in a trance.", {}),
            //[V: Hypnotic movement]
            new TextEvent("You try to get his attention, but it is no use, he is transfixed.", {}),
            new TextEvent("You remember that you picked up an item earlier.", {}),
            new TextEvent("You could take out the item.", {}),
            new TextEvent("Or Paul might be a lost cause.", {}),
            new TextEvent("You could move on and hold on to the item.", {}),
        ],
        decisions: [
            {text: "Take out the item", scene: "item"}, //[A: shuffling/grabbing; V: ??]
            {text: "Move on", scene: "moveon"}, //[A: footsteps; V: scroll horizontal]
        ]
    },

    "item": {
        events: [  //scene 6a
            new TextEvent("You remember the orange you picked up earlier and take it out.", {}),
            //[A: shuffling/grabbing;]
            new TextEvent("You hover it under Paul’s nose and although he is still staring, you notice him wince whenever the orange gets close.", {}),
            //[A: wind/woosh?; V: slight pulse (twice)]
            new TextEvent("You begin to peel the orange, and Paul immediately snaps out of it and lets out a disgusted gasp, “agh, get that away from me!”", {}),
            //[A: groan/gasp; V: pulse/quick shake]
            //[V: text message]
            new TextEvent("You ask, “Who am I? What is going on at Macalester? Why is everything so weird?”", {}),
            new TextEvent("Paul smiles, “Ah, what you want is a clue. Solve this riddle and there might be an answer just for you.”", {}),
            new TextEvent("You sigh.", {}),
            //[A: sigh; V: pause]
            new TextEvent("Paul continues, “A first-year’s true path. Where one winds up at last. To strike or to hit. Only happiness and joy be fit.”", {}),
            new TextEvent("You think for a moment.", {}),
            //[A: silence, hmm?; V: game pauses 2.5 seconds]
            new TextEvent("Is he talking about the bell or the Dupre median?", {}),
        ],
        decisions: [
            {text: "The bell", scene: "bell"}, // [A: small ding; V: fade to black]
            {text: "The Dupre median", scene: "median"}, //[A: footsteps; V: fade to black]
        ]
    },

    //stopped at scene 6a (need to do moveon (its options) and (bell/median paths)

    "moveon": {
        events: [
            new TextEvent(" ", {}),
        ],
        decisions: [
            {text: "button", scene: "next"},
            {text: "button", scene: "next"},
        ]
    },

    "scene": {
        events: [
            new TextEvent(" ", {}),
        ],
        decisions: [
            {text: "button", scene: "next"},
            {text: "button", scene: "next"},
        ]
    },


    "scene": {
        events: [
            new TextEvent(" ", {}),
        ],
        decisions: [
            {text: "button", scene: "next"},
            {text: "button", scene: "next"},
        ]
    },


    "scene": {
        events: [
            new TextEvent(" ", {}),
        ],
        decisions: [
            {text: "button", scene: "next"},
            {text: "button", scene: "next"},
        ]
    },


    "scene": {
        events: [
            new TextEvent(" ", {}),
        ],
        decisions: [
            {text: "button", scene: "next"},
            {text: "button", scene: "next"},
        ]
    },


}