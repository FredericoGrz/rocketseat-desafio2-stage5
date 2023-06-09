import {
  btnPlay,
  btnStop,
  btnPlus,
  btnMinus,
  btnForest,
  btnRain,
  btnCoffeeShop,
  btnFire
} from "./elements.js";

import Sound from "./sound.js"

import Timer from "./timer.js"

import Display from "./display.js";

export default function Events() {

  const display = new Display()

  const sound = new Sound()

  const timer = new Timer()

  btnPlay.addEventListener("click", function () {
    console.log(timer.enabled())
    if (!timer.enabled())
      timer.countDown()
  })

  btnStop.addEventListener("click", function () {
    timer.stop()
  })

  btnPlus.addEventListener("click", function () {
    timer.addFiveMinutes()
  })

  btnMinus.addEventListener("click", function () {
    timer.removeFiveMinutes()
  })

  btnForest.addEventListener("click", function () {
    let isPlaying = btnForest.classList.contains("enabled")
    if (isPlaying) {
      sound.pause(sound.forest)
      display.unableSoundForAllButtons()
    }
    else {
      sound.play(sound.forest)
      display.enableSoundForButton(btnForest)
    }
  })
  btnRain.addEventListener("click", function () {
    let isPlaying = btnRain.classList.contains("enabled")
    if (isPlaying) {
      sound.pause(sound.rain)
      display.unableSoundForAllButtons()
    }
    else {
      sound.play(sound.rain)
      display.enableSoundForButton(btnRain)
    }
  })

  btnCoffeeShop.addEventListener("click", function () {
    let isPlaying = btnCoffeeShop.classList.contains("enabled")
    if (isPlaying) {
      sound.pause(sound.coffeeShop)
      display.unableSoundForAllButtons()
    }
    else {
      sound.play(sound.coffeeShop)
      display.enableSoundForButton(btnCoffeeShop)
    }
  })
  btnFire.addEventListener("click", function () {
    let isPlaying = btnFire.classList.contains("enabled")
    if (isPlaying) {
      sound.pause(sound.fire)
      display.unableSoundForAllButtons()
    }
    else {
      sound.play(sound.fire)
      display.enableSoundForButton(btnFire)
    }
  })
}