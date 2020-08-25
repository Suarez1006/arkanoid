var config = {
  type: Phaser.AUTO,
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 900,
    height: 930,
  },

  physics: { default: "arcade", arcade: { gravity: { y: 0 }, debug: false } },
  scene: [niveles],
};

var game = new Phaser.Game(config);

var paleta;
var pelota;

var cursors;
var keySpace;
var keyEnter;

var map;
var finish = 0;
var width = 900;
var height = 930;
