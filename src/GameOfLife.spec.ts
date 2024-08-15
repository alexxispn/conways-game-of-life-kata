import { describe, it, expect } from "vitest"
import { GameOfLife } from "./GameOfLife.js";

describe("GameOfLife", () => {
  it("prints a dead game with black", () => {
    const game = GameOfLife.from([
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ])

    const string = game.toString()

    expect(string).toBe("◼️◼️◼️\n◼️◼️◼️\n◼️◼️◼️")
  })

  it("prints all cells alive game with white", () => {
    const game = GameOfLife.from([
      [true, true, true],
      [true, true, true],
      [true, true, true],
    ])

    const string = game.toString()

    expect(string).toBe("◽️◽️◽️\n◽️◽️◽️\n◽️◽️◽️")
  })
})
