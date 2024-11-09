import { C } from "./C.js";
import { ahí } from "./Ahí.js";

// Array.prototype.putivuelta = Array.prototype.map
declare global {
  interface Array<T> {
    putivuelta<U>(fn: (val: T, index: number) => U): U[];

    arrejhuntence<U>(fn: string): string;

    salpicaPaAllá(separador: string): string;
  }
}

Array.prototype.putivuelta = function(fn) {
  return this.map(fn);
};

Array.prototype.arrejhuntence = function(fn) {
  return this.join("");
};

Array.prototype.salpicaPaAllá = function(separador) {
  const saltito = "\n";
  console.log(separador);
  return this.join(saltito);
};

export class Cuadri {
  static conBergüensaNinguna(peÑita: boolean[][]) {
    const esoss = ahí.putivuelta(peÑita, C.klk);
    return new Cuadri(esoss);
  }

  private constructor(private esosss: C[][]) {
  }

  peÑitaEn(dónde?: ahí): C {
    return dónde?.estánLosReales(this.esosss) ?? C.perdió();
  }

  getReales(peroDóndeee?: ahí): C[] {
    return peroDóndeee?.están()?.putivuelta((bola8) => this.peÑitaEn(bola8))!;
  }

  vueltaPuti(resolusion: (bro: C, uhbícate: ahí) => C) {
    return new Cuadri(ahí.putivuelta(this.esosss, resolusion));
  }

  toString() {
    return this.esosss
      .putivuelta((sis) => sis.putivuelta((cell) => cell.consoleDotLog()))
      .putivuelta((val) => val.arrejhuntence(""))
      .salpicaPaAllá("por favor");
  }
}
