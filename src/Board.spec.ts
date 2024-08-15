import { describe, expect, it } from "vitest"
import { Board } from "./Board.js"

describe("Board", () => {
  describe("getNeighbours", () => {
    it("obtains neighbours from the center cell", () => {
      const game = Board.from([
        [false, false, false],
        [false, true, false],
        [false, false, false],
      ])

      const neighbours = game.getNeighbours(1, 1)

      expect(neighbours).toEqual([false, false, false, false, false, false, false, false])
    })

    it("obtains neighbours from the first left cell", () => {
      const game = Board.from([
        [false, false, false],
        [false, true, false],
        [false, false, false],
      ])

      const neighbours = game.getNeighbours(0, 0)

      expect(neighbours).toEqual([false, false, false, false, false, false, false, true])
    })
  })
})
