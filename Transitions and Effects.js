//List of different transitions and effects to implement in framework




//Sway side to side
this.tweens.add({
    targets: text1,
    x: 450,
    ease: 'Sine.easeInOut',
    yoyo: true,
    repeat: 3,
    duration: 2000
});

//Fade out and in
this.cameras.main.fadeOut(1800);

this.cameras.main.once('camerafadeoutcomplete', function (camera) {

    camera.fadeIn(1500);
});


//Flash

this.cameras.main.flash();


//Rotation and zoom (not working currently)
this.cameras.main.setZoom(Math.abs(Math.sin(this.cameras.main.rotation)) * 0.5 + 1);
this.cameras.main.rotation += 0.01;


//Useful effects from website
    http://labs.phaser.io/edit.html?src=src\camera\camera-effects.js


//Website Fade on click -- would be good for transition or button click
    http://labs.phaser.io/edit.html?src=src\camera\fade.js


//Camera follows sprite -- could create cool effect for following text
    var cam2 = this.cameras.add(400, 0, 400, 300);
    cam2.startFollow(clown, false, 0.5, 0.5);

//3D effect could be good for text transition when entering tunnel
    http://labs.phaser.io/edit.html?src=src\camera\3D%20camera\rectangle%20scaled.js



