var BST = require('../BS-tree/BS-tree');

describe("BST with insert", function () {
    var tree = new BST();
    it('insert should be defined', function () {
        expect(tree.insert).toBeDefined();
    });
    it('insert to be function', function(){
        expect(typeof tree.insert).toBe('function');  
    })
    it('insert', function(){
        tree.init([4, 89, 60, 57, 14, 8])
        tree.insert(5);
        var str = "root -> ";
            tree.print("in", (value) => {
                str += value + " --> ";
            });
        expect(str).toBe('root -> 4 --> 5 --> 8 --> 14 --> 57 --> 60 --> 89 --> ');
    })
})

describe("BST with init", function () {
    var tree = new BST();
    it('init should be defined', function () {
        expect(tree.init).toBeDefined();
    });
    it('to be function', function(){
        expect(typeof tree.init).toBe('function');  
    })
    it('BST, init with error', function(){
        expect(tree.init("some string")).toBe();
    })
    it('BST, init', function(){
        var arrayForInit = [4, 89, 60, 57, 14, 8];
        var mock = jest.fn();
        tree.insert = mock;
        tree.init(arrayForInit);
        expect(mock).toBeCalledTimes(arrayForInit.length);
        expect(mock).toBeCalledWith(arrayForInit[0]);
        expect(mock).toBeCalledWith(arrayForInit[1]);
        expect(mock).toBeCalledWith(arrayForInit[2]);
        expect(mock).toBeCalledWith(arrayForInit[3]);
    })
})

describe("BST, clear and print", function () {
    var tree = new BST();
    it('clear should be defined', function () {
        expect(tree.clear).toBeDefined();
    });
    it('to be function', function(){
        expect(typeof tree.clear).toBe('function');  
    })
    it('BST, clear', function(){
        tree.init([4, 89, 60, 57, 14, 8]);
        expect(tree.clear()).toBe();
    })

    it('print should be defined', function () {
        expect(tree.print).toBeDefined();
    });
    it('to be function', function(){
        expect(typeof tree.print).toBe('function');  
    })
    it('BST, print', function(){
        tree.init([4, 89, 60, 57, 14, 8]);
        var str = "root -> ";
        tree.print("in", (value) => {
            str += value + " --> ";
        });
        expect(str).toBe('root -> 4 --> 8 --> 14 --> 57 --> 60 --> 89 --> ');
    })
})

describe("BST, search", function () {
    var tree = new BST();
    it('search should be defined', function () {
        expect(tree.search).toBeDefined();
    });
    it('to be function', function(){
        expect(typeof tree.search).toBe('function');  
    })
    it('BST, search with error root', function(){
        tree.clear();
        tree.init();
        expect(tree.search(0)).toBe(false);
    })
    it('BST, search with error value', function(){
        tree.clear();
        tree.init([4, 89, 60, 57, 14, 8]);
        expect(tree.search(0)).toBe();
    })
    it('BST, search', function(){
        tree.clear();
        tree.init([4, 89, 60, 57, 14, 8]);
        var expected = {
            value: 57,
            left: {
              value: 14,
              left: { value: 8, left: null, right: null },
              right: null
            },
            right: null
        }
        expect(tree.search(57)).toEqual(expected);
    })
})

describe("BST, height and width", function () {
    var tree = new BST();
    it('height should be defined', function () {
        expect(tree.height).toBeDefined();
    });
    it('to be function', function(){
        expect(typeof tree.height).toBe('function');  
    })
    it('BST, height with error', function(){
        tree.clear();
        tree.init();
        expect(tree.height()).toBe();
    })
    it('BST, height with error value', function(){
        tree.clear();
        tree.init([57, 14, 8]);
        expect(tree.height()).toBe(3);
    })

    //WIDTH
    it('width should be defined', function () {
        expect(tree.width).toBeDefined();
    });
    it('to be function', function(){
        expect(typeof tree.width).toBe('function');  
    })
    it('BST, width with error', function(){
        tree.clear();
        tree.init();
        expect(tree.width()).toBe();
    })
    it('BST, width with error value', function(){
        tree.clear();
        tree.init([57, 14, 8, 5, 27, 13]);
        expect(tree.width()).toBe(2);
    })
})

describe("BST, leaves and nodes and size", function () {
    var tree = new BST();
    it('leaves should be defined', function () {
        expect(tree.leaves).toBeDefined();
    });
    it('to be function', function(){
        expect(typeof tree.leaves).toBe('function');  
    })
    it('BST, leaves with error', function(){
        tree.clear();
        tree.init();
        expect(tree.leaves()).toBe();
    })
    it('BST, leaves', function(){
        tree.clear();
        tree.init([30, 10, 52]);
        expect(tree.leaves()).toBe(2);
    })

    // NODES
    it('nodes should be defined', function () {
        expect(tree.nodes).toBeDefined();
    });
    it('to be function', function(){
        expect(typeof tree.nodes).toBe('function');  
    })
    it('BST, nodes with error', function(){
        tree.clear();
        tree.init();
        expect(tree.nodes()).toBe();
    })
    it('BST, nodes', function(){
        tree.clear();
        tree.init([30, 10, 52]);
        expect(tree.nodes()).toBe(1);
    })

    //SIZE
    it('getSize should be defined', function () {
        expect(tree.getSize).toBeDefined();
    });
    it('to be function', function(){
        expect(typeof tree.getSize).toBe('function');  
    })
    it('BST, getSize', function(){
        tree.clear();
        tree.init([30, 10, 52]);
        expect(tree.getSize()).toBe(3);
    })
})

describe("BST, minNode and maxNode", function () {
    var tree = new BST();
    it('minNode should be defined', function () {
        expect(tree.minNode).toBeDefined();
    });
    it('to be function', function(){
        expect(typeof tree.minNode).toBe('function');  
    })
    it('BST, minNode with error', function(){
        tree.clear();
        tree.init();
        expect(tree.minNode()).toBe();
    })
    it('BST, minNode with error value', function(){
        tree.clear();
        tree.init([57, 14, 8]);
        var expected =  { 
            value: 8,
            left: null,
            right: null }
        expect(tree.minNode()).toEqual(expected);
    })
    //maxNode
    it('maxNode should be defined', function () {
        expect(tree.maxNode).toBeDefined();
    });
    it('to be function', function(){
        expect(typeof tree.maxNode).toBe('function');  
    })
    it('BST, maxNode with error', function(){
        tree.clear();
        tree.init();
        expect(tree.maxNode()).toBe();
    })
    it('BST, maxNode', function(){
        tree.clear();
        tree.init([57, 14, 8]);
        tree.init([57, 14, 8]);
        var expected =  { 
            value: 57,
            left: null, 
            right: null 
        }
        expect(tree.maxNode()).toEqual(expected);
    })
})

describe("BST, remove", function () {
    var tree = new BST();
    it('remove should be defined', function () {
        expect(tree.remove).toBeDefined();
    });
    it('to be function', function(){
        expect(typeof tree.remove).toBe('function');  
    })
    it('BST, remove with error', function(){
        tree.clear();
        tree.init([4, 89, 60, 57, 14, 8]);
        tree.remove(0);
        var str = "root -> ";
            tree.print("in", (value) => {
                str += value + " --> ";
            });
        expect(str).toBe('root -> 4 --> 8 --> 14 --> 57 --> 60 --> 89 --> ');
    })
    it('BST, remove', function(){
        tree.clear();
        tree.init([4, 89, 60, 57, 14, 8]);
        tree.remove(57);
        var str = "root -> ";
            tree.print("in", (value) => {
                str += value + " --> ";
            });
        expect(str).toBe('root -> 4 --> 8 --> 14 --> 60 --> 89 --> ');
    })
})
