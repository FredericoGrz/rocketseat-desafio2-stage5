export default function Sound() {
  let forest = new Audio("../assets/Floresta.wav")
  let rain = new Audio("../assets/Chuva.wav")
  let coffeeShop = new Audio("../assets/Cafeteria.wav")
  let fire = new Audio("../assets/Lareira.wav")

  function play(audio) {
    pause(forest)
    pause(rain)
    pause(coffeeShop)
    pause(fire)
    audio.loop = true
    audio.play()
  }

  function pause(audio) {
    audio.pause()
  }

  return {
    forest, rain, coffeeShop, fire, play, pause
  }

}


