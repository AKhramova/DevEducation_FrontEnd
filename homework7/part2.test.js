/*var { 
    summaQuantity,
    primeNumber,
    consistentSelection,
    binarySearch,
    factorialNumber,
    summa,
    reverseNumbers
} = require('./part2');

describe('Part2. Task1', function(){
    it('should be defined', function(){
        expect(summaQuantity).toBeDefined();
    })
    it('should be function', function(){
        expect(typeof summaQuantity).toBe('function');
    })
    test.each([
        ["gg", "f", "only number"],
        [1, 99, "2450 49"],
        [1, 100, "error"],
        [0, 99, "error"],
    ])('testing %s with expected result %s', function(arg1, arg2, result) {
        expect(summaQuantity(arg1, arg2)).toBe(result)
    })
    test.each([
        ["gg", "f", "2450 49"],
        ["gg", "f", "error"],
        [1, 99, "only number"],
        [1, 99, "error"],
        [0, 99, "only number"],
        [0, 99, "2450 49"],
    ])('testing %s with expected result %s', function(arg1, arg2, result) {
        expect(summaQuantity(arg1, arg2)).not.toBe(result)
    })
})

describe('Part2. Task2', function(){
    it('should be defined', function(){
        expect(primeNumber).toBeDefined();
    })
    it('should be function', function(){
        expect(typeof primeNumber).toBe('function');
    })
    test.each([
        ["gg", "only number"],
        [1, true],
        [8, false],
    ])('testing %s with expected result %s', function(number, result) {
        expect(primeNumber(number)).toBe(result)
    })
    test.each([
        ["gg", true],
        ["gg", false],
        [8, true],
        [1, false],
    ])('testing %s with expected result %s', function(number, result) {
        expect(primeNumber(number)).not.toBe(result)
    })
})

describe('Part2. Task3.1', function(){
    it('should be defined', function(){
        expect(consistentSelection).toBeDefined();
    })
    it('should be function', function(){
        expect(typeof consistentSelection).toBe('function');
    })
    test.each([
        ["gg", "only number"],
        [-1, "number < 0"],
        [9, 3],
    ])('testing %s with expected result %s', function(number, result) {
        expect(consistentSelection(number)).toBe(result)
    })
    test.each([
        ["gg", "number < 0"],
        ["gg", 3],
        [-3, "only number"],
        [-3, 3],
        [9, "only number"],
        [9, "number < 0"],
    ])('testing %s with expected result %s', function(number, result) {
        expect(consistentSelection(number)).not.toBe(result)
    })
})

describe('Part2. Task3.2', function(){
    it('should be defined', function(){
        expect(binarySearch).toBeDefined();
    })
    it('should be function', function(){
        expect(typeof binarySearch).toBe('function');
    })
    test.each([
        ["gg", "only number"],
        [-1, "number < 0"],
        [9, 3],
    ])('testing %s with expected result %s', function(number, result) {
        expect(binarySearch(number)).toBe(result)
    })
    test.each([
        ["gg", "number < 0"],
        ["gg", 3],
        [-3, "only number"],
        [-3, 3],
        [9, "only number"],
        [9, "number < 0"],
    ])('testing %s with expected result %s', function(number, result) {
        expect(binarySearch(number)).not.toBe(result)
    })
})

describe('Part2. Task4', function(){
    it('should be defined', function(){
        expect(factorialNumber).toBeDefined();
    })
    it('should be function', function(){
        expect(typeof factorialNumber).toBe('function');
    })
    test.each([
        ["gg", "only number" ],
        [-1, "number <= 0"],
        [9.3, "number with float"],
        [3, 6],
    ])('testing %s with expected result %s', function(arg, result) {
        expect(factorialNumber(arg)).toBe(result);
    })
    test.each([
        ["gg", "number <= 0"],
        ["gg", "number with float"],//
        ["gg", 6],
        [-1, "only number"],
        [-1, "number with float"],
        [-1, 6],
        [9.3, "only number"],
        [9.3, "number <= 0"],
        [9.3, 6],
        [3, "only number"],
        [3, "number with float"],
        [3, "number with float"],
    ])('testing %s with expected result %s', function(arg, result) {
        expect(factorialNumber(arg)).not.toBe(result)
    })
})

describe('Part2. Task5', function(){
    it('should be defined', function(){
        expect(summa).toBeDefined();
    })
    it('should be function', function(){
        expect(typeof summa).toBe('function');
    })
    it('more arguments', function(){
        expect(summa(14, 2)).toBe(5);
    })
    test.each([
        ["gg", "only number" ],
        [-1, "number <= 0"],
        [126.3, "number with float"],
        [123, 6],
    ])('testing %s with expected result %s', function(arg, result) {
        expect(summa(arg)).toBe(result);
    })
    test.each([
        ["gg", "number <= 0"],
        ["gg", "number with float"],//
        ["gg", 6],
        [-1, "only number"],
        [-1, "number with float"],
        [-1, 6],
        [9.3, "only number"],
        [9.3, "number <= 0"],
        [9.3, 6],
        [3, "only number"],
        [3, "number with float"],
        [3, "number with float"],
    ])('testing %s with expected result %s', function(arg, result) {
        expect(summa(arg)).not.toBe(result)
    })
})

describe('Part2. Task6', function(){
    it('should be defined', function(){
        expect(reverseNumbers).toBeDefined();
    })
    it('should be function', function(){
        expect(typeof reverseNumbers).toBe('function');
    })
    it('more arguments', function(){
        expect(reverseNumbers(14, 2)).toBe("41");
    })
    test.each([
        ["gg", "only number" ],
        [-1, "number <= 0"],
        [126.3, "number with float"],
        [123, "321"],
    ])('testing %s with expected result %s', function(arg, result) {
        expect(reverseNumbers(arg)).toBe(result);
    })
    test.each([
        ["gg", "number <= 0"],
        ["gg", "number with float"],//
        ["gg", 6],
        [-1, "only number"],
        [-1, "number with float"],
        [-1, 6],
        [9.3, "only number"],
        [9.3, "number <= 0"],
        [9.3, 6],
        [3, "only number"],
        [3, "number with float"],
        [3, "number with float"],
    ])('testing %s with expected result %s', function(arg, result) {
        expect(reverseNumbers(arg)).not.toBe(result)
    })
})*/