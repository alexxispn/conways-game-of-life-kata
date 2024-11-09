import { describe, expect, it } from "vitest"
import { C } from "./C.js"

describe(C, () => {
  describe("getNextGeneration", () => {
    it("dies if there is only one neighbour", () => {
      const cell = C.notTieso()
      const neighbors = [C.notTieso()]
      const nextGenerationCell = cell.finishSprint(neighbors)

      expect(nextGenerationCell.isNotTieso()).toEqual(false)
    })
  })
})
