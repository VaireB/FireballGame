export default class BootScene extends Phaser.Scene {
    constructor() {
      super('boot');
    }
  
    preload() {
      // Preload any assets needed for the boot scene, such as loading screen images or progress bar graphics
  
      // Example:
      this.load.image('loadingBar', 'assets/buttons/loadingBar.png');
    }
  
    create() {
      // Set up any necessary configurations for the game, such as scaling options or input settings
  
      // Example:
      this.scale.setGameSize(400, 600);
  
      // Set the background color to black
      this.cameras.main.setBackgroundColor('#000000');
  
      // Display a loading screen while loading the assets for the next scene
      const loadingBar = this.add.image(200, 300, 'loadingBar');
  
      // Add a black frame
      const frame = this.add.rectangle(
        this.cameras.main.width / 2,
        this.cameras.main.height / 2,
        this.cameras.main.width - 20,
        this.cameras.main.height - 20,
        0x000000
      );
      frame.setStrokeStyle(4, 0x000000); // Set the border color and thickness
  
      // Load the assets needed for the next scene
      this.loadAssets(() => {
        // Assets loaded, transition to the next scene
        this.scene.start('menu');
      });
    }
  
    loadAssets(callback) {
      // Load any assets needed for the game, such as images, sounds, or spritesheets
  
      // Example:
      this.load.image('menuBackground', 'assets/images/menuBG.png');
      this.load.audio('menuMusic', 'assets/audio/menuBGM.mp3');
  
      // Call the callback function when all assets have finished loading
      this.load.on('complete', callback);
      this.load.start();
    }
  }
  