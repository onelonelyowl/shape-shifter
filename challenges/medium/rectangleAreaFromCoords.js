/**
 * Find the area of a rectangle given the four corners.
 * The base of the rectangle is assumed to be horizontal.
 * Note: The corners can be given in any order.
 * @param {{ x: number, y: number }[]} points - an array of 4 points, e.g. { x: 3, y: 5 }
 * @return {number} the area
*/
// don't know if this needed to be this complex
function rectangleAreaFromCoords (points) {
  [A,B,C,D] = points
  if (A.x != B.x && C.y != D.y) {
    return Math.abs((A.x - B.x))*Math.abs((C.y - D.y))
  }
  else if (B.y != D.y){
    return (Math.abs(A.x - C.x))*Math.abs((B.y - D.y))
  }
  else {
    return (Math.abs(A.x - C.x))*Math.abs((A.y - D.y))
  }
  
}

module.exports = rectangleAreaFromCoords
