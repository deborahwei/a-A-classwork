const View = require("./ttt-view.js");
const Game = require("/ttt_node/game.js");

document.addEventListener("DOMContentLoaded", () => {
  let game = new Game()
  const element = document.querySelector('.ttt');
  let view = new View(game, element)

});
