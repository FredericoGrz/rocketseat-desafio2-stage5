import {
  minutesDisplay,
  secondsDisplay,
  btnForest,
  btnRain,
  btnCoffeeShop,
  btnFire
} from "./elements.js";

export default function Display() {
  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function enableSoundForButton(button) {
    unableSoundForAllButtons()
    button.classList.add("enabled")
  }

  function unableSoundForAllButtons() {
    btnForest.classList.remove("enabled")
    btnRain.classList.remove("enabled")
    btnCoffeeShop.classList.remove("enabled")
    btnFire.classList.remove("enabled")
  }

  return { updateDisplay, enableSoundForButton, unableSoundForAllButtons }
}

