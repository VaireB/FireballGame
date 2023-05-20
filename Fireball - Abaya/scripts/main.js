import MenuScene from './scenes/MenuScene.js';
import GameScene from './scenes/GameScene.js';
import GameOverScene from './scenes/GameOverScene.js';
import VictoryScene from './scenes/VictoryScene.js';
import BootScene from './scenes/BootScene.js';
import CompanyNameScene from './scenes/companyName.js';

let gameOverScene = new GameOverScene();
let gameScene = new GameScene();
let menuScene = new MenuScene();
let victoryScene = new VictoryScene();
let bootScene = new BootScene();
let companyScene = new CompanyNameScene();

var config = {
  type: Phaser.AUTO,
  width: 400,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 200 },
          debug: false // Enable debug mode
      }
  },
scene: [CompanyNameScene, BootScene, MenuScene, GameScene, VictoryScene, GameOverScene]

};

var game = new Phaser.Game(config);

game.scene.add('gameOverScene', gameOverScene);
game.scene.add('gameScene', gameScene);
game.scene.add('menuScene', menuScene);
game.scene.add('victoryScene', victoryScene);
game.scene.add('bootScene', bootScene);
game.scene.add('companyScene', companyScene);

game.scene.start('companyScene');