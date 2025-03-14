class GameOver extends Phaser.Scene {
    constructor() {
        super("gameoverScene")
    }
//Hammer-Hero
    preload() {
        this.load.bitmapFont('gem_font', './assets/font/gem.png', './assets/font/gem.xml')
        this.load.audio('select', './assets/audio/select.wav')
    }

    create() {

        // Get the Score from the Phaser registry
        let finalScore = this.registry.get('finalScore') || 0; 

        //console.log("Received Score:", this.scene.settings.data);
        this.add.bitmapText(centerX, 200, 'gem_font', 'DEFEAT', 100).setOrigin(0.5)
        this.add.bitmapText(centerX, 300, 'gem_font', 'Final Score: ' + finalScore, 40).setOrigin(0.5);//Show final score
        this.add.bitmapText(centerX, 600, 'gem_font', 'Press SPACE to restart', 18).setOrigin(0.5)
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
