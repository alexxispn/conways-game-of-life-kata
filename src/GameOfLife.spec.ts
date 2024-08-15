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
})
