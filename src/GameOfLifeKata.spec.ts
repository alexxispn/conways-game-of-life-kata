import { describe, expect, it, vi } from "vitest"
import { Console } from "./Console.js"
import { GameOfLifeFactory } from "./GameOfLifeFactory.js"

//   Any live cell with fewer than two live neighbours dies, as if caused by under-population.
//   Any live cell with two or three live neighbours lives on to the next generation.
//   Any live cell with more than three live neighbours dies, as if by overcrowding.
//   Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

describe("GameOfLifeKata", () => {
  it("reads from a file and starts a new game of life", () => {
    const file = "./games/game-01.txt"
    const console: Console = { log: vi.fn() }
    const gameOfLife = new GameOfLifeFactory(console)
    gameOfLife.execute(file, 3)

    expect(console.log).toBeCalledTimes(3)
    expect(console.log).toBeCalledWith(`◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️
◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️
◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️
◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️
◼️◽️◼️◼️◼️◼️◼️◼️◼️◼️
◼️◼️◽️◽️◼️◼️◼️◼️◼️◼️
◼️◽️◽️◼️◼️◼️◼️◼️◼️◼️
◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️
◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️
◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️`)
  })
})
