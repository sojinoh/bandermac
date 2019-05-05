var story = [
    [//scene 1 - REMINDER!!!!! WRITE INDEX FOR EACH SCENE
        [
            new TextEvent("Your eyes gradually open", { partDelay: 60 }),
            new TextEvent("as you slowly float into consciousness.", {}),
            new TextEvent("                     ", {}),
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
        ],
        [

        ]
    ],

    [//scene 2 (index:1)
        [//scene 2a (index: 1,0)
            new TextEvent("You stand carefully.", {}),
            new TextEvent("                     ", {}),
            new TextEvent("You feel slightly off balance as you walk up the main staircase to the third floor.", {}),
            new TextEvent("                     ", {}),
            new TextEvent("Sitting at the one of the circular tables of the top floor is a figure of a man.", {}),
            new TextEvent("                     ", {}),
            new TextEvent("From his young features, you guess he must be a student.", {}),
            new TextEvent("You walk over to him.", {}),
        ],
        [//scene 2b
            new TextEvent("You stand carefully.", {}),
            new TextEvent("You feel slightly off balance as you walk down the stairs towards the crash.", {}),
            new TextEvent("                     ", {}),
            new TextEvent("As you come closer, you notice shards of glass scattered around a case containing a dinosaur skull.", {}),
            new TextEvent("The case is broken, and you notice a note pinned between the dinosaur’s teeth.", {}),
        ]
    ]

]

var decisions = [
    [//scene 1
        "Go to the top floor",
        "Go to the Geology wing"
    ],

    [//scene 2
        "Crawl through",
        "Crawl through"
    ], 

    [
        "Crawl through",
        "Crawl through"
    ]

]