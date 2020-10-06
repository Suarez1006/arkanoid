class Paddle extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, "atlas", "paddle");
    config.scene.add.existing(this);
    config.scene.physics.world.enableBody(this);
    this.body.setCollideWorldBounds(true);
  }
  moverIZQ() {
    this.body.setVelocityX(-550);
  }
  moverDER() {
    this.body.setVelocityX(550);
  }
  stop() {
    this.body.setVelocityX(0);
  }
  reset() {
    this.body.reset(450, 803);
  }
}
