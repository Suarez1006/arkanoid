var patron;
var topLayer;
var play = 0;
var texto;
class niveles extends Phaser.Scene {
  constructor() {
    super("nivel_1");
  }
  preload() {
    this.load.image("bricksPNG", "src/assets/bricks.png");
    this.load.tilemapTiledJSON("level_01", "src/assets/level_01.json");
    this.load.tilemapTiledJSON("level_02", "src/assets/level_02.json");

    this.load.atlas(
      "atlas",
      "src/assets/paddle_atlas.png",
      "src/assets/paddle_atlas_atlas.json"
    );
  }
  create() {
    if (finish == 0) {
      map = this.make.tilemap({ key: "level_01" });
    } else if (finish == 1) {
      map = this.make.tilemap({ key: "level_02" });
    }

    var tileset = map.addTilesetImage("bricks", "bricksPNG");

    paleta = this.physics.add
      .image(450, 800, "atlas", "paddle")
      .setScale(1.2, 1);
    paleta.body.immovable = true;

    pelota = this.physics.add.image(450, 770, "atlas", "ball").setScale(0.8);

    topLayer = map.createStaticLayer("top", tileset);
    topLayer.setCollisionByProperty({ collides: true });

    texto = this.add
      .text(width / 2, height / 2, "Presiona espacio para iniciar", {
        fontSize: 40,
      })
      .setOrigin(0.5);

    this.physics.add.collider(pelota, topLayer, brickDestroy, null, this);
    this.physics.add.collider(pelota, paleta);

    pelota
      .setCollideWorldBounds(true)
      .setVelocity(0)
      .setMaxVelocity(1000)
      .setBounce(1.08);

    paleta.body.setCollideWorldBounds(true);
    this.physics.world.checkCollision.down = false;

    cursors = this.input.keyboard.createCursorKeys();
    keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    var boton = this.add
      .image(830, 880, "atlas", "skip")
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" })
      .setScale(0.6);
    boton.on("pointerdown", () => {
      play = 0;
      finish = 1;
      this.scene.restart();
    });

    patron = Phaser.Math.FloatBetween(-100, 100);
  }

  update() {
    if (play == 1) {
      if (cursors.left.isDown) {
        paleta.setVelocityX(-500);
      } else if (cursors.right.isDown) {
        paleta.setVelocityX(500);
      } else {
        paleta.setVelocityX(0);
      }
    }
    if (keySpace.isDown) {
      texto.destroy();
      start();
    }

    if (pelota.y > 910) {
      paleta.setVelocity(0);
      pelota.setVelocity(0);
      reset();
    }
  }
}

function start() {
  if (play == 0) {
    play = 1;
    pelota.setVelocity(patron, -700);
  }
}
function reset() {
  patron = Phaser.Math.FloatBetween(-100, 100);
  pelota.x = 450;
  pelota.y = 760;
  paleta.x = 450;
  play = 0;
}

function brickDestroy() {}
