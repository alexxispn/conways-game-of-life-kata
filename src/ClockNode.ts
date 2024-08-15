import { Clock } from "./Clock.js"

export class ClockNode implements Clock {
  sleep(ms: number) {
    return new Promise<void>((resolve) => setTimeout(resolve, ms))
  }
}
