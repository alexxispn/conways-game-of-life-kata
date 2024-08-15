import { describe, expect, it } from "vitest"
import { GameLoader } from "./GameLoader.js"
import { GameOfLife } from "./GameOfLife.js"

describe("GameLoader", () => {
  it("loads a game with all cells dead", () => {
    const input = "xxx\nxxx\nxxx"
    const gameLoader = new GameLoader()
    const gameOfLife = gameLoader.parse(input)

    const expected = GameOfLife.from([
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ])

    expect(gameOfLife).toEqual(expected)
  })

  it("loads a game with all cells alive", () => {
    const input = "ooo\nooo\nooo"
    const gameLoader = new GameLoader()
    const gameOfLife = gameLoader.parse(input)

    const expected = GameOfLife.from([
      [true, true, true],
      [true, true, true],
      [true, true, true],
    ])

    expect(gameOfLife).toEqual(expected)
  })
})
