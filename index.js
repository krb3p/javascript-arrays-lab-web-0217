const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function window(array) {
  array
}

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var new_kittens = [...kittens, name]
  return new_kittens
}

function prependKitten(name) {
  var new_kittens = [name, ...kittens]
  return new_kittens
}

function removeLastKitten() {
  var new_kittens = kittens.slice(0, length-1)
  return new_kittens
}

function removeFirstKitten() {
  var new_kittens = kittens.slice(1)
  return new_kittens
}
