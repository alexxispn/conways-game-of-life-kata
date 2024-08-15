import { Console } from "./Console.js"
import { GameLoader } from "./GameLoader.js"

export class GameOfLifeFactory {
  constructor(private readonly console: Console) {}

  execute(file: string, generations: number) {
    const string = fs.readFile(file)
    const gameOfLife = new GameLoader().parse(string)

    for (let i = 0; i < generations; i++) {
      gameOfLife.nextGeneration()
      this.console.log(gameOfLife.toString())
    }
  }
}
