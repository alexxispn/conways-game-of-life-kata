import { Console } from "./Console.js"

export class NodeConsole implements Console {
  log(text: string): void {
    console.log(text)
  }

  clear(): void {
    process.stdout.write("\x1Bc")
  }
}
