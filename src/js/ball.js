class Ball extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, "atlas", "ball");
    config.scene.add.existing(this);
    config.scene.physics.world.enableBody(this);
    this.body.setBounce(1);
    this.body.setFriction(0, 0);
    this.setScale(0.85);
    this.body.setCollideWorldBounds(true);
  }
  start() {
    var patron = Phaser.Math.FloatBetween(-500, 500);
    this.body.setVelocity(patron, -600);
    play = 1;
  }
  reset() {
    this.body.setVelocity(0);
    this.body.reset(450, 770);
  }
}
