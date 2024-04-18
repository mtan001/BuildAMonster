class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.rightLeg = this.add.sprite(this.bodyX+50, this.bodyY+130, "monsterParts", "leg_greenA.png");
        my.sprite.leftLeg = this.add.sprite(this.bodyX-50, this.bodyY+130, "monsterParts", "leg_yellowA.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightArm = this.add.sprite(this.bodyX+90, this.bodyY+90, "monsterParts", "arm_darkA.png");
        my.sprite.leftArm = this.add.sprite(this.bodyX-85, this.bodyY+100, "monsterParts", "arm_greenD.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.rightEye = this.add.sprite(this.bodyX+45, this.bodyY, "monsterParts", "eye_cute_light.png");
        my.sprite.leftEye = this.add.sprite(this.bodyX-45, this.bodyY, "monsterParts", "eye_cute_light.png");
        my.sprite.topEye = this.add.sprite(this.bodyX, this.bodyY-60, "monsterParts", "eye_yellow.png");
        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY+55, "monsterParts", "mouthH.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY+55, "monsterParts", "mouthB.png");
        my.sprite.rightHorn = this.add.sprite(this.bodyX+65, this.bodyY-62, "monsterParts", "detail_green_horn_large.png");
        my.sprite.leftHorn = this.add.sprite(this.bodyX-65, this.bodyY-62, "monsterParts", "detail_green_horn_large.png");
        my.sprite.leftHorn.flipX = true;

        my.sprite.fangs.visible = false;

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        this.input.keyboard.on("keydown", function(event){
            if(event.code == "KeyS"){
                my.sprite.smile.visible = true;
                my.sprite.fangs.visible = false;
            }
            else if(event.code == "KeyF"){
                my.sprite.fangs.visible = true;
                my.sprite.smile.visible = false;
            }
            if(event.code == "KeyD"){
                my.sprite.rightLeg.x += 0.01;
                my.sprite.leftLeg.x += 0.01;
                my.sprite.rightArm.x += 0.01;
                my.sprite.leftArm.x += 0.01;
                my.sprite.body.x += 0.01;
                my.sprite.rightEye.x += 0.01;
                my.sprite.leftEye.x += 0.01;
                my.sprite.topEye.x += 0.01;
                my.sprite.smile.x += 0.01;
                my.sprite.fangs.x += 0.01;
                my.sprite.rightHorn.x += 0.01;
                my.sprite.leftHorn.x += 0.01;
                
            }
            if(event.code == "KeyA"){
                my.sprite.rightLeg.x -= 0.01;
                my.sprite.leftLeg.x -= 0.01;
                my.sprite.rightArm.x -= 0.01;
                my.sprite.leftArm.x -= 0.01;
                my.sprite.body.x -= 0.01;
                my.sprite.rightEye.x -= 0.01;
                my.sprite.leftEye.x -= 0.01;
                my.sprite.topEye.x -= 0.01;
                my.sprite.smile.x -= 0.01;
                my.sprite.fangs.x -= 0.01;
                my.sprite.rightHorn.x -= 0.01;
                my.sprite.leftHorn.x -= 0.01;
                
            }
        })
    }

}