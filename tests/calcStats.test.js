const calcStats = require('../src/calcStats.js');

describe('calcStats', () => {
  describe('.min(arr)', () => {
    validateInputTests(calcStats.min);

    it('returns -10 for [0,5,10,-10,15,0,60,20,44,55]', function () {
      expect(calcStats.min([0, 5, 10, -10, 15, 0, 60, 20, 44, 55])).toEqual(-10);
    });
  });

  describe('.max(arr)', () => {
    validateInputTests(calcStats.max);

    it('returns 60 for [0,5,10,-10,15,0,60,20,44,55]', function () {
      expect(calcStats.max([0, 5, 10, -10, 15, 0, 60, 20, 44, 55])).toEqual(60);
    });
  });

  describe('.len(arr)', () => {
    validateInputTests(calcStats.len);

    it('returns 10 for [0,5,10,-10,15,0,60,20,44,55]', function () {
      expect(calcStats.len([0, 5, 10, -10, 15, 0, 60, 20, 44, 55])).toEqual(10);
    });
  });

  describe('.avg(arr)', () => {
    validateInputTests(calcStats.avg);

    it('returns 19.9 for [0,5,10,-10,15,0,60,20,44,55]', function () {
      expect(calcStats.avg([0, 5, 10, -10, 15, 0, 60, 20, 44, 55])).toEqual(19.9);
    });
  });
});

function validateInputTests(method) {
  it('returns null when the input isn\'t an array', function () {
    expect(method("1")).toEqual(null);
  });

  it('returns null when the array is empty', function () {
    expect(method([])).toEqual(null);
  });

  it('returns null if the items in the array aren\'t integers', function () {
    expect(method(["1", "2", {}])).toEqual(null);
  });
}