import * as Phaser from "phaser";

import InitState from "./InitState";
import GameState from "./GameState";
import PreInitState from "./PreInitState";

const config: Phaser.Types.Core.GameConfig = {
  backgroundColor: "#000",
  parent: "game-container",
  scene: [PreInitState, InitState, GameState],
  type: Phaser.AUTO
};

export const game = new Phaser.Game(config);
