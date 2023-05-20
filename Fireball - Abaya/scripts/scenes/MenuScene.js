export default class MenuScene extends Phaser.Scene {
    constructor() {
        super('menu');
    }

    preload() {
        // Preload audio files
        this.load.audio('menuMusic', 'assets/audio/menuBGM.mp3');
        // Preload background image
        this.load.image('menuBackground', 'assets/images/menuBG.png');
        // Preload button images
        this.load.image('startButton', 'assets/buttons/startbutton.png');
        this.load.image('exitButton', 'assets/buttons/exitbutton.png');

        //Preload Logo
        this.load.image('wizard', 'assets/images/wizard.png')
    }

    create() {
        // Add the background image
        const menuBackground = this.add.image(0, 0, 'menuBackground').setOrigin(0, 0);
        menuBackground.setOrigin(0, 0);
        menuBackground.displayWidth = 400;
        menuBackground.displayHeight = 600;

        const wizardlogo = this.add.image(200, 200, 'wizard');
        //wizardlogo.setScale(.5);

        // Background music
        this.music = this.sound.add('menuMusic', { loop: true });
        this.music.play();

        // Add the start button
        const startButton = this.add.image(200, 400, 'startButton')
            .setInteractive()
            .on('pointerdown', () => {
                this.music.stop(); // Stop the menu music when transitioning to the game scene
                this.scene.start('game');
            });

        // Add the exit button
        const exitButton = this.add.image(200, 500, 'exitButton')
            .setInteractive()
            .on('pointerdown', () => {
                if (confirm('Are you sure you want to exit the game?')) {
                    window.close();
                }
            });
    }
}
