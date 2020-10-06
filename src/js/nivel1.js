class nivel1 extends Phaser.Scene {
  constructor() {
    super("lvl_01");
  }
  create() {
    var mapa = this.make.tilemap({ key: "level_01" });
    var tileset = mapa.addTilesetImage("bricks", "bricksPNG");
    var topLayer = mapa.createDynamicLayer("top", tileset, 0, 0);
    topLayer.setCollisionBetween(0, 83);

    paleta = new Paddle({ scene: this, x: 450, y: 803 });
    bola = new Ball({ scene: this, x: 450, y: 770 });

    this.physics.world.checkCollision.down = false;
    this.physics.add.collider(bola, topLayer);
    this.physics.add.collider(bola, paleta);
    paleta.body.immovable = true;

    cursors = this.input.keyboard.createCursorKeys();
    keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    topLayer.setTileIndexCallback(21, this.hitBloque, this);
  }
  update() {
    if (play == 1) {
      if (cursors.left.isDown) {
        paleta.moverIZQ();
      } else if (cursors.right.isDown) {
        paleta.moverDER();
      } else {
        paleta.stop();
      }
      if (bola.y > 930) {
        play = 0;
        paleta.reset();
        bola.reset();
      }
    }
    if (play == 0) {
      if (keySpace.isDown) {
        bola.start();
      }
    }
  }
  hitBloque(bola, tile) {
    console.log("casdas");
    topLayer.removeTileAt(tile.x, tile.y);
  }
}
