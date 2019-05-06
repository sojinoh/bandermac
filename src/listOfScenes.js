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
            {text: "Move on", scene: "squirrels"}, //[A: footsteps; V: scroll horizontal]
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

    //stopped at scene 6a (need to do squirrels (its options) and (bell/median paths)
    //----------------------------------------------------------------------------------- (BELL/MEDIAN)

    "squirrels": {
        events: [
            //[A: whirring;]
            new TextEvent("You decide to leave the orange in your pocket, you might need it later.", {}),
            new TextEvent("Paul mutters something about needing to check Slack, still staring into the abyss.", {}),
            //[A: silence; V: pause]
            new TextEvent("Suddenly you hear a bang, Paul’s eyes fixate on you, and he yells “THEY’RE COMING! RUN!”", {}),
            //[A: bang, (sudden noise?), yell?; V: one big shake]
            new TextEvent("Out of nowhere, squirrels climb out from bookcases in every direction and run towards you.", {}),
            //[A: clatter, squirrel scatter, mini footsteps, heartbeat V: ???]
            new TextEvent("You grab Paul’s sleeve and try to get him to follow you, but it is no use.", {}),
            new TextEvent("Squirrels start to pounce on Paul, and he weakly says, “Go on without me… I… still… have to fix… the Bonsai UI… Go to… the LC”", {}),
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
            new TextEvent("You listen to Paul and run away.", {}),
            //[A: running; V: scroll fast]
            new TextEvent("You run without looking back, and end up in the Leonard Center.", {}),
            new TextEvent("The building is empty and dark, but you can still hear the ghostly grunts of past football players coming from the gym.", {}),
            //[A: grunts, ghost; V: flicker light]
            new TextEvent("You wonder why Paul would want you to come to the LC.", {}),
            //[A: background noise; V: pause]
            new TextEvent("You search for clues.", {}),
            new TextEvent("As you’re walking, you miss a wet floor sign and you slip and hit your head.", {}),
            //[A: slip/fall, thud; V: after display → slip, text slides up and shakes]
            new TextEvent("After a few seconds, you come to and stand back up.", {}),
            //[A: stand up;]
            new TextEvent("Somehow, hitting your head helped your memory a bit.", {}),
            new TextEvent("You remember that you took a software class with Paul.", {}),
            new TextEvent("Maybe something from his class could help you figure out why he sent you here.", {}),
            new TextEvent("You ponder for a moment.", {}),
            //[ V: pause text 3 seconds]
            new TextEvent("You remember Paul would often talk about the minimum viable product… the MVP.", {}),
            new TextEvent("You got it!", {}),
            //[A: lightbulb/ding; V: light flash]
            new TextEvent("Where are the MVPs displayed at the LC? ", {}),
            new TextEvent("Do you go to the Hall of Fame room or do you find the banners upstairs?", {}),
        ],
        decisions: [
            {text: "Hall of Fame room", scene: "halloffame"}, //[A: footsteps; V: scroll up/side]
            {text: "Banner upstairs", scene: "banner"}, //[A: footsteps; V: scroll up]
        ]
    },


    "savepaul": {
        events: [
            //[A: clash, war, yell; V: flashes]
            new TextEvent("You run up to Paul and attempt to pull him away from the hounding squirrels.", {}),
            //[A: snarls; V: shakes]
            new TextEvent("You fend off the first wave of squirrels by swatting them with Paul’s keyboard.", {}),
            //[A: sword clang, thuds, smacks; V: ???]
            new TextEvent("But more squirrels keep coming.", {}),
            //[A: continue audio V: quick pause]
            new TextEvent("After five minutes of fighting off the foamy-mouthed, bloodthirsty squirrels, you are covered in fur, sweat, and blood.", {}),
            //[A: panting, heartbeat]
            new TextEvent("Paul is sitting on the ground, oblivious to the situation, typing on his imaginary computer.", {}),
            //[A: finger thumps;]
            new TextEvent("A quiet minute passes and you think that everything has settled.", {}),
            //[A: silence; V: pause/slow scroll]
            new TextEvent("The floor begins to rumble, and squirrels pour from the ceiling and come from every imaginable direction.", {}),
            //[A: rumble, scurry, crash; V: shake]
            new TextEvent("You are overwhelmed, and your world fades to black. So much for being the hero.", {}),
            //[A: groan then silence ; V: fade to black] GAME OVER.
        ],
        decisions: [
            //GAME OVER SCREEN
        ]
    },


    "halloffame": {
        events: [
            new TextEvent("You turn on the light in the Hall of Fame room.", {}),
            //[A: lightswitch; V: light flicker]
            new TextEvent("You see various plaques, trophies, and team photos, and you begin to look around.", {}),
            new TextEvent("On the 1998 Cross Country MVP Plaque, you see a yellow note, “You are the real MVP. You are the most viable product. You have been all along.”", {}),
            //[A: paper flutter; V: zoom in on note text (or diff orientation)]
            new TextEvent("On the back it reads, “Macalester is in grave danger and needs your help. Mac the Scot, the mascot, is trying to destroy Macalester.", {}),
            new TextEvent("He has gathered an army of squirrels and plans to brainwash the students and turn the campus into an evil fossil fuel fortress. Only you can stop him!”", {}),
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
            new TextEvent("You burst through the doors and send Mac’s squirrels flying into the wall.", {}),
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
            new TextEvent("Mac shouts, “My minions… my beautiful, scurrying minions.", {}),
            new TextEvent("Tonight, while the students are preoccupied at Kagin, we shall strike hard and we shall strike fast.", {}),
            new TextEvent("We must surround the students and force them into our brainwashing facility in 10K, the Dupre basement.”", {}),
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
            new TextEvent("You bargain with yourself, “maybe he is here to help.”", {}),
            new TextEvent("Suddenly, the bagpipes stop.", {}),
            //[A: Silence; V: text fades]
            new TextEvent("Mac lifts up the bagpipes and strikes you over the head with them.", {}),
            //[A: bang/thud; V:  pulse]
            new TextEvent("Your world fades to black.", {}),
            //[A: silence; V: fade to black]GAME OVER
],
        decisions: [
            //GAME OVER SCREEN
        ]
    },

    "fightfame": {
        events: [
            new TextEvent("You burst through the doors and send Mac’s squirrels flying into the wall.", {}),
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
            new TextEvent("You come up closer to the dazed figure and recognize that it’s Paul.", {}),
            //[A: footsteps]
            new TextEvent("He asks you, “Where am I?” and rubs his head.", {}),
            //[A: window rubbing]
            new TextEvent("You remember Paul’s hatred for fruit and realize that the orange juice probably snapped him out of his trance.", {}),
            new TextEvent("You explain everything to Paul and he apologizes and thanks you.", {}),
            new TextEvent("You saved Macalester!", {}),
            //[A: victory horn, V: fade to end→](End screen)
        ],
        decisions: [
            //END SCREEN
        ]
    },

    "skateboard": {
        events: [
            new TextEvent("You skate out of the doors of the LC.", {}),
            //[A: skateboard, door close?; V: ??]
            new TextEvent("As you leave, you realize two things: one, you don’t know how to skateboard, and two, Paul would have prefered the scooter.", {}),
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
            new TextEvent("After days and days of this torture, you are now one of Mac’s fossil fuel soldiers, obeying every command.", {}),
            new TextEvent("You are a slave to the system.", {}),
            //   [V: fade to black]GAME OVER
        ],
        decisions: [
            //GAME OVER SCREEN
        ]
    },

    "scooter": {
        events: [
            new TextEvent("You scooter your way out of the doors of the LC.", {}),
            //[A: scooter, door close; V: scoot?? idk]
            new TextEvent("You head to Neill Hall to hide, because who would look there, right?", {}),
            new TextEvent("Once you are inside, you find an old phone in a professor’s office.", {}),
            new TextEvent("You dial Mac security, but the line is busy.", {}),
            //[A: phone dial, busy tone;]
            new TextEvent("After waiting a moment, you decide to call the St. Paul Police Department.", {}),
            //[A: phone dial;]
            new TextEvent("You explain the situation to the dispatcher, and they send police to the campus.", {}),
            new TextEvent("The next two hours on campus are chaos, but finally they capture Mac the Scot and release the squirrels from his command.", {}),
            new TextEvent("The police inform you that they have unmasked the suspect and that it was Carleton’s president trying to sabotage Macalester.", {}),
            new TextEvent("As you are filling out witness statements, you see Paul walk past you with your scooter in his hands.", {}),
            new TextEvent("He gives you an approving nod and walks away.", {}),
            //[A: footsteps V: fade to black](End screen)
        ],
        decisions: [
            //END SCREEN
        ]
    },

    "bell": {
        events: [
            new TextEvent("You make your way to Macalester’s (in)famous bell.", {}),
            new TextEvent("As you approach, some giggling first-years run away.", {}),
            //[A: giggles, footsteps; V: short pause]
            new TextEvent("You look around the bell, searching for clues.", {}),
            new TextEvent("You notice a large “I” engraved into one of the columns and wonder why you haven’t seen that before.", {}),
            //[V: scroll up]
            new TextEvent("Under the bench, you notice a note stuck to it with gum.", {}),
            new TextEvent("You pull the note off and open it.", {}),
            //[A: paper flutter; V: short pause]
            new TextEvent("Inside, it reads, “Ringing once is for a dunce. One ring and you will sting. Ringing twice will suffice.”", {}),
            //[V: zoom on note text]
            new TextEvent("You notice a bloody fingerprint on the edge of the note.", {}),
            new TextEvent("Should you trust their advice or are they trying to trick you?", {}),
            new TextEvent("Do you ring the bell once or twice?", {}),
        ],
        decisions: [
            {text: "Ring once", scene: "bellone"}, //[A: bell ring; V: text sway]
            {text: "Ring twice", scene: "belltwo"}, //[A: bell ring twice; V: text sway]
        ]
    },

    "median": {
        events: [
            new TextEvent("You make your way to the Dupre median.", {}),
            new TextEvent("As you approach, you notice a group of students hooded in cloaks, sitting in a circle.", {}),
            new TextEvent("A strange smell emanates from them.", {}),
            //[A: leaves rustling; V: slow scroll]
            new TextEvent("It sounds like they are chanting something demonic, and you notice little fires appear near there hands.", {}),
            //[A: chanting, fire burning; V: small fire light in background]
            new TextEvent("You decide to approach them.", {}),
            //[A: footsteps]
            new TextEvent("As you get closer, they stop and stare at you.", {}),
            new TextEvent("One asks, “Are you an RA?”", {}),
            new TextEvent("You shake your head no.", {}),
            new TextEvent("Then they smile and invite you into their circle.", {}),
            new TextEvent("As you sit there, they pass around a strange looking cigarette.", {}),
            new TextEvent("When it comes to you, you decide to try your first puff of a cigarette because you are above 18 of course.", {}),
            //[A: puff, cough, then happy music; V: short pause]
            new TextEvent("You feel strange, but good.", {}),
            new TextEvent("You are no longer worried about who you are or what is going on.", {}),
            new TextEvent("You feel happy and fuzzy.", {}),
            new TextEvent("Your world fades to black.", {}),
            //[A: happy; V: fade to black] (Ending screen)
        ],
        decisions: [
            //ENDING SCREEN
        ]
    },

    "bellone": {
        events: [
            new TextEvent("With one ring, the bell echoes throughout campus, and quiet claps and cheers follow.", {}),
            //[A: bell ring, claps, cheers; V: short pause]
            new TextEvent("A piece of paper falls from inside the bell and glides into your hands.", {}),
            //[A: paper flutter; V: zoom/text bigger for note]
            new TextEvent("You read the clue, “C U @ Kagin bb.”", {}),
            //[A: kiss sound]
            new TextEvent("You scratch your head and try to remember where you’ve heard the word Kagin before.", {}),
            new TextEvent("Your head is still sore.", {}),
            //[A: scratch; V: pound/pulse]
            new TextEvent("You walk around campus trying to figure out what the note means.", {}),
            new TextEvent("Is it some sort of code? Maybe a puzzle?", {}),
            //[V: pause]
            new TextEvent("As you continue your search, you walk by some dorm buildings and notice a building labeled, “Kagin.”", {}),
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
            new TextEvent("As you leave your room, out of the corner of your eye, you notice an orange sitting on the table…", {}),
            //[A: door close; V: orange] (End screen)
        ],
        decisions: [
            //END SCREEN
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
            new TextEvent("You read a sign that says, “Masquerade Kagin.”", {}),
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
            new TextEvent("Someone hears you and you hear a “shh.”", {}),
            //[A: footsteps, door open, shh;]
            new TextEvent("The voices go quiet.", {}),
            new TextEvent("Somewhat suspicious, you walk forward.", {}),
            //[A: footsteps; V: pause 3 secs]
            new TextEvent("Suddenly fifteen people jump out and yell, “Surprise! Happy Birthday!”", {}),
            //[A: surprise or bday sounds; V: balloon colors/confetti?]
            new TextEvent("They come out with a birthday cake and start singing.", {}),
            //[A: bday song]
            new TextEvent("Sadly, the cake does not have your name on it so you are still clueless as to who you are.", {}),
            new TextEvent("Anyway, you decide to play along and enjoy yourself.", {}),
            //[A: bday music, cheers; V: fades to white ending screen with “Happy Birthday!” on it]
        ],
        decisions: [
           //END SCREEN
        ]
    },


    "dancefloor": {
        events: [
            new TextEvent(" ", {}),
            new TextEvent(" ", {}),
            new TextEvent(" ", {}),
            new TextEvent(" ", {}),
            new TextEvent(" ", {}),
            new TextEvent(" ", {}),
            new TextEvent(" ", {}),
            new TextEvent(" ", {}),
            new TextEvent(" ", {}),
            new TextEvent(" ", {}),
            new TextEvent(" ", {}),
            new TextEvent(" ", {}),
            new TextEvent(" ", {}),

            //You walk into the crowd of people and head towards the center of the dancefloor. [A: kagin music, voice chatter; V: flash/disco] You have to push through people as the crowd thickens. A sweaty first-year taps on you and drunkenly asks to dance, you turn away and head deeper into the center. [A: music; V: slight swaying] Finally you reach the center. The music is loud and there are people all around you. [A: music louder; V: text margins tighter] You are unsure why you wanted to go here, but you felt compelled to. You wait and dance. [V: dance effect??] You feel another tap on your shoulder and are already rolling your eyes. You turn and realize that it is someone new, someone that feels almost familiar.  She says something to you, but you cannot hear it over the music. “WHAT?” She motions for you to follow her. [A: music chattering] You two end up outside of the crowd, where the music is far enough that you can hear. She says, “Hey aren’t you in my software dev class?” You are unsure, but you decide to play along and nod. [V: text nod] She continues, “I think you left your red journal last class. I saw someone drop it off in the Free Swap.” You thank her and try to ask her more about your identity, but her friends pull her away, making confused glances at her and giving you weird looks. Do you go to the Free Swap or follow her?
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