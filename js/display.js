import {
  minutesDisplay,
  secondsDisplay,
  btnForest,
  btnRain,
  btnCoffeeShop,
  btnFire,
  btnSun,
  btnMoon,
  body
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

  function darkMode() {
    body.classList.remove("light-theme")
    body.classList.add("dark-theme")
    btnSun.classList.toggle("enabled")
    btnMoon.classList.toggle("enabled")
  }
  function lightMode() {
    body.classList.remove("dark-theme")
    body.classList.add("light-theme")
    btnSun.classList.toggle("enabled")
    btnMoon.classList.toggle("enabled")
  }

  return { updateDisplay, enableSoundForButton, unableSoundForAllButtons, darkMode, lightMode }
}

