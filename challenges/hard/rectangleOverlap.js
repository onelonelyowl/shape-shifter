/*
 * This is intended to be a challenge for any squad who gets finished with everything else.
 * If you haven't done the other challenges, try those first!
 * 
 * Imagine you have two rectangles with horizontal bases. If you draw them on the same grid,
 * they would overlap! Each rectangle is described by an array of coordinates, for example:
 * [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }]
 * Can you write a function which calculates the area of the overlap between two rectangles?
 * 
 */

const rectangleAreaFromCoords = require("../medium/rectangleAreaFromCoords");

/**
 * Given the four corners of two rectangles, find the area of their overlap.
 * If they don't overlap, return 0.
 * @param {{x: number, y: number}[]} rectangle1 - The four corners of rectangle 1
 * @param {{x: number, y: number}[]} rectangle2 - The four corners of rectangle 2
 */
function rectangleOverlap (rectangle1, rectangle2) {
  var horizontalCoords = ([rectangle1[0].x, rectangle1[1].x, rectangle2[0].x, rectangle2[1].x])
  horizontalCoords.sort(function(a, b){return a - b});
  var horizontalOverlap = horizontalCoords[2] - horizontalCoords[1]
  var verticalCoords  = ([rectangle1[1].y, rectangle1[2].y, rectangle2[1].y, rectangle2[2].y])
  verticalCoords.sort(function(a, b){return a - b});
  var verticalOverlap = verticalCoords[2] - verticalCoords[1]
  // if fully overlapping, return area of either rectangle
  if (rectangle1[1].x == rectangle2[1].x && rectangle1[2].y == rectangle2[2].y){
    return rectangleAreaFromCoords(rectangle1)
  }
  // if no overlap, return 0
  if (rectangle1[1].x <= rectangle2[0].x || rectangle1[2].y <= rectangle2[1].y){
    return 0
  }
  // same but reverse
  if (rectangle2[1].x <= rectangle1[0].x || rectangle2[2].y <= rectangle1[1].y){
    return 0
  }
  var allrect1x = [rectangle1[0].x, rectangle1[1].x, rectangle1[2].x, rectangle1[3].x]
  var allrect2x = [rectangle2[0].x, rectangle2[1].x, rectangle2[2].x, rectangle2[3].x]
  var allrect1y = [rectangle1[0].y, rectangle1[1].y, rectangle1[2].y, rectangle1[3].y]
  var allrect2y = [rectangle2[0].y, rectangle2[1].y, rectangle2[2].y, rectangle2[3].y]
  // find if rectangle2 is entirely self-contained within rectangle 1
  if(
    (Math.min.apply(Math, allrect1x) < Math.min.apply(Math, allrect2x)  
    && Math.max.apply(Math, allrect1x) > Math.max.apply(Math, allrect2x)
    && Math.min.apply(Math, allrect1y) < Math.min.apply(Math, allrect2y)  
    && Math.max.apply(Math, allrect1y) > Math.max.apply(Math, allrect2y)))
    {
      return rectangleAreaFromCoords(rectangle2)
    }
  
  // and vice versa
  if(
    (Math.min.apply(Math, allrect2x) < Math.min.apply(Math, allrect1x)  
    && Math.max.apply(Math, allrect2x) > Math.max.apply(Math, allrect1x)
    && Math.min.apply(Math, allrect2y) < Math.min.apply(Math, allrect1y)  
    && Math.max.apply(Math, allrect2y) > Math.max.apply(Math, allrect1y)))
    {
      return rectangleAreaFromCoords(rectangle1)
    }
  // now to find actual overlap

  return horizontalOverlap * verticalOverlap
}
rectangleOverlap([
        { x: 0, y: 0 },
        { x: 9, y: 0 },
        { x: 9, y: 9 },
        { x: 0, y: 9 }
      ],
      [
        { x: 2, y: 2 },
        { x: 2, y: 7 },
        { x: 7, y: 2 },
        { x: 7, y: 7 }
      ])
module.exports = rectangleOverlap
