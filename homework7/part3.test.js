/*var  {
    minElem,
    maxElem,
    minIndex,
    maxIndex,
    sumByIndex,
    reverseArray,
    summa,
    changeArray,
    sortBubble,
    sortSelect,
    sortInsert,
} = require('./part3')

describe('Part3. Task1', function(){
    it('should be defined', function(){
        expect(minElem).toBeDefined();
    })
    test.each([
        ["gg", "its not array" ],
        [[], "array is empty"],
        [[2, 0, 6, -5,], -5],
    ])('testing %s with expected result %s', function(array, result) {
        expect(minElem(array)).toBe(result);
    })
    test.each([
        ["gg", "array is empty"],
        ["gg", -5],
        [[], "its not array"],
        [[], -5],
        [[2, 0, 6, -5,], "its not array"],
        [[2, 0, 6, -5,], "array is empty"],
    ])('testing %s with expected result %s', function(array, result) {
        expect(minElem(array)).not.toBe(result)
    })
})

describe('Part3. Task2', function(){
    it('should be defined', function(){
        expect(maxElem).toBeDefined();
    })
    test.each([
        ["gg", "its not array" ],
        [[], "array is empty"],
        [[2, 0, 6, -5], 6],
    ])('testing %s with expected result %s', function(array, result) {
        expect(maxElem(array)).toBe(result);
    })
    test.each([
        ["gg", "array is empty"],
        ["gg", 6],
        [[], "its not array"],
        [[], 6],
        [[2, 0, 6, 6], "its not array"],
        [[2, 0, 6, 6], "array is empty"],
    ])('testing %s with expected result %s', function(array, result) {
        expect(maxElem(array)).not.toBe(result)
    })
})

describe('Part3. Task3', function(){
    it('should be defined', function(){
        expect(minIndex).toBeDefined();
    })
    test.each([
        ["gg", "its not array" ],
        [[], "array is empty"],
        [[2, 0, 6, -5], '-5 3'],
    ])('testing %s with expected result %s', function(array, result) {
        expect(minIndex(array)).toBe(result);
    })
    test.each([
        ["gg", "array is empty"],
        ["gg", '-5 3'],
        [[], "its not array"],
        [[], '-5 3'],
        [[2, 0, 6, '-5 3'], "its not array"],
        [[2, 0, 6, '-5 3'], "array is empty"],
    ])('testing %s with expected result %s', function(array, result) {
        expect(minIndex(array)).not.toBe(result)
    })
})
describe('Part3. Task4', function(){
    it('should be defined', function(){
        expect(maxIndex).toBeDefined();
    })
    test.each([
        ["gg", "its not array" ],
        [[], "array is empty"],
        [[2, 0, 6, -5], '6 2'],
    ])('testing %s with expected result %s', function(array, result) {
        expect(maxIndex(array)).toBe(result);
    })
    test.each([
        ["gg", "array is empty"],
        ["gg", '6 2'],
        [[], "its not array"],
        [[], '6 2'],
        [[2, 0, 6, '6 2'], "its not array"],
        [[2, 0, 6, '6 2'], "array is empty"],
    ])('testing %s with expected result %s', function(array, result) {
        expect(maxIndex(array)).not.toBe(result)
    })
})
describe('Part3. Task5', function(){
    it('should be defined', function(){
        expect(sumByIndex).toBeDefined();
    })
    test.each([
        ["str", "its not array" ],
        [[], "array is empty"],
        [[6, 5, 2, 1, 9, 10], 16],
    ])('testing %s with expected result %s', function(array, result) {
        expect(sumByIndex(array)).toBe(result);
    })
    test.each([
        ["str", "array is empty"],
        ["str", 16],
        [[], "its not array"],
        [[], 16],
        [[6, 5, 2, 1, 9, 10], "its not array"],
        [[6, 5, 2, 1, 9, 10], "array is empty"],
    ])('testing %s with expected result %s', function(array, result) {
        expect(sumByIndex(array)).not.toBe(result)
    })
})
describe('Part3. Task6', function(){
    it('should be defined', function(){
        expect(reverseArray).toBeDefined();
    })
    it('reverse array', function(){
        expect(reverseArray([6, 5, 2, 1, 9, 10])).toStrictEqual([10, 9, 1, 2, 5, 6]);
    })
    test.each([
        ["str", "its not array" ],
        [[], "array is empty"],
       // [[6, 5, 2, 1, 9, 10], [10, 9, 1, 2, 5, 6 ]],
    ])('testing %s with expected result %s', function(array, result) {
        expect(reverseArray(array)).toBe(result);
    })
    test.each([
        ["str", "array is empty"],
        ["str", [6, 5, 2, 1, 9, 10]],
        [[], "its not array"],
        [[], [6, 5, 2, 1, 9, 10]],
        [[6, 5, 2, 1, 9, 10], "its not array"],
        [[6, 5, 2, 1, 9, 10], "array is empty"],
    ])('testing %s with expected result %s', function(array, result) {
        expect(reverseArray(array)).not.toBe(result)
    })
})
describe('Part3. Task7', function(){
    it('should be defined', function(){
        expect(summa).toBeDefined();
    })
    test.each([
        ["str", "its not array" ],
        [[], "array is empty"],
        [[6, 5, 2, 1, 9, 10, 3], 4],
    ])('testing %s with expected result %s', function(array, result) {
        expect(summa(array)).toBe(result);
    })
    test.each([
        ["str", "array is empty"],
        ["str", 4],
        [[], "its not array"],
        [[], 4],
        [[6, 5, 2, 1, 9, 10, 3], "its not array"],
        [[6, 5, 2, 1, 9, 10, 3], "array is empty"],
    ])('testing %s with expected result %s', function(array, result) {
        expect(summa(array)).not.toBe(result)
    })
})

describe('Part3. Task8', function(){
    it('should be defined', function(){
        expect(changeArray).toBeDefined();
    })
    it('reverse array', function(){
        expect(changeArray([1, 2, 3, 4, 5])).toStrictEqual([3, 4, 5, 1, 2]);
    })
    test.each([
        ["str", "its not array" ],
        [[], "array is empty"],
    ])('testing %s with expected result %s', function(array, result) {
        expect(changeArray(array)).toBe(result);
    })
    test.each([
        ["str", "array is empty"],
        ["str", [4, 5, 1, 2, 3]],
        [[], "its not array"],
        [[], [4, 5, 1, 2, 3]],
        [[1, 2, 3, 4, 5], "its not array"],
        [[1, 2, 3, 4, 5], "array is empty"],
    ])('testing %s with expected result %s', function(array, result) {
        expect(changeArray(array)).not.toBe(result)
    })
})

describe('Part3. Task9.1', function(){
    it('should be defined', function(){
        expect(sortBubble).toBeDefined();
    })
    it('reverse array', function(){
        expect(sortBubble([6, 3, 0, 2, 4, -1])).toStrictEqual([ -1, 0, 2, 3, 4, 6 ]);
    })
    test.each([
        ["str", "its not array" ],
        [[], "array is empty"],
    ])('testing %s with expected result %s', function(array, result) {
        expect(sortBubble(array)).toBe(result);
    })
    test.each([
        ["str", "array is empty"],
        ["str", [ -1, 0, 2, 3, 4, 6 ]],
        [[], "its not array"],
        [[], [ -1, 0, 2, 3, 4, 6 ]],
        [[6, 3, 0, 2, 4, -1], "its not array"],
        [[6, 3, 0, 2, 4, -1], "array is empty"],
    ])('testing %s with expected result %s', function(array, result) {
        expect(sortBubble(array)).not.toBe(result)
    })
})
describe('Part3. Task9.2', function(){
    it('should be defined', function(){
        expect(sortSelect).toBeDefined();
    })
    it('reverse array', function(){
        expect(sortSelect([6, 3, 0, 2, 4, -1])).toStrictEqual([ -1, 0, 2, 3, 4, 6 ]);
    })
    test.each([
        ["str", "its not array" ],
        [[], "array is empty"],
    ])('testing %s with expected result %s', function(array, result) {
        expect(sortSelect(array)).toBe(result);
    })
    test.each([
        ["str", "array is empty"],
        ["str", [ -1, 0, 2, 3, 4, 6 ]],
        [[], "its not array"],
        [[], [ -1, 0, 2, 3, 4, 6 ]],
        [[6, 3, 0, 2, 4, -1], "its not array"],
        [[6, 3, 0, 2, 4, -1], "array is empty"],
    ])('testing %s with expected result %s', function(array, result) {
        expect(sortSelect(array)).not.toBe(result)
    })
})*/

