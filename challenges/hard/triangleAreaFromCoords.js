/**
 * Uses the Shoelace Algorithm (https://vimeo.com/429687542) to find the area of a triangle given the coordinates of the three corners.
 * The triangle is not assumed to be a right-triangle. The points are given in an array, e.g.
 * [{ x: 3, y: 4}, { x: 4, y: 6 }, { x: 7, y: 1 }]
 * @param {{ x: number, y: number }[]} points - The three vertices of the triangle
 * @returns 
 */

function triangleAreaFromCoords (points) {
  [A, B, C] = points
  return 0.5 * ((A.x * B.x + B.x * C.x + C.x * A.x) - (A.y * B.y + B.y * C.y + C.y * A.y))
}

module.exports = triangleAreaFromCoords
