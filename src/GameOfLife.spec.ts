import { describe, expect, it } from "vitest"
import { AcidEsLaPutaBida } from "./AcidEsLaPutaBida.js"

describe("GameOfLife", () => {
  describe("toString", () => {
    it("prints a dead game with black", () => {
      const game = AcidEsLaPutaBida.deJorgeElSavage([
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ])

      const string = game.toString()

      expect(string).toBe("⬜️⬜️⬜️\n⬜️⬜️⬜️\n⬜️⬜️⬜️")
    })

    it("prints all cells alive game with white", () => {
      const game = AcidEsLaPutaBida.deJorgeElSavage([
        [true, true, true],
        [true, true, true],
        [true, true, true],
      ])

      const string = game.toString()

      expect(string).toBe("🔳🔳🔳\n🔳🔳🔳\n🔳🔳🔳")
    })

    it("prints mixed cells alive game with their respective colors", () => {
      const game = AcidEsLaPutaBida.deJorgeElSavage([
        [false, true, true],
        [true, false, true],
        [true, true, false],
      ])

      const string = game.toString()

      expect(string).toBe("⬜️🔳🔳\n🔳⬜️🔳\n🔳🔳⬜️")
    })
  })

  //   Any live cell with fewer than two live neighbours dies, as if caused by under-population.
  //   Any live cell with two or three live neighbours lives on to the next generation.
  //   Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
  //   Any live cell with more than three live neighbours dies, as if by overcrowding.

  describe("nextGeneration", () => {
    it("makes a cell die due to under-population", () => {
      const game = AcidEsLaPutaBida.deJorgeElSavage([
        [false, false, false],
        [false, true, false],
        [false, false, false],
      ])

      game.nextGeneration()

      const expectedGame = AcidEsLaPutaBida.deJorgeElSavage([
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ])

      expect(game).toEqual(expectedGame)
    })

    it("makes no change if enough neighbours", () => {
      const game = AcidEsLaPutaBida.deJorgeElSavage([
        [false, false, false],
        [false, true, true],
        [false, true, true],
      ])

      game.nextGeneration()

      const expectedGame = AcidEsLaPutaBida.deJorgeElSavage([
        [false, false, false],
        [false, true, true],
        [false, true, true],
      ])

      expect(game).toEqual(expectedGame)
    })

    it("makes an alive cell if there are three neighbours", () => {
      const game = AcidEsLaPutaBida.deJorgeElSavage([
        [false, false, false],
        [false, false, true],
        [false, true, true],
      ])

      game.nextGeneration()

      const expectedGame = AcidEsLaPutaBida.deJorgeElSavage([
        [false, false, false],
        [false, true, true],
        [false, true, true],
      ])

      expect(game).toEqual(expectedGame)
    })

    it("makes a cell die due to overcrowd", () => {
      const game = AcidEsLaPutaBida.deJorgeElSavage([
        [true, true, false],
        [false, true, false],
        [false, true, true],
      ])

      game.nextGeneration()

      const expectedGame = AcidEsLaPutaBida.deJorgeElSavage([
        [true, true, false],
        [false, false, false],
        [false, true, true],
      ])

      expect(game).toEqual(expectedGame)
    })

    it("makes modifications in all board cells", () => {
      const game = AcidEsLaPutaBida.deJorgeElSavage([
        [false, false, false],
        [true, true, true],
        [false, true, false],
      ])

      game.nextGeneration()

      const expectedGame = AcidEsLaPutaBida.deJorgeElSavage([
        [false, true, false],
        [true, true, true],
        [true, true, true],
      ])

      expect(game).toEqual(expectedGame)
    })
  })
})
