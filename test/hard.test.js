const triangleAreaFromCoords = require('../challenges/hard/triangleAreaFromCoords')
const triangleAreaFromSides = require('../challenges/hard/triangleAreaFromSides')
const rectangleOverlap = require('../challenges/hard/rectangleOverlap')

describe('Hard', () => {

  test('area formed by (1,5), (4,2), (5,3) should be 3', () => {
    expect(triangleAreaFromCoords([{ x: 1, y: 5 }, { x: 4, y: 2 }, { x: 5, y: 3 }])).toBe(3)
  })

  test('area formed by sides 8, 15, 17 should be 60', () => {
    expect(triangleAreaFromSides(8, 15, 17)).toBe(60)
  })

  test('rectangle overlap area is calculated correctly', () => {
    expect(rectangleOverlap(
      [
        { x: 1, y: 1 },
        { x: 4, y: 1 },
        { x: 4, y: 5 },
        { x: 1, y: 5 }
      ],
      [
        { x: 0, y: 0 },
        { x: 2, y: 0 },
        { x: 2, y: 3 },
        { x: 0, y: 3 }
      ]
    )).toBe(2)
  })

  test('rectangle overlap area is calculated correctly', () => {
    expect(rectangleOverlap(
      [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 1 }
      ],
      [
        { x: 2, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 3 },
        { x: 3, y: 2 }
      ]
    )).toBe(0)
  })

  test('rectangle overlap area is calculated correctly', () => {
    expect(rectangleOverlap(
      [
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
      ]
    )).toBe(25)
  })

})