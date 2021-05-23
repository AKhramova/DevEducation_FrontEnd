var AList = require('./Alist');

describe("AList init", function () {
    it('should be defined', function () {
        expect(AList).toBeDefined();
    });
    it('to be function', function(){
        expect(typeof AList).toBe('function');  
    })
    it('init empty', function(){
        var list = new AList();
        expect(list.array.length).toBe(list.DEFAULT_CAPACITY);  
    })
    it('init with capacity', function(){
        var CAPACITY = 15;
        var list = new AList(CAPACITY);
        expect(list.array.length).toBe(CAPACITY);  
    })
    it('init with array', function(){
        var arrayTest = [0, 15, 45, 59];
        var list = new AList(arrayTest);
        expect(list.array).toEqual(arrayTest);  
        expect(list.getSize()).toBe(arrayTest.length);  
        expect(list.array.length).toBe(arrayTest.length);  
    })
    it('init with error', function(){
        try {
            var errorMessage = "string";
            new AList(errorMessage);
          } catch (e) {
            expect(e.message).toBe("Error");
          } 
    })
})

describe("AList clear", function () {
    it('clear', function(){
        var list = new AList(15);
        list.add(4);
        list.clear();
        expect(list.array).toEqual([]);
        expect(list.size).toBe(0); 
        expect(list.index).toBe(0); 
    })
})

describe("AList add", function () {
    it('add value', function(){
        var list = new AList();
        list.add(3);
        expect(list.getSize()).toBe(1);  
    })
    it('add with ensure capacity', function(){
        var list = new AList();
        for(var i = 0; i < 10; i++){
            list.add(i);
        }
        list.add(11);
        expect(list.getSize()).toBe(11);  
    })
})

describe("AList set", function () {
    it('set with error', function(){
        try {
            var errorIndex = -5;
            new AList(5, errorIndex);
          } catch (e) {
            expect(e.message).toBe("Index is not found");
          } 
    })
    it('set ', function(){
        var list = new AList();
        list.add(1);
        list.add(2);
        list.add(4);
        list.set(5, 5);
        expect(list.getSize()).toBe(4); 
    })
})

describe("AList get", function () {
    var arrayTest = [0, 15, 45, 59];
    it('get with error', function(){
        try {
            var newArr = new AList(5);
            newArr.add(3);
            newArr.get(-1);
        } catch (e) {
            expect(e.message).toBe('Index is not found'); 
        } 
    })
    it('get element', function(){
        var list = new AList(arrayTest);
        expect(list.get(1)).toBe(15); 
    })
})

describe("AList remove", function () {
    var arrayTest = [0, 15, 45, 48, 59]; 
    it('remove element', function(){
        var list = new AList(arrayTest);
        expect(list.remove(3)).toBe(48); 
    })
})

describe("AList toArray", function () {
    var arrayTest = [0, 15, 45, 48, 59]; 
    it('should be array', function(){
        var list = new AList(arrayTest);
        expect(list.toArray(arrayTest)).toEqual(arrayTest); 
    })
})

describe("AList toString", function () {
    var arrayTest = [0, 15, 45, 48, 59]; 
    it('should be string', function(){
        var list = new AList(arrayTest);
        expect(list.toString(arrayTest)).toBe('0,15,45,48,59'); 
    })
})

describe("AList contains", function () {
    it('check element, false', function(){
        var list = new AList([0, 15, 45, 48, 59]);
        expect(list.contains(3)).toBe(false); 
    })
    it('check element, true', function(){
        var list = new AList([0, 15, 45, 48, 59]);
        expect(list.contains(15)).toBe(true); 
    })
})

describe("AList min and max values", function () {
    it('AList min value', function(){
        var list = new AList([0, 15, 45, 48, 59]);
        expect(list.minValue()).toBe(0); 
    })
    it('check element, true', function(){
        var list = new AList([0, 15, 45, 48, 59]);
        expect(list.maxValue()).toBe(59); 
    })
})

describe("AList min and max index", function () {
    it('AList min index', function(){
        var list = new AList([0, 15, 45, 48, 59]);
        expect(list.minIndex()).toBe(0); 
    })
    it('AList max index', function(){
        var list = new AList([0, 15, 45, 48, 59]);
        expect(list.maxIndex()).toBe(4); 
    })
})

describe("AList reverse and halfReverse", function () {
    it('AList reverse', function(){
        var list = new AList([0, 15, 45, 48, 59]);
        expect(list.reverse()).toEqual([59, 48, 45, 15, 0]); 
    })
    it('AList halfReverse', function(){
        var list = new AList([0, 15, 45, 48, 59]);
       expect(list.halfReverse()).toEqual([45, 48, 59, 0, 15]);  
    })
})

describe("AList retainAll, removeAll", function () {
    it('correct answer, retainAll', function() {
        var list = new AList([0, 15, 45, 48, 59]);
        list.retainAll([0, 15, 60]);
        expect(list.array).toEqual([0, 15, undefined, undefined, undefined]);
    })
    it('correct answer, removeAll', function() {
        var list = new AList([0, 15, 45, 48, 59]);
        list.removeAll([0, 15, 60]);
        expect(list.array).toEqual([undefined, undefined, 45, 48, 59]);
    })
})

describe("AList print", function () {
    it('correct answer', function(){
        var list = new AList([0, undefined, 15, 45, 48, 59, undefined]);
        list.print();
    })
})