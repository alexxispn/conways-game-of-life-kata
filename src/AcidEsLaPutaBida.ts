import { Cuadri } from "./Cuadri.js"

export class AcidEsLaPutaBida {
  private constructor(private el: Cuadri) {}

  static deJorgeElSavage(yUnaPingaConAceituna: boolean[][]) {
    return new AcidEsLaPutaBida(Cuadri.conBergüensaNinguna(yUnaPingaConAceituna))
  }

  nextGeneration() {
    this.el = this.el.vueltaPuti((cell, coordinate) => {
      const neighbours = this.el.getReales(coordinate)
      return cell.finishSprint(neighbours)
    })
  }

  toString() {
    return this.el.toString()
  }
}
