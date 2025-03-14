class Victory extends Phaser.Scene {
    constructor() {
        super("victoryScene")
    }

    preload() {
        this.load.image('victorymedal', './assets/img/victorymedal.png')
        this.load.bitmapFont('gem_font', './assets/font/gem.png', './assets/font/gem.xml')
        this.load.audio('select', './assets/audio/select.wav')
    }

    create() {

        // Get the Score from the Phaser registry
        let finalScore = this.registry.get('finalScore') || 0; 

        //console.log("Received Score:", this.scene.settings.data);
        this.add.image(centerX, 350, 'victorymedal').setScale(3)
        this.add.bitmapText(centerX, 125, 'gem_font', 'VICTORY', 100).setOrigin(0.5)
        this.add.bitmapText(centerX, 550, 'gem_font', 'Final Score: ' + finalScore, 40).setOrigin(0.5);//Show final score
        this.add.bitmapText(centerX, 650, 'gem_font', 'Press SPACE to restart', 18).setOrigin(0.5)
        this.selectsound = this.sound.add('select')
        this.selectsound.volume = .5
        cursors = this.input.keyboard.createCursorKeys()
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(cursors.space)) {
            this.selectsound.play()
            window.location.reload()
        }
    }
}
