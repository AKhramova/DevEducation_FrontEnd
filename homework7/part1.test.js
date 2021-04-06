var { 
    result,
    coordinates,
    sum,
    maxMin,
    grade,

 } = require('./part1');

describe('Part1. Task1', function(){
    it('should be defined', function(){
        expect(result).toBeDefined();
    })
    it('should be function', function(){
        expect(typeof result).toBe('function');
    })
    it('only numbers', function(){
        expect(result("asd", "f")).toBe("not number");
    })
    it('must not be "error" ', function(){
        expect(result("asd", "f")).not.toBe("error");
    })
    it('must not be a*b', function(){
        expect(result("asd", "f")).not.toBe(4);
    })
    it('must not be a+b', function(){
        expect(result("asd", "f")).not.toBe(5);
    })
    it(' a with float', function(){
        expect(result(1.2, 5)).toBe("error");
    })
    it(' a with float must not be "not number" ', function(){
        expect(result(1.2, 5)).not.toBe("not number");
    })
    it(' a with float, must not be multiplication', function(){
        expect(result(1.2, 5)).not.toBe(6);
    })
    it(' a with float, must not be sum', function(){
        expect(result(1.2, 5)).not.toBe(6.2);
    })
    it('two arguments, a - even', function(){
        expect(result(2,2)).toBe(4);
    })
    it(' a - even, must not be  a + b', function(){
        expect(result(2,2)).not.toBe(3);
    })
    it(' a - even, must not be not number', function(){
        expect(result(2,2)).not.toBe("not number");
    })
    it(' a - even, must not be error', function(){
        expect(result(2,2)).not.toBe("error");
    })
    it('two arguments,a - odd', function(){
        expect(result(1,2)).toBe(3);
    })
    it(' a - even, must not be a*b ', function(){
        expect(result(1,2)).not.toBe(4);
    })
    it(' a - even, must not be not number', function(){
        expect(result(1,2)).not.toBe("not number");
    })
    it(' a - even, must not be error', function(){
        expect(result(1,2)).not.toBe("error");
    })
    it('one argument', function(){
        expect(result(2)).toBe("not number");
    })
    it('more arguments', function(){
        expect(result(2, 3, 4, 5)).toBe(6);
    })
    it('a minus number, sum', function(){
        expect(result(-1, 5)).toBe(4);
    })
    it('a minus number, sum', function(){
        expect(result(-2, 5)).toBe(-10);
    })
})

describe('Part1. Task2', function(){
    it('should be defined', function(){
        expect(coordinates).toBeDefined();
    })
    it('should be function', function(){
        expect(typeof coordinates).toBe('function');
    })
    it('only numbers', function(){
        expect(coordinates("k", "d")).toBe("error");
    })
    it('only numbers, must not be "Начало координат"', function(){
        expect(coordinates("k", "d")).not.toBe("Начало координат");
    })
    it('only numbers, must not be 1', function(){
        expect(coordinates("k", "d")).not.toBe(1);
    })
    it('only numbers, must not be 2', function(){
        expect(coordinates("k", "d")).not.toBe(2);
    })
    it('only numbers, must not be 3', function(){
        expect(coordinates("k", "d")).not.toBe(3);
    })
    it('only numbers, must not be 4', function(){
        expect(coordinates("k", "d")).not.toBe(4);
    })
    it('origin', function(){
        expect(coordinates(0, 0)).toBe("Начало координат");
    })
    it('origin, must not be "error" ', function(){
        expect(coordinates(0, 0)).not.toBe("error");
    })
    it('origin, must not be 1', function(){
        expect(coordinates(0, 0)).not.toBe(1);
    })
    it('origin, must not be 2', function(){
        expect(coordinates(0, 0)).not.toBe(2);
    })
    it('origin, must not be 3', function(){
        expect(coordinates(0, 0)).not.toBe(3);
    })
    it('origin, must not be 4', function(){
        expect(coordinates(0, 0)).not.toBe(4);
    })
    it('first', function(){
        expect(coordinates(1, 1)).toBe(1);
    })
    it('first, must not be "error" ', function(){
        expect(coordinates(1, 1)).not.toBe("error");
    })
    it('first, must not be "Начало координат" ', function(){
        expect(coordinates(1, 1)).not.toBe("Начало координат");
    })
    it('first, must not be 2', function(){
        expect(coordinates(1, 1)).not.toBe(2);
    })
    it('first, must not be 3', function(){
        expect(coordinates(1, 1)).not.toBe(3);
    })
    it('first, must not be 4', function(){
        expect(coordinates(1, 1)).not.toBe(4);
    })
    it('second', function(){
        expect(coordinates(-1, 1)).toBe(2);
    })
    it('second, must not be "error" ', function(){
        expect(coordinates(-1, 1)).not.toBe("error");
    })
    it('second, must not be "Начало координат" ', function(){
        expect(coordinates(-1, 1)).not.toBe("Начало координат");
    })
    it('second, must not be 1', function(){
        expect(coordinates(-1, 1)).not.toBe(1);
    })
    it('second, must not be 3', function(){
        expect(coordinates(-1, 1)).not.toBe(3);
    })
    it('second, must not be 4', function(){
        expect(coordinates(-1, 1)).not.toBe(4);
    })
    it('third', function(){
        expect(coordinates(-1, -1)).toBe(3);
    })
    it('third, must not be "error" ', function(){
        expect(coordinates(-1, -1)).not.toBe("error");
    })
    it('third, must not be "Начало координат" ', function(){
        expect(coordinates(-1, -1)).not.toBe("Начало координат");
    })
    it('third, must not be 1', function(){
        expect(coordinates(-1, -1)).not.toBe(1);
    })
    it('third, must not be 3', function(){
        expect(coordinates(-1, -1)).not.toBe(2);
    })
    it('third, must not be 4', function(){
        expect(coordinates(-1,-1)).not.toBe(4);
    })
    it('fourth', function(){
        expect(coordinates(1, -1)).toBe(4);
    })
    it('fourth, must not be "error" ', function(){
        expect(coordinates(1, -1)).not.toBe("error");
    })
    it('fourth, must not be "Начало координат" ', function(){
        expect(coordinates(1, -1)).not.toBe("Начало координат");
    })
    it('fourth, must not be 1', function(){
        expect(coordinates(1, -1)).not.toBe(1);
    })
    it('fourth, must not be 3', function(){
        expect(coordinates(1, -1)).not.toBe(2);
    })
    it('fourth, must not be 3', function(){
        expect(coordinates(1, -1)).not.toBe(3);
    })
    it('more arguments', function(){
        expect(coordinates(0, 0, 4, 5)).toBe("Начало координат");
    })
    it('one argumet', function(){
        expect(coordinates(0)).toBe("error");
    })
    
})

describe('Part1. Task3', function(){
    it('should be defined', function(){
        expect(sum).toBeDefined();
    })
    it('should be function', function(){
        expect(typeof sum).toBe('function');
    })
    it('only numbers', function(){
        expect(sum("gg", "f", 2)).toBe("error");
    })
    it('one argument', function(){
        expect(sum(1)).toBe("error");
    })
    it('more arguments', function(){
        expect(sum(1, 2, 4, 5)).toBe(7);
    })
    //
    it('the first number <= 0', function(){
        expect(sum(-1, 3, 2)).toBe(5);
    })
    it('the second number <= 0', function(){
        expect(sum(3, -1, 2)).toBe(5);
    })
    it('the third number <= 0', function(){
        expect(sum(3, 2, -1)).toBe(5);
    })
    test.each([
        [1, 2, 4, 7],
        [0, 2, 1, 3],
        [1, 0, 3, 4],
        [1, 3, 0, 4],
        [-1, -3, -5, 0],
    ])('testing %s with expected result %s', function(a, b, c, result) {
        expect(sum(a, b, c)).toBe(result)
    })
    test.each([
        [-1, -2, -4, -7],
    ])('testing %s with expected result %s', function(a, b, c, result) {
        expect(sum(a, b, c)).not.toBe(result)
    })
})

describe('Part1. Task4', function(){
    it('should be defined', function(){
        expect(maxMin).toBeDefined();
    })
    it('should be function', function(){
        expect(typeof maxMin).toBe('function');
    })
    it('only numbers', function(){
        expect(maxMin(2, "f", "2")).toBe("error");
    })
    it('more arguments', function(){
        expect(maxMin(1, 2, 4, 5)).toBe(11);
    })
    test.each([
        [1, 2, 4, 11],
        [1, 2, 1, 7],
        [1, 2, 3, 9],
    ])('testing %s with expected result %s', function(a, b, c, result) {
        expect(maxMin(a, b, c)).toBe(result)
    })
    test.each([
        [1, 2, 4, 10],
        [1, 2, 1, 5],
    ])('testing %s with expected result %s', function(a, b, c, result) {
        expect(maxMin(a, b, c)).not.toBe(result)
    })
})

describe('Part1. Task5', function(){
    it('should be defined', function(){
        expect(grade).toBeDefined();
    })
    it('should be function', function(){
        expect(typeof grade).toBe('function');
    })
    it('number < min value', function(){
        expect(grade(-1)).toBe("error");
    })
    test.each([
        [0, `F`],
        [19, `F`],
        [20, `E`],
        [39, `E`],
        [40, `D`],
        [59, `D`],
        [60, `C`],
        [74, `C`],
        [75, `B`],
        [89, `B`],
        [90, `A`],
        [100, `A`],
    ])('testing %s with expected result %s', function(number, result) {
        expect(grade(number)).toBe(result)
    })
    test.each([
        [0, `A`, `B`, `C`, `D`, `E`],
        [19, `A`, `B`, `C`, `D`, `E`],
        [20, `A`, `B`, `C`, `D`, `F`],
        [39, `A`, `B`, `C`, `D`, `F`],
        [40, `A`, `B`, `C`, `E`, `F`],
        [59, `A`, `B`, `C`, `E`, `F`],
        [60, `A`, `B`, `D`, `E`, `F`],
        [74, `A`, `B`, `D`, `E`, `F`],
        [75, `A`, `C`, `D`, `E`, `F`],
        [89, `A`, `C`, `D`, `E`, `F`],
        [90, `B`, `C`, `D`, `E`, `F`],
        [100, `B`, `C`, `D`, `E`, `F`],
    ])('testing %s with expected result neither %s nor %s nor %s nor %s nor %s', function(number, result) {
        expect(grade(number)).not.toBe(result)
    })
})