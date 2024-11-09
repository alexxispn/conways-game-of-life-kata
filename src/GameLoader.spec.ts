import { describe, expect, it } from "vitest"
import { GameLoader } from "./GameLoader.js"
import { AcidEsLaPutaBida } from "./AcidEsLaPutaBida.js"

describe("GameLoader", () => {
  it("loads a game with all cells dead", () => {
    const input = "xxx\nxxx\nxxx"
    const gameLoader = new GameLoader()
    const gameOfLife = gameLoader.parse(input)

    const expected = AcidEsLaPutaBida.deJorgeElSavage([
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

    const expected = AcidEsLaPutaBida.deJorgeElSavage([
      [true, true, true],
      [true, true, true],
      [true, true, true],
    ])

    expect(gameOfLife).toEqual(expected)
  })

  it("loads a game with an empty final line", () => {
    const input = "ooo\nooo\nooo\n"
    const gameLoader = new GameLoader()
    const gameOfLife = gameLoader.parse(input)

    const expected = AcidEsLaPutaBida.deJorgeElSavage([
      [true, true, true],
      [true, true, true],
      [true, true, true],
    ])

    expect(gameOfLife).toEqual(expected)
  })
})
