export default function Sound() {
  let forest = new Audio("../assets/Floresta.wav")
  let rain = new Audio("../assets/Chuva.wav")
  let coffeeShop = new Audio("../assets/Cafeteria.wav")
  let fire = new Audio("../assets/Lareira.wav")
  let defaultVolume = 0.5;

  forest.volume = defaultVolume
  rain.volume = defaultVolume
  coffeeShop.volume = defaultVolume
  fire.volume = defaultVolume

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

  function updateVolume(audio, volume) {
    audio.volume = volume / 100
  }

  return {
    forest, rain, coffeeShop, fire, play, pause, updateVolume
  }

}


