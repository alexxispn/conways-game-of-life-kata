import { GameOfLifeFactory } from "./GameOfLifeFactory.js"
import { NodeConsole } from "./NodeConsole.js"
import { ClockNode } from "./ClockNode.js"

const game = new GameOfLifeFactory(new NodeConsole(), new ClockNode())

await game.execute("./games/game-01.txt", Infinity)
