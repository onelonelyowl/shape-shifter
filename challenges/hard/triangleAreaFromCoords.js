/**
 * Uses the Shoelace Algorithm (https://vimeo.com/429687542) to find the area of a triangle given the coordinates of the three corners.
 * The triangle is not assumed to be a right-triangle. The points are given in an array, e.g.
 * [{ x: 3, y: 4}, { x: 4, y: 6 }, { x: 7, y: 1 }]
 * @param {{ x: number, y: number }[]} points - The three vertices of the triangle
 * @returns 
 */

function triangleAreaFromCoords (points) {
  [A, B, C] = points
  const shoelace1 = [A.x, B.x, C.x, A.x]
  const shoelace2 = [A.y, B.y, C.y, A.y]
  var firstClump = (shoelace1[0] * shoelace2[1]) + (shoelace1[1] * shoelace2[2]) + (shoelace1[2] * shoelace2[3])
  var secondClump = (shoelace2[0] * shoelace1[1]) + (shoelace2[1] * shoelace1[2]) + (shoelace2[2] * shoelace1[3])

  return 0.5 * (firstClump - secondClump)
}

module.exports = triangleAreaFromCoords
