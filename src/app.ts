import * as Phaser from "phaser";

import InitState from "./InitState";
import GameState from "./GameState";
import PreInitState from "./PreInitState";

const config: Phaser.Types.Core.GameConfig = {
 
  backgroundColor: "#000",
  height: 768,
  parent: "game-container",
  scene: [PreInitState, InitState, GameState],
  type: Phaser.AUTO,
   width:800
};

export const game = new Phaser.Game(config);
