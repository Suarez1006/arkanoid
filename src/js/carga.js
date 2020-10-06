class carga extends Phaser.Scene {
  constructor() {
    super("preloader");
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
    this.scene.start("lvl_01");
  }
}
