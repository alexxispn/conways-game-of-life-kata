export interface Clock {
  sleep(ms: number): Promise<void>
}
