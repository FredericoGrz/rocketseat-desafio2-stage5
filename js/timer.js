import { minutesDisplay, secondsDisplay } from "./elements.js";
import Display from "./display.js";

export default function Timer() {
  const display = new Display()

  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)
  let timeOut
  let isEnabled = false

  function countDown() {
    isEnabled = true
    timeOut = setTimeout(function () {
      let isTimerOver = minutes <= 0 && seconds <= 0
      let isMinuteOver = seconds <= 0

      if (isTimerOver)
        stop()
      if (isMinuteOver) {
        --minutes
        seconds = 59
      }
      else
        --seconds

      display.updateDisplay(minutes, seconds)
      countDown()
    }, 1000)

  }

  function stop() {
    isEnabled = false
    clearTimeout(timeOut)
  }

  function addFiveMinutes() {
    minutes += 5
    display.updateDisplay(minutes, seconds)
  }

  function removeFiveMinutes() {
    let isPossible = minutes >= 5

    if (isPossible) {
      minutes -= 5
      display.updateDisplay(minutes, seconds)
    }
  }

  function enabled() {
    return isEnabled
  }

  return { countDown, stop, addFiveMinutes, removeFiveMinutes, enabled }
}