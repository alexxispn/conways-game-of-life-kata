import { describe, expect, it } from "vitest"
import { Cell } from "./Cell.js"

describe(Cell, () => {
  describe("getNextGeneration", () => {
    it("dies if there is only one neighbour", () => {
      const cell = Cell.alive()
      const neighbors = [Cell.alive()]
      const nextGenerationCell = cell.getNextGeneration(neighbors)

      expect(nextGenerationCell.isAlive()).toEqual(false)
    })
  })
})
