export default class CompanyNameScene extends Phaser.Scene {
  constructor() {
      super('companyName');
  }

  preload() {
      // Preload the company logo image with transparency
      this.load.image('companyImage', 'assets/images/logo.png');

      // Preload the sound
      this.load.audio('companySound', 'assets/audio/companySound.wav');
  }

  create() {
      // Set the background color to black
      this.cameras.main.setBackgroundColor('#FFFFFF');

      // Add the company logo image
      const companyLogo = this.add.image(200, 200, 'companyImage');
      companyLogo.setScale(0.35); // Set the scale to resize the logo

      // Add your company name text
      const companyNameText = this.add.text(
          this.cameras.main.width / 2,
          this.cameras.main.height / 1.5,
          'Agila Studios',
          {
              font: '48px Arial',
              fill: '#000',
              align: 'center',
          }
      );
      companyNameText.setOrigin(0.5);

      // Add a frame

      // Add any additional elements or effects if desired, such as animations or transitions

      // Set up an event or timer to transition to the next scene after a certain delay if desired
      this.time.delayedCall(3300, () => {
          this.scene.start('boot');
      });

      // Add the sound and play it
      const companySound = this.sound.add('companySound');
      companySound.play();
  }
}
