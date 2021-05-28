var Llist = require('../LList/LList')
describe("Llist", function () {
    it('should be defined', function () {
        expect(Llist).toBeDefined();
    });
    it('to be function', function(){
        expect(typeof Llist).toBe('function');  
    })
    it('Llist with values, add/toArray', function(){
        var llist = new Llist();
        llist.add(65);
        llist.add(65);
        llist.add(65);
        var expected = [65, 65, 65];
        expect(llist.toArray()).toEqual(expected);
    })
})

describe("Llist, getSize", function () {
    it('getSize to be 0', function(){
        var llist = new Llist();
        expect(llist.getSize()).toBe(0);
    })
    it('getSize to be lenght: 2', function(){
        var llist = new Llist();
        llist.add(65);
        llist.add(65);
        var expected = [65, 65];
        expect(llist.getSize()).toBe(expected.length);
    })
})

describe("Llist, remove", function () {
    it('remove', function(){
        var llist = new Llist();
        llist.add(32);
        llist.add(65);
        llist.add(77);
        var expectedValue = 65;
        var expectedArray = [32, 77];
        expect(llist.remove(65)).toBe(expectedValue);
        expect(llist.toArray()).toEqual(expectedArray);
        expect(llist.getSize()).toBe(expectedArray.length);
    })
    it('remove with size === 0', function(){
        var llist = new Llist();
        expect(llist.remove(65)).toBe(undefined);
    })
})

describe("Llist, set", function () {
    it('set with error, index with minus', function(){
        try {
            var errorIndex = -5;
            new Llist(5, errorIndex);
        } catch (e) {
            expect(e.message).toBe("Index is not found");
        } 
    })
    it('set, with size 0', function(){
        var llist = new Llist();
        var expectedArray = [36];
        llist.set(36, 0);
        llist.toArray();
        expect(llist.toArray()).toEqual(expectedArray);
    })
    it('set', function(){
        var llist = new Llist();
        llist.add(32);
        llist.add(65);
        var expectedArray = [36, 65];
        llist.set(36, 0);
        llist.toArray();
        expect(llist.toArray()).toEqual(expectedArray);
    })
})

describe("Llist, set", function () {
    it('get with error, index with minus', function(){
        try {
            var errorIndex = -5;
            new Llist(5, errorIndex);
        } catch (e) {
            expect(e.message).toBe("Index is not found");
        } 
    })
    it('get, with index 0', function(){
        var llist = new Llist();
        llist.add(32);
        llist.add(65);
        expect(llist.get(0)).toBe(32);
    })
})

describe("Llist, toString", function () {
    it('toString, with size 0', function(){
        var llist = new Llist();
        expect(llist.toString()).toBe(undefined);
    })
    it('toString', function(){
        var llist = new Llist();
        llist.add(32);
        llist.add(65);
        expect(llist.toString()).toBe('32 65');
    })
})

describe("Llist, contains", function () {
    it('contains with size 0', function(){
        var llist = new Llist();
        expect(llist.contains()).toBe(undefined);
    })
    it('contains with true', function(){
        var llist = new Llist();
        llist.add(32);
        llist.add(65);
        expect(llist.contains(32)).toBe(true);
    })
    it('contains with false', function(){
        var llist = new Llist();
        llist.add(32);
        llist.add(65);
        expect(llist.contains(37)).toBe(false);
    })
})

describe("Llist, minValue and maxValue", function () {
    it('minValue with size 0', function(){
        var llist = new Llist();
        expect(llist.minValue()).toBe(undefined);
    })
    it('maxValue with size 0', function(){
        var llist = new Llist();
        expect(llist.maxValue()).toBe(undefined);
    })
    it('minValue', function(){
        var llist = new Llist();
        llist.add(32);
        llist.add(65);
        expect(llist.minValue()).toBe(32);
    })
    it('maxValue', function(){
        var llist = new Llist();
        llist.add(32);
        llist.add(65);
        expect(llist.maxValue()).toBe(65);
    })
})

describe("Llist, minIndex and maxIndex", function () {
    it('minIndex with size 0', function(){
        var llist = new Llist();
        expect(llist.minIndex()).toBe(undefined);
    })
    it('maxIndex with size 0', function(){
        var llist = new Llist();
        expect(llist.maxValue()).toBe(undefined);
    })
    it('minIndex ', function(){
        var llist = new Llist();
        llist.add(32);
        llist.add(65);
        llist.add(7);
        expect(llist.minIndex()).toBe(2);
    })
    it('maxIndex', function(){
        var llist = new Llist();
        llist.add(32);
        llist.add(65);
        llist.add(7);
        expect(llist.maxIndex()).toBe(1);
    })
})

describe("Llist retainAll", function () {
    it('removeAll with size 0', function(){
        var llist = new Llist();
        expect(llist.retainAll(5)).toBe(undefined);
    })
    it('retainAll, correct answer', function() {
        var llist = new Llist();
        llist.add(32);
        llist.add(65);
        llist.add(7);
        expect(llist.toArray()).toEqual([32, 65, 7]);
        llist.retainAll([65, 7]);
        expect(llist.toArray()).toEqual([65, 7]);

    })
    it('removeAll, the array does not contain the desired value', function() {
        var llist = new Llist();
        llist.add(32);
        llist.add(65);
        llist.add(7);
        expect(llist.toArray()).toEqual([32, 65, 7]);
        llist.retainAll([65, 13]);
        expect(llist.toArray()).toEqual([65, 7]);
    })
})

describe("Llist removeAll", function () {
    it('removeAll with size 0', function(){
        var llist = new Llist();
        expect(llist.removeAll(5)).toBe(undefined);
    })
    it('correct answer, removeAll', function() {
        var llist = new Llist();
        llist.add(32);
        llist.add(65);
        llist.add(7);
        expect(llist.toArray()).toEqual([32, 65, 7]);
        llist.removeAll([65]);
        expect(llist.toArray()).toEqual([32, 7]);
    })
    it('removeAll, the array does not contain the desired value', function() {
        var llist = new Llist();
        llist.add(32);
        llist.add(65);
        llist.add(7);
        expect(llist.toArray()).toEqual([32, 65, 7]);
        llist.removeAll([89]);
        expect(llist.toArray()).toEqual([32, 65, 7]);
    })
})


describe("Llist, print", function () {
    it('minIndex with size 0', function(){
        var llist = new Llist();
        expect(llist.print()).toBe(undefined);
    })
    it('maxIndex with size 0', function(){
        var llist = new Llist();
        llist.add(32);
        llist.add(65);
        llist.add(7);
        llist.print();
    })
})