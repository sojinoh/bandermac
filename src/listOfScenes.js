var story = {

    "Start": {
        events: [
            //[//scene 1  [A = audio; V = visual effect]
            //V: Effect: blink and sway
            themeStart = new AudioEvent("creepy", { loop: true }),
            new AudioEvent("heartbeat2"),
            new TextEvent("Your eyes gradually open", { partDelay: 60 , fade: true, sway: true}),
            new TextEvent("as you slowly float into consciousness.", {sway: true}),
            new TextEvent("    ", {}),
            new TextEvent("With your head pounding", { shake: true}),
            new TextEvent("you realize you are lying flat on your back in the middle of Smail gallery. ", {shake: true}),
            new AudioEvent("heartbeat2"),  //V: Effect: sway stops; shake w heartbeat
            new TextEvent("You cannot remember who you are or what happened to you.",),
            new TextEvent("    ", {}),
            new TextEvent("You glance to the backdoors only to realize it is pitch black outside."),
            new TextEvent("    ", { partDelay: 40 }),
            new TextEvent("There is an eerie stillness to the place.", { partDelay : 50 }),
            new TextEvent("                ", {partDelay: 20}),
            new TextEvent("The building itself is completely dark", {}),
            new AudioEvent("lightbuzz", { volume: 0.3 }),
            new TextEvent("except for a light emanating from the top floor.", { flash: true }), //[V: flash/light top right].
            new TextEvent("             ", {partDelay: 30}),
            new AudioEvent("glass"),
            new TextEvent("             ", {partDelay: 30}),
            new TextEvent("Suddenly you hear a crash coming downstairs from the geology wing.", { partDelay: 25 }),
            // [A: crash, glass shatter; V: shake]
        ],
        decisions: [
            {text: "Go to the top floor", scene: "top-floor"},   //A:footsteps
            {text: "Go to the Geology wing", scene: "geology"}  //A: footsteps
        ]
    },
    
    "top-floor": {
        events: [    //scene 2a
                //scene 2a
            new AudioEvent("creepy", { loop: true }),
            new AudioEvent("heartbeat2"),
            //[A: heartbeat; creepy V: slight sway then pause]
            new TextEvent("You stand carefully.", {scrollSpeed: 0.025}),
            //[V: scroll up and shake]
            footstepsTopFloor = new AudioEvent("footsteps"),
            new TextEvent("You feel slightly off balance as you walk up the main staircase to the", { shake: true, scrollSpeed: 0.025 }),
            new TextEvent("third floor.    ", {scrollSpeed: 0.025}),
            new TextEvent("                ", {partDelay: 50, scrollSpeed: 0.025}),
            new TextEvent("Sitting at one of the circular tables of the top floor is a figure of a man.", {scrollSpeed: 0.025}),
            //A: heartbeat, creepy, shriek; V: zoom in (figure?)]
            new AudioEvent('heartbeat'),
            new AudioEventAction(footstepsTopFloor,'pause'),
            new TextEvent("From his young features, you guess he must be a student.", {scrollSpeed: 0.025}),
            new TextEvent("                ", {partDelay: 50, scrollSpeed: 0.025}),
            new TextEvent("You walk over to him.", {scrollSpeed: 0.025}),

            //[V: pause?]
            //[A: silence; V: text message style (pop from side?) (if time?)]
            new TextEvent("'Hello...'", { partDelay: 60, scrollSpeed: 0.025 }),
            new AudioEvent('grumble'),
            new TextEvent("\"What do you want?\" he grumbles, not looking up from the molecule he\'s drawing.", {partDelay: 50, scrollSpeed: 0.025}),
            new TextEvent("'I... I woke up in Smail and...\"'", {partDelay: 55, scrollSpeed: 0.025}),
            new TextEvent("                ", {partDelay: 50, scrollSpeed: 0.025}),
            new TextEvent("That gets his attention. He smirks.", {scrollSpeed: 0.025}),
            new AudioEvent("hmm"),
            new TextEvent("\"Oh it\'s you. She told me to me tell you to go as far below as you can. And take this.\"", {partDelay: 50, scrollSpeed: 0.025}),
            new TextEvent("He hands you an orange.", {scrollSpeed: 0.025}),
            //  [A: thump/hand noise]
            new TextEvent("\"What? What am I supposed to do with this?\"", {partDelay: 50, scrollSpeed: 0.025}),
            new TextEvent("                ", {scrollSpeed: 0.025}),
            new TextEvent("He\'s no longer paying attention to you.", {scrollSpeed: 0.025}),
            new TextEvent("                               ", {partDelay: 50, scrollSpeed: 0.025}),
            new TextEvent("\"Below?\" You wonder to yourself.", {partDelay: 50, scrollSpeed: 0.025}),
            new TextEvent("Below what?", { scrollSpeed: 0.025}),
            new TextEvent("You start walking downstairs", {partDelay: 50, scrollSpeed: 0.017}),
            new AudioEventAction(footstepsTopFloor, 'resume'),    //[V: scroll]
            new TextEvent("                       ", {partDelay: 50, scrollSpeed: 0.025}),
            new TextEvent("You walk all the way down to the bottom floor.", {partDelay: 50, scrollSpeed: 0.025}),
            new TextEvent("\"Is that what he meant?\" You start to wander.", {scrollSpeed: 0.025}),
            new TextEvent("                            ", {partDelay: 50, scrollSpeed: 0.025}),
            new TextEvent("You end up in a old part of the building, down a hallway you didn\'t know existed.", {partDelay: 50, scrollSpeed: 0.025}),
            new AudioEventAction(footstepsTopFloor, 'pause'),   
            //[A: creepy, door hinge]
            new TextEvent("A small door is open at the end of it you crawl through.", {scrollSpeed: 0.025})
        ],
        decisions: [
            {text: "Crawl through", scene: "tunnels"},   //[A: shuffle; V: enter? (text towards screen (3D?))]
            {text: "", scene: ""}
        ]
    },
    
    "geology": {
        events: [//scene 2b
            new AudioEvent("creepy", { loop: true }),
            new TextEvent("You stand carefully.", {}),
            new TextEvent("                          ", {partDelay : 50}),
            new AudioEvent("heartbeat2"),
            new TextEvent("You feel slightly off balance as you", { shake: true }),
            new TextEvent("walk down the stairs towards the crash.", {}),
    
            // [V: scroll down and shake]
            new AudioEvent("footsteps"),
            new TextEvent("    ", {}),
            glassshards = new AudioEvent('shardofglass', {loop: true}),
            new TextEvent("As you come closer, you notice shards of glass scattered around a case containing a dinosaur skull.", {}),
            new AudioEventAction(glassshards,'stop'), //[A: glass shuffle, slight growl;]
            new TextEvent("The case is broken, and you notice a note pinned between the dinosaur\'s teeth.", {}),
            new TextEvent("You pick up the note.", { partDelay: 55 }),
            //[A: paper flutter; V: quick pause]
            new TextEvent("The notes reads, \"They who hath awoken, hath stumbled upon the broken.", {partDelay: 55}),
            new TextEvent("Here upon these bones shall lead you deep into the unknown. Follow the red or suffer with dread.\"", {partDelay: 50}),
            new TextEvent("                    ", {partDelay: 50}),
            new TextEvent("You wonder what William Shakespeare was doing in OLRI.", {}),
            new TextEvent("You also notice a trail of blood leading towards the staircase.", {}),
            new AudioEvent('blooddrip'), //[A: water drip;]
            new TextEvent("You follow it and end up in a old part of the building, down a hallway you didn\'t know existed.", {}),
            new AudioEvent("footsteps"),
            new TextEvent("Along the way, you notice an orange and pick it up.", {}),
            //[A: pick up (hand noise);]
            new TextEvent("It might be a clue.", {}),
            //[A: door hinge creak; V: scroll]
            new TextEvent("A small door opens at the end of the hallway, you crawl through.", {})
        ],
        decisions: [
            {text: "Crawl through", scene: "tunnels"},  //[A: shuffle; V: enter? (text towards screen (3D?))]
            {text: "", scene: ""}
        ]
    },
    
    "tunnels": {
        events: [ //scene 3
            //[A: water drip, creepy, creaks; V: darkness/nothing]
            new TextEvent("Inside the door, you see a vast, cobwebbed tunnel.", {}),
            //[A: (same as previous) + groan/noise; V: pause, shake]
            new TextEvent("As you travel further into the tunnel, it begins smelling musty and damp.", {}),
            //[A: footsteps; V: scroll]
            new TextEvent("It looks like this place hasn\'t been touched in years, besides for some recent footprints ahead. ", {}),
            new TextEvent("Eventually, you notice something on the wall ahead. As you get closer, you become shocked and start shaking with fear. ", {}),
            //[A: footsteps, (sudden noise (dun dun dun); V: shake text after displayed]
            new TextEvent("You see, \"Drink blood\" smeared on the wall with seemingly fresh blood.", {}),
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
            {text: "", scene: ""},
            {text: "", scene: ""}
           //GAME OVER SCREEN
        ]
    },

    "devgarden": {
        events: [
            new AudioEvent("creepy"),
            new AudioEvent("water"),
            new TextEvent("    ", {}),
            new TextEvent("    ", {}),
            new TextEvent("After crawling for what feels like hours, you reach a hatch and climb out.", {}),
            new AudioEvent("hatch"),
            new TextEvent("    ", {}),
            new AudioEvent("footsteps"),
            new TextEvent("You realize you are in the basement of the library.", {partDelay: 60}),
            new TextEvent("It is eerily quiet, even for a library, and only the backup generator lights are on.", {partDelay: 50}),
            new TextEvent("    ", {flash: true}),
            new AudioEvent("lightbuzz", { volume: 0.3 }),
            new TextEvent("You walk upstairs and hear a sound coming from the second floor.", {partDelay: 50}),
            new AudioEvent("typing", { volume: 0.3 }),
            //[A: footsteps, typing/clatter; V: scroll up]
            new TextEvent("As you walk up, the sound gets louder.", {}),
            //[A: louder clattering]
            new AudioEvent("typing", { volume: 0.5 }),
            new TextEvent("                   ", {partDelay:80}),
            new TextEvent("You notice a figure in the dimly lit idea lab.", {partDelay: 50, scrollSpeed: 0.02}),
            new TextEvent("For some reason, this person seems familiar.", {partDelay: 50, scrollSpeed: 0.021}),
            new TextEvent("                ", {partDelay: 100, scrollSpeed: 0.023}),
            //[V: small zoom in and out]
            new TextEvent("Somehow, you remember that this person\'s name is Paul, but that is all that you remember.", {scrollSpeed: 0.025}),
            new TextEvent("                ", {partDelay: 100, scrollSpeed: 0.027}),
            new AudioEvent("typing", { volume: 0.7 }),
            new TextEvent("As you get closer, you realize that Paul is frantically typing on an unconnected keyboard.", {scrollSpeed: 0.03}),
            //[A: footsteps, clattering/typing; V: bigger text?]
            new TextEvent("                ", {partDelay: 100}),
            new TextEvent("He stands there typing, staring straight into nothingness with bloodshot eyes.", {}),
            new TextEvent("He is muttering... \"Devvvv Gardennn. Deeeeev Garden.\"", {partDelay: 65}),
            //[A: muttering/whispers
            new TextEvent("He appears to be in a trance.", {partDelay: 65, sway: true}),
            new TextEvent("                ", {partDelay: 100}),
            new TextEvent("You try to get his attention, but it is no use, he is transfixed.", {}),
            new TextEvent("                ", {partDelay: 120}),
            new TextEvent("You remember that you picked up an orange earlier.", {}),
            new TextEvent("                ", {partDelay: 120}),
            new TextEvent("You could take out the orange.", {}),
            new TextEvent("Or Paul might be a lost cause. You could move on and keep the orange.", {}),
            new TextEvent("", {}),
            new AudioEvent("creepy"),

        ],
        decisions: [
            {text: "Take out the orange", scene: "orange"}, //[A: shuffling/grabbing; V: ??]
            {text: "Move on", scene: "squirrels"}, //[A: footsteps; V: scroll horizontal]
        ]
    },

    "orange": {
        events: [  //scene 6a
            new AudioEvent("creepy", { volume: 0.4 }),
            new TextEvent("                ", {partDelay: 60}),
            new TextEvent("                ", {partDelay: 60}),
            new TextEvent("You reach into your bag and pull out the orange.", {}),
            //[A: shuffling/grabbing;]
            new AudioEvent("heartbeat2"),
            new TextEvent("                ", {partDelay: 70}),
            new TextEvent("You hover it under Paul\'s nose.", {partDelay:55}),
            new TextEvent("Although he is still staring, you notice him wince    "),
            new AudioEvent("inhale"),
            new TextEvent("whenever the orange gets close.", {shake:true}),
            new TextEvent("                ", {partDelay: 70}),
            //[A: wind/woosh?; V: slight pulse (twice)]
            new TextEvent("You begin to peel the orange...", {partDelay: 55}),
            new AudioEvent("grunt"),
            new TextEvent("Paul immediately snaps out of it and lets out a disgusted gasp, \"agh, get that away from me!\"", {partDelay: 45}),
            new TextEvent("                ", {partDelay: 110}),
            //[A: groan/gasp; V: pulse/quick shake]
            new TextEvent("You ask, \"Who am I? What is going on at Macalester? Why is everything so weird?\"", {partDelay: 45}),
            new TextEvent("Paul smiles, \"Ah, what you want is a clue. Solve this riddle and there might be an answer just for you.\"", {partDelay: 45}),
            new TextEvent("You sigh.", {partDelay: 70}),
            new AudioEvent("sigh"),

            new TextEvent("                ", {partDelay: 110}),
            //[A: sigh; V: pause]
            new TextEvent("Paul continues,", {}),
            new TextEvent("\"A first-year\'s true path. Where one winds up at last. To strike or to hit. Only happiness and joy be fit.\"", {partDelay: 65}),
            new TextEvent("                ", {partDelay: 90}),
            new TextEvent("You think for a moment.", {}),
            new TextEvent("                ", {partDelay: 110}),
            new TextEvent("                ", {partDelay: 110}),
            //[A: silence, hmm?; V: game pauses 2.5 seconds]
            new TextEvent("Is he talking about the Bell or the Dupre median?", {}),
        ],
        decisions: [
            {text: "The Bell", scene: "bell"}, // [A: small ding; V: fade to black]
            {text: "The Dupre median", scene: "median"}, //[A: footsteps; V: fade to black]
        ]
    },

    "squirrels": {
        events: [
            new AudioEvent("creepy", {volume: 0.4}),
            new AudioEvent("lightbuzz", {volume: 0.1}),
            new TextEvent("                ", {partDelay: 60}),
            new TextEvent("                ", {partDelay: 70}),
            new TextEvent("You decide to leave the orange in your pocket, you might need it later.", {partDelay: 45}),
            new TextEvent("                ", {partDelay: 75}),
            new TextEvent("Paul mutters something about needing to check Slack, still staring into the abyss.", {}),
            new TextEvent("                ", {partDelay: 75}),
            new TextEvent("The lights flicker and go out for a second.", {fade: true, flash: true}),
            new TextEvent("                ", {flash: true, partDelay: 100}),
            new AudioEvent("bang", {volume: 0.4}),
            new TextEvent("Suddenly you hear a bang, Paul\'s eyes fixate on you, and he yells \"THEY\'RE COMING! RUN!\"", {partDelay: 45, shake: true}),
            new TextEvent("                ", {partDelay: 75}),
            //[A: bang, (sudden noise?), yell?; V: one big shake]
            new AudioEvent("squirrel"),
            new AudioEvent("squirrel"),
            new TextEvent("Out of nowhere, squirrels climb out from bookcases in every direction and run towards you.", {}),
            new AudioEvent("squirrel"),
            //[A: clatter, squirrel scatter, mini footsteps, heartbeat V: ???]
            new TextEvent("You grab Paul\'s sleeve and try to get him to follow you, but it is no use.", {}),
            new TextEvent("                ", {partDelay: 60}),
            new TextEvent("Squirrels start to pounce on Paul, and he weakly says,", {}),
            new TextEvent("\"Go on without me... I... still... have to fix... the Bonsai UI... Go to... the LC\"", {partDelay: 50}),
            new TextEvent("                ", {partDelay: 60}),
            new TextEvent("                ", {partDelay: 60}),
            new TextEvent("Do you run away or try to save Paul?", {}),
            //[A: squirrel noises, thuds, yelp? ]
        ],
        decisions: [
            {text: "Run away", scene: "runaway"}, //[A: running; V: ???]
            {text: "Save Paul", scene: "savepaul"}, //[A: bang/clash; V: ???]
        ]
    },

    "runaway": {
        events: [ //scene 6.1
            new AudioEvent("creepy", {loop: true}),
            new TextEvent("                ", {partDelay: 60}),
            new TextEvent("                ",),
            new TextEvent("You listen to Paul and run away.", {}),
            runfoot = new AudioEvent("footsteps", {rate: 1.75}),
            //[A: running; V: scroll fast]
            new TextEvent("                ", {partDelay: 60, scrollSpeed: 0.05}),
            new TextEvent("                ", {partDelay: 60, scrollSpeed: 0.055}),
            new TextEvent("                ", {partDelay: 60, scrollSpeed: 0.055}),

            new AudioEventAction(runfoot,'stop'),
            new TextEvent("You run without looking back, and end up in the Leonard Center.", {scrollSpeed: 0.027}),
            new TextEvent("                ", {partDelay: 60, scrollSpeed: 0.03}),
            new TextEvent("The building is empty and dark, but you can still hear ", {scrollSpeed: 0.023}),
            new AudioEvent("moan"),
            new TextEvent("the ghostly grunts of past football players coming from the gym.", {flash: true, scrollSpeed: 0.022}),
            new TextEvent("                ", {partDelay: 60, scrollSpeed: 0.027}),
            new TextEvent("You wonder why Paul would want you to come to the LC.", {scrollSpeed: 0.023}),
            new TextEvent("                ", {partDelay: 65, scrollSpeed: 0.025}),
            //[A: background noise; V: pause]
            new TextEvent("You search for clues.", {partDelay: 70}),
            new TextEvent("As you\'re walking, you miss a wet floor sign and you slip and hit your head.     ", {partDelay: 65, scrollSpeed: 0.020}),
            new AudioEvent("thud"),
            new TextEvent("                ", {shake: true, scrollSpeed: 0.020}),
            new TextEvent("After a few seconds, you come to and stand back up.", {scrollSpeed: 0.020}),
            new TextEvent("                ", {partDelay: 60, scrollSpeed: 0.020}),
            //[A: stand up;]
            new TextEvent("Somehow, hitting your head helped your memory a bit.", {scrollSpeed:0.022, partDelay: 60}),
            new TextEvent("You remember that you took a software class with Paul.", {scrollSpeed: 0.020, partDelay: 60}),
            new TextEvent("                ", {partDelay: 60}),
            new TextEvent("Maybe something from his class could help you figure out why he sent you here.", {partDelay: 60, scrollSpeed: 0.018}),
            new TextEvent("You ponder for a moment.", {partDelay: 70, scrollSpeed: 0.019}),
            new AudioEvent("hmm"),
            new TextEvent("                ", {partDelay: 60, scrollSpeed: 0.019}),
            new TextEvent("                ", {partDelay: 60, scrollSpeed: 0.018}),
            //[ V: pause text 3 seconds]
            new TextEvent("You remember Paul would often talk about the minimum viable product... the MVP.              ", {partDelay: 67}),
            new TextEvent("You got it!", {partDelay: 70}),
            new TextEvent("                ", {partDelay: 60}),
            //[A: lightbulb/ding; V: light flash]
            new TextEvent("Where are the MVPs displayed at the LC? ", {partDelay: 60}),
            new TextEvent("                ", {partDelay: 60}),
            new TextEvent("                ", {partDelay: 60}),
            new TextEvent("Do you go to the Hall of Fame room or do you find the banners upstairs?", {partDelay: 50, scrollSpeed: 0.019}),
        ],
        decisions: [
            {text: "Hall of Fame room", scene: "halloffame"}, //[A: footsteps; V: scroll up/side]
            {text: "Banner upstairs", scene: "banner"}, //[A: footsteps; V: scroll up]
        ]
    },


    "savepaul": {
        events: [
            new AudioEvent("creepy", {loop: true}),
            new TextEvent("                ", {flash: true, partDelay: 60}),
            new TextEvent("                ", {flash: true, partDelay: 60}),
            new AudioEvent("squirrel"),
            //[A: clash, war, yell; V: flashes]
            new TextEvent("You run up to Paul and attempt to pull him away from the hounding squirrels.", {}),
            //[A: snarls; V: shakes]
            new TextEvent("You fend off the first wave of squirrels by swatting them with Paul\'s keyboard.", {}),
            //[A: sword clang, thuds, smacks; V: ???]
            new TextEvent("                ", {partDelay: 60}),
            new TextEvent("But more squirrels keep coming.", {}),
            new TextEvent("                ", {partDelay: 60}),
            new TextEvent("                ", {partDelay: 60}),
            //[A: continue audio V: quick pause]
            new TextEvent("After five minutes of fighting off the foamy-mouthed, bloodthirsty squirrels", {}),
            new TextEvent("you are covered in fur, sweat, and blood.", {}),
            new TextEvent("                ", {partDelay: 60}),
            new AudioEvent("heartbeat2"),

            //[A: panting, heartbeat]
            new TextEvent("Paul is sitting on the ground, oblivious to the situation, typing on his imaginary computer.", {}),
            //[A: finger thumps;]
            new TextEvent("A quiet minute passes and you think that everything has settled.", {}),
            new TextEvent("                ", {partDelay: 60}),
            new TextEvent("                ", {partDelay: 60}),
            //[A: silence; V: pause/slow scroll]
            new AudioEvent("bang"),
            new TextEvent("The floor begins to rumble, and squirrels pour from the ceiling and come from every imaginable direction.", {}),
            new TextEvent("                ", {partDelay: 60}),
            //[A: rumble, scurry, crash; V: shake]
            new TextEvent("You are overwhelmed, and your world fades to black. So much for being the hero.", {fade: true}),
            //[A: groan then silence ; V: fade to black] GAME OVER.
        ],
        decisions: [
            //GAME OVER SCREEN
            {text: "", scene: ""},
            {text: "", scene: ""}
        ]
    },


    "halloffame": {
        events: [
            new TextEvent("You turn on the light in the Hall of Fame room.", {}),
            //[A: lightswitch; V: light flicker]
            new TextEvent("You see various plaques, trophies, and team photos, and you begin to look around.", {}),
            new TextEvent("On the 1998 Cross Country MVP Plaque, you see a yellow note, \"You are the real MVP. You are the most viable product. You have been all along.\"", {}),
            //[A: paper flutter; V: zoom in on note text (or diff orientation)]
            new TextEvent("On the back it reads, \"Macalester is in grave danger and needs your help. Mac the Scot, the mascot, is trying to destroy Macalester.", {}),
            new TextEvent("He has gathered an army of squirrels and plans to brainwash the students and turn the campus into an evil fossil fuel fortress. Only you can stop him!\"", {}),
            //[A:silence; V: zoom out to normal]
            new TextEvent("Wow.", {}),
            new TextEvent("That is a lot to take in.", {}),
            //[ V: quick pause]
            new TextEvent("You hear a door creak from down the hall and footsteps coming your way.", {}),
            //[A: door creak, footsteps; V: quick shake]
            new TextEvent("Do you hide or run?", {}),
        ],
        decisions: [
            {text: "Hide", scene: "hidefame"}, //[A: shuffle; V: fade to black]
            {text: "Run", scene: "runfame"}, //[A: running; V: scroll]
        ]
    },

    "runfame": {
        events: [
            new TextEvent("You burst through the doors and send Mac\'s squirrels flying into the wall.", {}),
            //[A: door slam open, thuds; V: thud/shake]
            new TextEvent("You run out of the Hall of Fame room and see Mac chasing after you.", {}),
            //[A: running; V: scroll quick]
            new TextEvent("You run down the hall with Mac and his army of squirrels on your tail.", {}),
            //[A: running, heartbeat, scurrying; V: scroll]
            new TextEvent("You finally get some distance between the two of you and make a break for the doors.", {}),
            new TextEvent("In front of the doorway, you see a skateboard and a scooter propped up against the wall.", {}),
            new TextEvent("Maybe one of these could help you escape.", {}),
            //[A: panting; V: short pause]
            new TextEvent("You must choose quickly as you hear Mac gaining on you.", {}),
            new TextEvent("You think back to Paul, which would he prefer, the skateboard or the scooter?", {}),
            //[A: footsteps, suspenseful; V: pause before buttons]
        ],
        decisions: [
            {text: "Skateboard", scene: "skateboard"}, //[A: skateboard noise; V: scroll side quick]
            {text: "Scooter", scene: "scooter"}, //[A: scooter noise; V: scroll & fade]
        ]
    },

    "hidefame": {
        events: [
            new TextEvent("You hide in a closet in the back of the room.", {}),
            //[A: quiet shuffle, fumbling; V: darker?]
            new TextEvent("You are surrounded by sweaty uniforms and jockstraps.", {}),
            new TextEvent("You start to retch and want to leave, but you hear someone enter the room.", {}),
            //[A: retch?, footsteps/door; V: heartbeat pulse 2x]
            new TextEvent("You peek through the crack between the closet doors and see Mac the Scot standing in the center of the room.", {}),
            //[ V: peek?]
            new TextEvent("He makes a screeching noise and suddenly the room fills with squirrels.", {}),
            //[A: screech; V: text shakes]
            new TextEvent("Mac shouts, \"My minions... my beautiful, scurrying minions.", {}),
            new TextEvent("Tonight, while the students are preoccupied at Kagin, we shall strike hard and we shall strike fast.", {}),
            new TextEvent("We must surround the students and force them into our brainwashing facility in 10K, the Dupre basement.\"", {}),
            //[A: drumming/war beats, squirrel squeak/scurry; V: scroll]
            new TextEvent("As Mac rambles on, you are losing the fight against the smell.", {}),
            //[A: cough;]
            new TextEvent("You let out a cough.", {}),
            //[A: cough; V: shake then pause]
            new TextEvent("A few squirrels hear you, run over to the closet and scratch on the doors.", {}),
            //[A: scurry, scratching, heartbeat; V: ???]
            new TextEvent("Mac stops talking and walks towards your hiding spot.", {}),
            //[A: heartbeat, footsteps; V: pulse??]
            new TextEvent("You realize your time is running out.", {}),
            new TextEvent("You have two options, either run or fight.", {}),
        ],
        decisions: [
            {text: "Run", scene: "runfame"}, //[A: running, heartbeat; V: scroll fast]
            {text: "Fight", scene: "fightfame"}, //[A: bang; V: quick fade]
        ]
    },

    "banner": {
        events: [
            new TextEvent("You examine the team and MVP banners upstairs.", {}),
            new TextEvent("You try to look for clues in their names or something off that distinguishes one banner from the others.", {}),
            //[A: creaks, background clatter; V:??]
            new TextEvent("After circling the track and looking for clues for what seems like hours, you wonder if you made the wrong decision.", {}),
            new TextEvent("You could check out the Hall of Fame room or you could stay and search more.", {}),
        ],
        decisions: [
            {text: "Hall of Fame room", scene: "halloffame"}, //[A: footsteps; V: fade to black]
            {text: "Stay and search", scene: "staysearch"}, //[A: footsteps; V: ???]
        ]
    },


    "staysearch": {
        events: [
            new TextEvent("You continue to search until you become physically and mentally exhausted.", {}),
            //[A: deep breath, heartbeat?; V: fade in and out (not completely though), sway]
            new TextEvent("What a waste.", {}),
            new TextEvent("You decide to rest for a bit, having been overcome with exhaustion.", {}),
            //[A: yawn.sleep; V: fade like above]
            new TextEvent("The lights are flickering.", {}),
            //[A: light buzz; V: flicker]
            new TextEvent("Suddenly, you hear a door slam open.", {}),
            //[A: door slam; V: one shake]
            new TextEvent("From across the track, you see Mac the Scot marching towards you, holding bagpipes.", {}),
            //[A: march/stomp, scary music;]
            new TextEvent("Unsure of what to do and too shocked to move, you stand there like a deer caught in headlights.", {}),
            new TextEvent("[A: same sounds & bagpipe playing; V: pause]", {}),
            new TextEvent("As Mac gets closer, you shake with fear.", {}),
            //[A: bagpipes louder; V: small rapid shakes]
            new TextEvent("You bargain with yourself, \"maybe he is here to help.\"", {}),
            new TextEvent("Suddenly, the bagpipes stop.", {}),
            //[A: Silence; V: text fades]
            new TextEvent("Mac lifts up the bagpipes and strikes you over the head with them.", {}),
            //[A: bang/thud; V:  pulse]
            new TextEvent("Your world fades to black.", {}),
            //[A: silence; V: fade to black]GAME OVER
],
        decisions: [
            //GAME OVER SCREEN
            {text: "", scene: ""},
            {text: "", scene: ""}
        ]
    },

    "fightfame": {
        events: [
            new TextEvent("You burst through the doors and send Mac\'s squirrels flying into the wall.", {}),
            //[A: door slam open, thuds; V: thud/shake]
            new TextEvent("You charge towards Mac and he charges towards you.", {}),
            new TextEvent("You throw kicks and punches and so does he.", {}),
            //[A: fight sounds; V: shake and sway]
            new TextEvent("Luckily for him, his fluffy mascot outfit absorbs most of the blows.", {}),
            new TextEvent("You feel yourself losing the fight as Mac starts to overpower you.", {}),
            //[A: fighting; V: short pause]
            new TextEvent("With a final surge of adrenaline, you throw Mac off of you and onto the ground.", {}),
            //[A: grunt, thud; V:??]
            new TextEvent("His mascot head falls off and without looking you pull out the orange from earlier and hurl it at him.", {}),
            //[A: bounce, thud;]
            new TextEvent("It hits the unmasked person in the face and the orange juice splatters everywhere.", {}),
            //[A: splatter liquid; V: short pause]
            new TextEvent("You come up closer to the dazed figure and recognize that it\'s Paul.", {}),
            //[A: footsteps]
            new TextEvent("He asks you, \"Where am I?\" and rubs his head.", {}),
            //[A: window rubbing]
            new TextEvent("You remember Paul\'s hatred for fruit and realize that the orange juice probably snapped him out of his trance.", {}),
            new TextEvent("You explain everything to Paul and he apologizes and thanks you.", {}),
            new TextEvent("You saved Macalester!", {}),
            //[A: victory horn, V: fade to end→](End screen)
        ],
        decisions: [
            //END SCREEN
            {text: "", scene: ""},
            {text: "", scene: ""}
        ]
    },

    "skateboard": {
        events: [
            new TextEvent("You skate out of the doors of the LC.", {}),
            //[A: skateboard, door close?; V: ??]
            new TextEvent("As you leave, you realize two things: one, you don\'t know how to skateboard, and two, Paul would have prefered the scooter.", {}),
            new TextEvent("Maybe you are not the MVP after all.", {}),
            //[V: short pause, slow incomplete fade (like blinking)]
            new TextEvent("With these two realizations, your adrenaline and confidence begin to run out.", {}),
            new TextEvent("You fall off of the skateboard, scrape your knees, and land on your back.", {}),
            //[A: fall/thud; V: shake, pause]
            new TextEvent("The squirrels catch up to you and drag you away as Mac lets out a hearty and maniacal laugh.", {}),
            //[A: evil laugh, drag; V: text sideways]
            new TextEvent("That is the last thing you remember as your world fades to black.", {}),
            // [V: fade to black,pause]
            new TextEvent("You wake up in the Dupre basement, being dragged into 10K.", {}),
            new TextEvent("All around you are bright screens and hundreds of other students strapped into chairs being brainwashed.", {}),
            //[A: whirring, machines, fuzzy noise; V: bright screens, old TV fuzz]
            new TextEvent("After days and days of this torture, you are now one of Mac\'s fossil fuel soldiers, obeying every command.", {}),
            new TextEvent("You are a slave to the system.", {}),
            //   [V: fade to black]GAME OVER
        ],
        decisions: [
            //GAME OVER SCREEN
            {text: "", scene: ""},
            {text: "", scene: ""}
        ]
    },

    "scooter": {
        events: [
            new TextEvent("You scooter your way out of the doors of the LC.", {}),
            //[A: scooter, door close; V: scoot?? idk]
            new TextEvent("You head to Neill Hall to hide, because who would look there, right?", {}),
            new TextEvent("Once you are inside, you find an old phone in a professor\'s office.", {}),
            new TextEvent("You dial Mac security, but the line is busy.", {}),
            //[A: phone dial, busy tone;]
            new TextEvent("After waiting a moment, you decide to call the St. Paul Police Department.", {}),
            //[A: phone dial;]
            new TextEvent("You explain the situation to the dispatcher, and they send police to the campus.", {}),
            new TextEvent("The next two hours on campus are chaos, but finally they capture Mac the Scot and release the squirrels from his command.", {}),
            new TextEvent("The police inform you that they have unmasked the suspect and that it was Carleton\'s president trying to sabotage Macalester.", {}),
            new TextEvent("As you are filling out witness statements, you see Paul walk past you with your scooter in his hands.", {}),
            new TextEvent("He gives you an approving nod and walks away.", {}),
            //[A: footsteps V: fade to black](End screen)
        ],
        decisions: [
            //END SCREEN
            {text: "", scene: ""},
            {text: "", scene: ""}
        ]
    },

    "bell": {
        events: [
            new AudioEvent("creepy", {loop: true}),
            new TextEvent("       ", {partDelay: 60}),
            new TextEvent("You make your way to Macalester\'s (in)famous bell.", {partDelay: 60, scrollSpeed: 0.020}),
            new AudioEvent("bell"),
            runbell = new AudioEvent("footsteps", {rate: 1.95}),
            new TextEvent("As you approach, some giggling first-years run away.", {partDelay: 60, scrollSpeed: 0.022}),
            new TextEvent("       ", {partDelay: 60, scrollSpeed: 0.027}),
            new AudioEventAction(runbell, 'stop'),
            //[A: giggles, footsteps; V: short pause]
            new TextEvent("You look around the bell, searching for clues.", {scrollSpeed: 0.023}),
            new TextEvent("       ", {partDelay: 60, scrollSpeed: 0.035}),
            new TextEvent("You notice a large \"I\" engraved into one of the ", {partDelay: 50, scrollSpeed: 0.024}),
            new TextEvent("columns and wonder why you haven\'t seen that before.", {partDelay: 50, scrollSpeed: 0.025}),
            new TextEvent("       ", {partDelay: 60, scrollSpeed: 0.027}),
            new TextEvent("Under the bench, you notice a note stuck to it with gum.", {partDelay: 50, scrollSpeed: 0.024}),
            new TextEvent("You pull the note off and open it.", {partDelay: 55, scrollSpeed: 0.023}),
            new AudioEvent("paper"),
            new TextEvent("       ", {partDelay: 90, scrollSpeed: 0.024}),
            new TextEvent("Inside, it reads,", {partDelay: 50, scrollSpeed: 0.022}),
            new TextEvent("\"Ringing once is for a dunce. One ring and you will sting. Ringing twice will suffice.\"", {partDelay: 55, scrollSpeed: 0.020}),
            new TextEvent("       ", {partDelay: 60, scrollSpeed: 0.03}),
            new TextEvent("You notice a bloody fingerprint on the edge of the note.", {partDelay: 55, scrollSpeed: 0.025}),
            new TextEvent("       ", {partDelay: 60, scrollSpeed: 0.03}),
            new TextEvent("Should you trust their advice or are they trying to trick you?", {partDelay: 50, scrollSpeed: 0.025}),
            new TextEvent("       ", {partDelay: 60, scrollSpeed: 0.028}),
            new TextEvent("       ", {partDelay: 60, scrollSpeed: 0.026}),
            new TextEvent("       ", {partDelay: 60, scrollSpeed: 0.024}),
            new TextEvent("Do you ring the bell once or twice?", {partDelay: 65, scrollSpeed: 0.022}),
        ],
        decisions: [
            {text: "Ring once", scene: "bellone"}, //[A: bell ring; V: text sway]
            {text: "Ring twice", scene: "belltwo"}, //[A: bell ring twice; V: text sway]
        ]
    },

    "median": {
        events: [
            new AudioEvent("creepy", {loop: true}),
            new TextEvent("       ", {partDelay: 60, scrollSpeed: 0.022}),
            new TextEvent("You make your way to the Dupre median.", {partDelay: 60, scrollSpeed: 0.024}),
            new TextEvent("       ", {partDelay: 60}),
            new TextEvent("As you approach, you notice a group of students hooded in cloaks, sitting in a circle.", {partDelay: 58, scrollSpeed: 0.020}),
            new TextEvent("       ", {partDelay: 60, scrollSpeed: 0.023}),
            new TextEvent("A strange smell emanates from them.", {partDelay: 55, scrollSpeed: 0.024}),
            new TextEvent("       ", {partDelay: 60, scrollSpeed: 0.023}),
            //[A: leaves rustling; V: slow scroll]
            new TextEvent("It sounds like they are chanting something demonic", {partDelay: 50, scrollSpeed: 0.019}),
            new TextEvent("and you notice little fires appear near their hands.", {partDelay: 50, scrollSpeed: 0.020}),
            heart = new AudioEvent("heartbeat2", {rate: 1.2}),

            //[A: chanting, fire burning; V: small fire light in background]
            new TextEvent("       ", {flash: true, partDelay: 55, scrollSpeed: 0.026}),
            footmed = new AudioEvent("footsteps", {rate: 0.9, volume: 0.5}),
            new TextEvent("You decide to approach them.", {partDelay: 55, scrollSpeed: 0.027}),
            new TextEvent("As you get closer, they stop and stare at you.", {partDelay: 53, scrollSpeed: 0.028}),
            new TextEvent("       ", {partDelay: 57, scrollSpeed: 0.029}),
            new AudioEventAction(footmed, 'stop'),
            new TextEvent("One asks, \"Are you an RA?\"", {partDelay: 63, scrollSpeed: 0.025}),
            new TextEvent("You shake your head no.", {partDelay: 66, scrollSpeed: 0.026, sway: true}),
            new TextEvent("       ", {partDelay: 70, scrollSpeed: 0.029}),
            new TextEvent("Then they smile and invite you into their circle.", {partDelay: 55, scrollSpeed: 0.025}),
            new TextEvent("As you sit there, they pass around a strange looking cigarette.", {partDelay: 55, scrollSpeed: 0.026}),
            new TextEvent("       ", {partDelay: 70, scrollSpeed: 0.025}),
            new TextEvent("When it comes to you, you decide to try your first", {partDelay: 55, scrollSpeed: 0.024}),
            new AudioEvent("inhale"),
            new TextEvent("puff because you are above 18 of course.", {partDelay: 55, scrollSpeed: 0.024}),
            new TextEvent("       ", {partDelay: 70, scrollSpeed: 0.024}),
            //[A: puff, cough, then happy music; V: short pause]
            new TextEvent("You feel strange but good.", {partDelay: 64, scrollSpeed: 0.024}),
            new TextEvent("You are no longer worried about who you are or what is going on.", {partDelay: 63, scrollSpeed: 0.025}),
            new TextEvent("You feel happy and fuzzy.", {partDelay: 65, scrollSpeed: 0.030}),
            new TextEvent("Your world fades to black.", {partDelay: 55, scrollSpeed: 0.040}),
            new TextEvent("       ", {partDelay: 60, scrollSpeed: 0.040}),
            new TextEvent("       ", {fade: true, partDelay: 70, scrollSpeed: 0.030}),

            //[A: happy; V: fade to black] (Ending screen)
        ],
        decisions: [
            //ENDING SCREEN
            {text: "", scene: ""},
            {text: "", scene: ""}
        ]
    },

    "bellone": {
        events: [
            new TextEvent("With one ring, the bell echoes throughout campus, and quiet claps and cheers follow.", {}),
            //[A: bell ring, claps, cheers; V: short pause]
            new TextEvent("A piece of paper falls from inside the bell and glides into your hands.", {}),
            //[A: paper flutter; V: zoom/text bigger for note]
            new TextEvent("You read the clue, \"C U @ Kagin bb.\"", {}),
            //[A: kiss sound]
            new TextEvent("You scratch your head and try to remember where you\'ve heard the word Kagin before.", {}),
            new TextEvent("Your head is still sore.", {}),
            //[A: scratch; V: pound/pulse]
            new TextEvent("You walk around campus trying to figure out what the note means.", {}),
            new TextEvent("Is it some sort of code? Maybe a puzzle?", {}),
            //[V: pause]
            new TextEvent("As you continue your search, you walk by some dorm buildings and notice a building labeled, \"Kagin.\"", {}),
            new TextEvent("You found it!", {}),
            new TextEvent("Could this be the answer to your clue, or perhaps to your identity?", {}),
            //[A: footsteps;]
            new TextEvent("As you walk closer to Kagin, you see some hooded figures walking towards the Dupre median.", {}),
            new TextEvent("Do you follow them or continue to Kagin?", {}),
        ],
        decisions: [
            {text: "Follow them", scene: "median"}, //[A: kid chuckles creepy; V: ???]
            {text: "Continue to Kagin", scene: "kagin"}, //[A: party music; V: light flash]
        ]
    },

    "belltwo": {
        events: [
            //[A: bell ringing;]
            new TextEvent("After ringing the bell again, the floor beneath you opens up and you fall in.", {}),
            //[V: text scrolls up fast like falling]
            new TextEvent("The bell continues to ring.", {}),
            //[A: bell ringing transitions to alarm beeping; V: Transitions to white background with black text]
            new TextEvent("The falling jolts you awake.", {}),
            //[A: alarm beeps; V: jolt text]
            new TextEvent("You wake up in your Dupre dorm and realize it was all just a dream.", {}),
            new TextEvent("You are going to be late for class, so you quickly get ready and rush out of the door.", {}),
            //[A: wind]
            new TextEvent("As you leave your room, out of the corner of your eye, you notice an orange sitting on the table...", {}),
            //[A: door close; V: orange] (End screen)
        ],
        decisions: [
            //END SCREEN
            {text: "", scene: ""},
            {text: "", scene: ""}
        ]
    },

    "kagin": {
        events: [
            new TextEvent("You enter the revolving doors of Kagin.", {}),
            //[A: revolving door sound; V: rotation of text]
            new TextEvent("Upstairs, you see disco lights and hear music bumping.", {}),
            //[A: music bumping; V: colorful flash (disco)]
            new TextEvent("Downstairs, you see a dim light flickering and hear no noise.", {}),
            //[A: muffled music?; V: light flicker]
            new TextEvent("Maybe someone upstairs could help your memory.", {}),
            new TextEvent("But maybe the secrets lie beneath.", {}),
            new TextEvent("Who knows?", {}),
            new TextEvent("Do you go upstairs or downstairs?", {}),
        ],
        decisions: [
            {text: "Go upstairs", scene: "upstairs"}, //[A: music; V: disco flash]
            {text: "Go downstairs", scene: "downstairs"}, //[A: footsteps; V: fade to black or flicker]
        ]
    },


    "upstairs": {
        events: [
            new TextEvent("As you walk up the stairs, the music gets louder and the lights get brighter.", {}),
            //[A: music loud; V: flash/disco]
            new TextEvent("You see a sea of people dancing, yelling, and attempting to relate to each other.", {}),
            //[A: music, voice chatter]
            new TextEvent("You read a sign that says, \"Masquerade Kagin.\"", {}),
            new TextEvent("You walk inside.", {}),
            //[A: music/footsteps???, V:pause]
            new TextEvent("Without a mask, you are standing out and you feel like you are getting some looks.", {}),
            new TextEvent("You could join the crowd on the dance floor, but you also notice that there is no line for the restrooms.", {}),
            new TextEvent("Do you enter the dance floor or go to the restroom?", {}),
        ],
        decisions: [
            {text: "Enter the dance floor", scene: "dancefloor"}, //[A: music; V: flash]
            {text: "Go to the restroom", scene: "restroom"}, //[A: music fades; V: ???]
        ]
    },

    "downstairs": {
        events: [
            new TextEvent("As you go downstairs, you hear muffled voices.", {}),
            //[A: muffled voices; V: scroll down, ??]
            new TextEvent("You open a door and walk into the main room.", {}),
            new TextEvent("Someone hears you and you hear a \"shh.\"", {}),
            //[A: footsteps, door open, shh;]
            new TextEvent("The voices go quiet.", {}),
            new TextEvent("Somewhat suspicious, you walk forward.", {}),
            //[A: footsteps; V: pause 3 secs]
            new TextEvent("Suddenly fifteen people jump out and yell, \"Surprise! Happy Birthday!\"", {}),
            //[A: surprise or bday sounds; V: balloon colors/confetti?]
            new TextEvent("They come out with a birthday cake and start singing.", {}),
            //[A: bday song]
            new TextEvent("Sadly, the cake does not have your name on it so you are still clueless as to who you are.", {}),
            new TextEvent("Anyway, you decide to play along and enjoy yourself.", {}),
            //[A: bday music, cheers; V: fades to white ending screen with “Happy Birthday!” on it]
        ],
        decisions: [
           //END SCREEN
           {text: "", scene: ""},
           {text: "", scene: ""}
        ]
    },


    "dancefloor": {
        events: [
            new TextEvent("You walk into the crowd of people and head towards the center of the dance floor.", {}),
            //[A: kagin music, voice chatter; V: flash/disco]
            new TextEvent("You have to push through people as the crowd thickens.", {}),
            new TextEvent("A sweaty first-year taps on you and drunkenly asks to dance, you turn away and head deeper into the center.", {}),
            //[A: music; V: slight swaying]
            new TextEvent("Finally you reach the center.", {}),
            new TextEvent("The music is loud and there are people all around you.", {}),
            //[A: music louder; V: text margins tighter]
            new TextEvent("You are unsure why you wanted to go here, but you felt compelled to.", {}),
            new TextEvent("You wait and dance.", {}),
            //[V: dance effect??]
            new TextEvent("You feel another tap on your shoulder and are already rolling your eyes.", {}),
            new TextEvent("You turn and realize that it is someone new, someone that feels almost familiar.", {}),
            new TextEvent("She says something to you, but you cannot hear it over the music.", {}),
            new TextEvent("\"WHAT?\"", {}),
            new TextEvent("She motions for you to follow her.", {}),
            //[A: music chattering]
            new TextEvent("You two end up outside of the crowd, where the music is far enough that you can hear.", {}),
            new TextEvent("She says, \"Hey aren\'t you in my software dev class?\"", {}),
            new TextEvent("You are unsure, but you decide to play along and nod.", {}),
            //[V: text nod]
            new TextEvent("She continues, \"I think you left your red journal last class. I saw someone drop it off in the Free Swap.\" ", {}),
            new TextEvent("You thank her and try to ask her more about your identity, but her friends pull her away, making confused glances at her and giving you weird looks.", {}),
            new TextEvent("Do you go to the Free Swap or follow her?", {}),
        ],
        decisions: [
            {text: "Go to the Free Swap", scene: "freeswap"}, //[A: music fades; V: ???]
            {text: "Follow her", scene: "follow"}, //[A: music; V: disco lights]
        ]
    },


    "restroom": {
        events: [
            new TextEvent("You go to the restroom, do your business, and escape the crowd.", {}),
            //[A: toilet flush; V: text swirl/rotate]
            new TextEvent("As you are at the sink, and someone approaches you, \"Hey, do I know you from somewhere? What\'s your name?\"", {}),
            //[A: sink water running]
            new TextEvent("You reply, \"I\'m not sure.\"", {}),
            new TextEvent("He laughs, \"Nice sticking with the theme, but where is you mask?\"", {}),
            new TextEvent("You say, \"I don\'t have one.\"", {}),
            new TextEvent("He changes his expression, \"Here, take mine. Also have some water too.\"", {}),
            new TextEvent("He tries to hand you his mask and a suspicious-looking water bottle.", {}),
            new TextEvent("Do you accept his offering or decline it and head back to the dance floor?", {}),
        ],
        decisions: [
            {text: "Accept the mask", scene: "mask"}, //[A: flush]
            {text: "Decline the mask", scene: "dancefloor"}, //[A:music]
        ]
    },

    "mask": {
        events: [
            new TextEvent("You take his mask and water bottle.", {}),
            new TextEvent("He smirks and quickly runs off.", {}),
            //[A: running;]
            new TextEvent("After a few seconds of struggling, you get the mask on and turn towards the door.", {}),
            new TextEvent("You hear a commotion outside and suddenly two security guards in yellow jackets block the doorway.", {}),
            //[A: commotion/loud noises/bang; V: flash]
            new TextEvent("One shouts, \"There you are!\" and points at you.", {}),
            new TextEvent("They run up to you and grab you by both arms.", {}),
            new TextEvent("The other guard says, \"We finally got you, and you thought you could get away from us?\"", {}),
            new TextEvent("You try to explain that you are being set up, but it is no use.", {}),
            new TextEvent("The guards open your water bottle, which after smelling, is definitely not water.", {}),
            new TextEvent("They write you up, and kick you out of Kagin.", {}),
            new TextEvent("You are sentenced to one year of academic and residential probation.", {}),
            //[Screen fades to black] GAME OVER
        ],
        decisions: [
           //GAME OVER SCREEN
           {text: "", scene: ""},
           {text: "", scene: ""}
        ]
    },

    "follow": {
        events: [
            new TextEvent("You decide to follow her in the hope of more information.", {}),
            //[A: music; V: disco]
            new TextEvent("The room is darker and the crowd is huge.", {}),
            new TextEvent("You see where she went, but have no way of getting there.", {}),
            new TextEvent("You walk into the crowd.", {}),
            new TextEvent("You are being pushed from many directions.", {}),
            new TextEvent("You feel hot and lightheaded.", {}),
            new TextEvent("You catch a glimpse of her from across the crowd.", {}),
            new TextEvent("You push in that direction; you can still see her.", {}),
            new TextEvent("The more you push and the deeper you get, the hotter you feel.", {}),
            // [A: music; V: flash/red pulse]
            new TextEvent("Darkness seems to be creeping up on you.", {}),
            //[ V: text fades after display]
            new TextEvent("Do you push your way to her or leave and go to the Free Swap?", {}),

            //
            // Buttons:
            // Push your way (11.3)
            // Free Swap (12)
        ],
        decisions: [
            {text: "Push to her", scene: "push"}, //[A: music, grunts; V: disco]
            {text: "Go to the Free Swap", scene: "freeswap"}, //[A: music fades; V: flash]
        ]
    },

    "push": {
        events: [
            new TextEvent("You stubbornly attempt to reach her.", {}),
            new TextEvent("This girl might have all of the answers.", {}),
            //[A: music; V: disco]
            new TextEvent("You ignore the heat and your body and push on.", {}),
            //[A: music, heartbeat; V: red flash]
            new TextEvent("You get elbowed in places you wish you hadn\'t and dodge drunken students, but you finally make your way across the crowd.", {}),
            new TextEvent("The girl is right there, within an arm\'s reach.", {}),
            //[A: music; V: pulse/heartbeat]
            new TextEvent("You feel like you are burning up from the inside.", {}),
            //[A: faster heartbeats, V: many red pulses]
            new TextEvent("You reach to tap her shoulder, but you collapse.", {}),
            new TextEvent("Your body hits the floor and your world fades to black.", {}),
            //[A: thud; V: fade to black] GAME OVER
        ],
        decisions: [
            //GAME OVER SCREEN
            {text: "", scene: ""},
            {text: "", scene: ""}
        ]
    },

    "freeswap": {
        events: [
            new TextEvent("You head downstairs and make your way into Kagin\'s Free Swap.", {}),
            //[A: footsteps; V: downstairs?]
            new TextEvent("You are looking for the red journal that she mentioned.", {}),
            new TextEvent("You rummage through some shelves and peer behind some coats.", {}),
            //[A: shuffling, rummage noises; V: quick pause]
            new TextEvent("It seems like you have searched everywhere until one cabinet with a golden handle catches your eye.", {}),
            //[A: sparkle noise; V: flash/twinkle]
            new TextEvent("You open it up and surely enough, the red journal is inside!", {}),
            //[A: drawer open;]
            new TextEvent("You ruffle through the pages until you find one with writing.", {}),
            //[A: paper flutter; V: page turn effect]
            new TextEvent("The writing discusses a plot to hack and steal all of the Macalester students\' information.", {}),
            new TextEvent("At the bottom, the name David Sisk is circled in red sharpie.", {}),
            //[A: pen/marker scribble; V: circle “David Sisk” in red]
            new TextEvent("You realize that you must have uncovered Sisk\'s plot and he is somehow the reason why you woke up with amnesia.", {}),
            new TextEvent("You ponder for a few moments about the gravity of the situation.", {}),
            //[V: pause]
            new TextEvent("You could save your fellow students\' information and exact revenge on Sisk for your amnesia.", {}),
            new TextEvent("Or you could just go back to Kagin and ignore this new revelation.", {}),
        ],
        decisions: [
            {text: "REVENGE", scene: "revenge"}, //[A: action music; V: swirl]
            {text: "Go back to Kagin", scene: "backkagin"}, //[A: kagin music; V: disco lights]
        ]
    },

    "revenge": {
        events: [
            new TextEvent("You hear footsteps behind you and quickly leave through the back door with your journal in your arms.", {}),
            //[A: footsteps, door slam;]
            new TextEvent("You head over to the ITS Help Desk.", {}),
            new TextEvent("On your way, you hear a \"psst\" and you see the shadow of a figure sitting on the stairs in front of Old Main.", {}),
            //[A: psst; V: dark/fade]
            new TextEvent("You walk closer and realize that it is Paul.", {}),
            new TextEvent("You fill him in on what you found in your journal.", {}),
            new TextEvent("He explains that he already knew about the plot and that is why he led you to Kagin.", {}),
            new TextEvent("He couldn\'t tell you in the library because Sisk could have been listening.", {}),
            new TextEvent("He agrees to go to ITS with you to help prevent this catastrophe.", {}),
            //[A: action music; V: fade to black]
            new TextEvent("You end up at the Help Desk and everything is dark except for one bright computer screen.", {}),
            //[V: bright screen]
            new TextEvent("You both look closer and realize that it is Sisk\'s code and that it has already begun executing.", {}),
            //[A: retro code music (OR) morse code beeping]
            new TextEvent("Paul springs into action and tries to terminate the program.", {}),
            new TextEvent("He is typing faster than you thought possible.", {}),
            //[A: typing]
            new TextEvent("Paul says, \"I almost got it!\"", {}),
            //[A: typing]
            new TextEvent("Suddenly, a door swings open and David Sisk comes charging at you.", {}),
            new TextEvent("He yells, \"DO NOT TOUCH THAT COMPUTER!\"", {}),
            //[A: door slam, action, running; V: shake]
            new TextEvent("Paul gets up from the computer and defends you from Sisk.", {}),
            new TextEvent("As they are wrestling, you go on the computer and attempt to finish Paul\'s hacking.", {}),
            //[A: typing, fighting, thuds; V: matrix(0/1s)]
            new TextEvent("You keep trying but it is no use.", {}),
            new TextEvent("Paul seems to be losing the fight against Sisk as well.", {}),
            new TextEvent("In a last ditch effort, you press CTRL + ALT + Delete.", {}),
            new TextEvent("It takes you to a password-locked screen.", {}),
            new TextEvent("You try the obvious passwords like \"Sisk123\", \"admin\", and \"password\", but none work.", {}),
            //[A: action music, typing, fighting]
            new TextEvent("You yell to Paul, asking for help.", {}),
            new TextEvent("Paul tells you to look in your journal.", {}),
            //[A: paper, action; V: zoom in]
            new TextEvent("You open the journal, and inside you see \"iLuvPBR\" written in big letters below the red circled \"David Sisk.\"", {}),
            new TextEvent("You quickly enter in the password.", {}),
            new TextEvent("All at once everything stops and the lights turn on.", {}),
            //[A: silence, V:light flash above]
            new TextEvent("Sisk lets out a loud, \"NOOOO...\" as you and Paul tie him up.", {}),
            new TextEvent("You call the police and inform Mac security.", {}),
            new TextEvent("Sisk gets arrested, you and Paul high-five, and you no longer receive those \"ITS will never ask for your password\" emails.", {}),
            new TextEvent(" You saved the day!", {}),
            //(END SCREEN)

        ],
        decisions: [
            //END SCREEN
            {text: "", scene: ""},
            {text: "", scene: ""}
        ]
    },

    "backkagin": {
        events: [
            new TextEvent("You decide to head back to Kagin.", {}),
            new TextEvent("You hear footsteps behind you and turn around.", {}),
            //[A: footsteps]
            new TextEvent("Behind you, you see David Sisk approaching.", {}),
            new TextEvent("He growls, \"You really should not have meddled. I already knocked you out once.", {}),
            new TextEvent("I\'m surprised you even remembered my plan.\"", {}),
            new TextEvent("You try to back away.", {}),
            //[V: zoom out/back away]
            new TextEvent("Sisk follows and knocks you over the head with an Alienware laptop.", {}),
            new TextEvent("Your world fades to black.", {}),
            //[A: thud V: fade to black] Game Over

        ],
        decisions: [
            //GAME OVER SCREEN
            {text: "", scene: ""},
            {text: "", scene: ""}
        ]
    },

}