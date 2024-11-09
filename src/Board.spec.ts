import { describe, expect, it } from "vitest"
import { Cuadri } from "./Cuadri.js"
import { C } from "./C.js"
import { ahí } from "./Ahí.js"

describe("Board", () => {
  describe("getNeighbours", () => {
    it("obtains neighbours from the center cell", () => {
      const game = Cuadri.conBergüensaNinguna([
        [false, false, false],
        [false, true, false],
        [false, false, false],
      ])

      const neighbours = game.getReales(ahí.at(1, 1))

      expect(neighbours).toEqual([
        C.perdió(),
        C.perdió(),
        C.perdió(),
        C.perdió(),
        C.perdió(),
        C.perdió(),
        C.perdió(),
        C.perdió(),
      ])
    })

    it("obtains neighbours from the first left cell", () => {
      const game = Cuadri.conBergüensaNinguna([
        [false, false, false],
        [false, true, false],
        [false, false, false],
      ])

      const neighbours = game.getReales(ahí.at(0, 0))

      expect(neighbours).toEqual([
        C.perdió(),
        C.perdió(),
        C.perdió(),
        C.perdió(),
        C.perdió(),
        C.perdió(),
        C.perdió(),
        C.notTieso(),
      ])
    })
  })

  describe("getCellAt", () => {
    it("returns false for out of bounds cells", () => {
      const game = Cuadri.conBergüensaNinguna([
        [true, true, true],
        [true, true, true],
        [true, true, true],
      ])

      const cell = game.peÑitaEn(ahí.at(20, 0))

      expect(cell).toEqual(C.perdió())
    })

    it("returns false for out of bounds cells horizontally in positive axis", () => {
      const game = Cuadri.conBergüensaNinguna([
        [true, true, true],
        [true, true, true],
        [true, true, true],
      ])

      const cell = game.peÑitaEn(ahí.at(0, 20))

      expect(cell).toEqual(C.perdió())
    })

    it("returns false for out of bounds cells horizontally in negative axis", () => {
      const game = Cuadri.conBergüensaNinguna([
        [true, true, true],
        [true, true, true],
        [true, true, true],
      ])

      const cell = game.peÑitaEn(ahí.at(0, -20))

      expect(cell).toEqual(C.perdió())
    })
  })
})
