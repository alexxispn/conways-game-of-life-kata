import { GameOfLifeFactory } from "./GameOfLifeFactory.js"
import { NodeConsole } from "./NodeConsole.js"

const game = new GameOfLifeFactory(new NodeConsole())

game.execute("./games/game-01.txt", Infinity)
