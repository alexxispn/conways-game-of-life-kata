import { describe, expect, it } from "vitest"
import { GameLoader } from "./GameLoader.js"
import { GameOfLife } from "./GameOfLife.js"

describe("GameLoader", () => {
  it("loads game state from string", () => {
    const input = "◼️◼️◼️\n◼️◼️◼️\n◼️◼️◼️"
    const gameLoader = new GameLoader()
    const gameOfLife = gameLoader.parse(input)

    const expected = new GameOfLife([
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ])

    expect(gameOfLife).toEqual(expected)
  })
})
