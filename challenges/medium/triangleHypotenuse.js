/**
 * Works out the hypotenuse of a right-triangle with two shorter sides a and b
 * using Pythagoras' Theorem (https://en.wikipedia.org/wiki/Pythagorean_theorem)
 * @param {number} a - a side length
 * @param {number} b - the other side length
 * @returns {number} the hypotenuse
*/

function triangleHypotenuse (a, b) {
  return sqrt(a^2 + b^2)
}

module.exports = triangleHypotenuse
