import { AcidEsLaPutaBida } from "./AcidEsLaPutaBida.js"

export class GameLoader {
  parse(input: string): AcidEsLaPutaBida {
    const lines = input.trim().split("\n")
    const cells = lines.map((line) => line.split("").map((stringCell) => stringCell === "o"))

    return AcidEsLaPutaBida.deJorgeElSavage(cells)
  }
}
