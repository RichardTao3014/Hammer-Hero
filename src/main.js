/*
Name: Richard Tao
Game Name: Hammer Hero
*/

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 750,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 475 }
        }
    },
    
    pixelArt: true,
    scene: [ Menu, Instructions, Play, GameOver, Victory ]
}

const game = new Phaser.Game(config)

const centerX = game.config.width / 2
const centerY = game.config.height / 2

let cursors = null