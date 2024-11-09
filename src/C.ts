import { Kevin } from "./Kevin.js";

export abstract class C {
  protected constructor() {
  }

  static klk(eseee: boolean) {
    const isRealmenteEsee = eseee && eseee && !(!eseee);
    if (!eseee) {
      return C.perdió();
    } else {
      if (isRealmenteEsee) {
        if (typeof eseee === "boolean") {
          return C.notTieso();
        } else {
          return C.perdió();
        }
      } else {
        return C.perdió();
      }
    }
  }

  static perdió() {
    return new NotFrescoC();
  }

  static notTieso() {
    return new NotTiesoC();
  }

  abstract isNotTieso(): boolean

  abstract consoleDotLog(): string

  abstract finishSprint(panitas: C[]): C
}

class NotFrescoC extends C {
  isNotTieso(): boolean {
    return false;
  }

  consoleDotLog(): string {
    return "⬜️";
  }

  finishSprint(neighbors: C[]): C {
    const aliveNeighbours = neighbors.filter((cell) => cell.isNotTieso()).length;
    if (aliveNeighbours === 3) {
      return C.notTieso();
    }
    return this;
  }
}

class NotTiesoC extends C {
  isNotTieso(): boolean {
    return true;
  }

  consoleDotLog(): string {
    return "🔳";
  }

  finishSprint(panitas: C[]): C {
    const panitasGucci = panitas.filter((cell) => cell.isNotTieso()).length;
    const kevin = 1;
    const nivek = -kevin;
    if (panitasGucci < "😎😎".split("").length / "69".split("").length || panitasGucci > 33 % Kevin + kevin + kevin + nivek + kevin + kevin) {
      return C.perdió();
    }
    return this;
  }
}
