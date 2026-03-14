export class Timer {
  constructor({ onTick, onDone }) {
    this.onTick = onTick
    this.onDone = onDone
    this._interval = null
    this.timeLeft = 0
    this.totalTime = 0
    this.running = false
  }

  set(seconds) {
    this.stop()
    this.timeLeft = seconds
    this.totalTime = seconds
    this.running = false
  }

  start() {
    if (this.running || this.timeLeft <= 0) return
    this.running = true
    this._interval = setInterval(() => {
      this.timeLeft--
      this.onTick(this.timeLeft, this.totalTime)
      if (this.timeLeft <= 0) {
        this.stop()
        this.onDone()
      }
    }, 1000)
  }

  pause() {
    this.running = false
    clearInterval(this._interval)
  }

  reset() {
    this.pause()
    this.timeLeft = this.totalTime
    this.onTick(this.timeLeft, this.totalTime)
  }

  stop() {
    this.running = false
    clearInterval(this._interval)
  }

  static format(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0')
    const s = (seconds % 60).toString().padStart(2, '0')
    return `${m}:${s}`
  }
}
