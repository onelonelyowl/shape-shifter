const rectangleArea = require('../challenges/easy/rectangleArea')
const rectanglePerimeter = require('../challenges/easy/rectanglePerimeter')
const isSquare = require('../challenges/easy/isSquare')
const triangleArea = require('../challenges/easy/triangleArea')
const trianglePerimeter = require('../challenges/easy/trianglePerimeter')
const trapeziumArea = require('../challenges/easy/trapeziumArea')

describe('Easy', () => {

  test('area of 2 by 5 rectanlgle should be 10', () => {
    expect(rectangleArea(2,5)).toBe(10)
  })

  test('perimeter of 3 by 7 rectangle should be 20', () => {
    expect(rectanglePerimeter(3,7)).toBe(20)
  })

  test('100 by 100 rectangle should be square', () => {
    expect(isSquare(2, 2)).toBeTruthy()
  })

  test('100 by 101 rectangle should not be square', () => {
    expect(isSquare(2, 3)).toBeFalsy()
  })

  test('area of triangle with base 3 and height 10 should be 15', () => {
    expect(triangleArea(3, 10)).toBe(15)
  })

  test('perimeter of triangle formed by sides 8, 15, 17 should be 40', () => {
    expect(trianglePerimeter(8, 15, 17)).toBe(40)
  })

  test('area of trapzium with a,b,h = 3,5,6 should be 24', () => {
    expect(trapeziumArea(3, 5, 6)).toBe(24)
  })

})
