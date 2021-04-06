/*var  {
    getDay,
    distance,
    getString,
    fromString,
 } = require('./part4');
 
 
 describe('Part4. Task1', function(){
     it('should be defined', function(){
         expect(getDay).toBeDefined();
     })
     test.each([
         ["str", "only number"],
         [0, "Incorrect data"],
         [8, "Incorrect data"],
         [1, "Monday"],
         [7, "Sunday"],
     ])('testing %s with expected result %s', function(number, result) {
         expect(getDay(number)).toBe(result);
     })
     test.each([
         ["str", "Incorrect data"],
         ["str", "Monday"],
         [0, "only number"],
         [8, "Monday"],
         [1, "only number"],
         [2, "Incorrect data"],
 
     ])('testing %s with expected result %s', function(number, result) {
         expect(getDay(number)).not.toBe(result)
     })
 })
 describe('Part4. Task2', function(){
     it('should be defined', function(){
         expect(distance).toBeDefined();
     })
     test.each([
         ["str", "str", "str", "str", "Incorrect input data"],
         [1, 1, 1, 5, 4],
     ])('testing %s with expected result %s', function(x1, x2, y1,  y2, result) {
         expect(distance(x1, x2, y1,  y2)).toBe(result);
     })
     test.each([
         ["str","str", "str","str", 4],
         [1, 1, 1, 5, "Incorrect input data"],
 
     ])('testing %s with expected result %s', function(x1, x2, y1,  y2, result) {
         expect(distance(x1, x2, y1, y2)).not.toBe(result)
     })
 })
 
 describe('Part4. Task3', function(){
     it('should be defined', function(){
         expect(getString).toBeDefined();
     })
     test.each([
         ["str", "only number"],
         [1.8, "number with float"],
         [-1, "Incorrect input data"],
         [0, "ноль"],
         [900, "девятьсот "],
         [11, " одиннадцать "],
         [20, " двадцать "],
         [1, " один"],
         
     ])('testing %s with expected result %s', function(num, result) {
         expect(getString(num)).toBe(result);
     })
     test.each([
         ["str", "number with float"],
         ["str", "Incorrect input data"],
         ["str", "ноль"],
         ["str", "девятьсот "],
         [1.8, "only number"],
         [1.8, "Incorrect input data"],
         [1.8, "ноль"],
         [1.8, " одиннадцать "],
         [-1, "only number"],
         [-1, "number with float"],
         [-1, "ноль"],
         [-1, " двадцать "],
         [0, "only number"],
         [0, "number with float"],
         [0, "Incorrect input data"],
         [0, " двадцать "],
         [1, "ноль"],
         [1, "only number"], 
         [1, "number with float"],
         [1, "Incorrect input data"],
         
     ])('testing %s with expected result %s', function(num, result) {
         expect(getString(num)).not.toBe(result);
     })
 })
 
 describe('Part4. Task4', function(){
     it('should be defined', function(){
         expect(fromString).toBeDefined();
     })
     it('should be defined', function(){
         expect(typeof fromString).toBe('function');
     })
     test.each([
         ['тринадцать', 13],
         ['девятьсот восемнадцать', 918],
         [`двести`, 200],
         [`сто пять`, 105],
         [`девятьсот восемьдесят`, 980],
         [`сто двадцать`, 120],
         [`семьсот двадцать три`, 723],
         [`двадцать пять`, 25],
         ['семь', 7],
         ['ноль', 0],
     ])('testing %s with expected result %s', function(str, result) {
         expect(fromString(str)).toBe(result);
     })
     test.each([
         ['тринадцать', 918, 200, 105, 980, 120, 723, 25, 7, 0],
         ['девятьсот восемнадцать', 13, 200, 105, 980, 120, 723, 25, 7, 0],
         [`двести`, 13, 918, 105, 980, 120, 723, 25, 7, 0],
         [`сто пять`, 13, 918, 200, 980, 120, 723, 25, 7, 0],
         [`девятьсот восемьдесят`, 13, 918, 200, 105, 120, 723, 25, 7, 0],
         [`сто двадцать`, 13, 918, 200, 105, 980, 723, 25, 7, 0],
         [`семьсот двадцать три`, 13, 918, 200, 105, 980, 120, 25, 7, 0],
         [`двадцать пять`, 13, 918, 200, 105, 980, 120, 723, 7, 0],
         ['семь', 13, 918, 200, 105, 980, 120, 723, 25, 0],
         ['ноль', 13, 918, 200, 105, 980, 120, 723, 25, 7],
     ])('testing %s with expected result %s', function(str, result) {
         expect(fromString(str)).not.toBe(result);
     })
 })*/