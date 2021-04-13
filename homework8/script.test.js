var {
    tickets,
    getQuntityPostsByAuthor,
    cache,
    complexFunction,
    cachedFunc,
 } = require('./script');

describe('Task1', function(){
    it('should be defined', function(){
        expect(tickets).toBeDefined();
    })
    it('should be function', function(){
        expect(typeof tickets).toBe('function');
    })
    test.each([
        ["str", "only array"],
        [[25], "yes"],
        [[25, 25, 50], "yes"],
        [[25, 25, 50, 100], "yes"],
        [['25', '25', '50', '100'], "yes"],
        [[25, 100], "no"],
        [[25, 50, 100], "no"],
        [['25', '50', '100'], "no"],
        [[50], "no"],
        [['k',  '50', '25', '100'], 'no'],

    ])('testing %s with expected result %s', function(arg, result) {
        expect(tickets(arg)).toBe(result)
    })
    test.each([
        ["str",  "yes" , "no"],
        [[25], 'only array', "no"],
        [[25, 100], 'only array', "yes"],

    ])('testing %s with expected result neither %s nor %s nor %s ', function(arg, result) {
        expect(tickets(arg)).not.toBe(result)
    })
})

describe('Task3', function(){
    it('should be defined', function(){
        expect(getQuntityPostsByAuthor).toBeDefined();
    })
    it('should be function', function(){
        expect(typeof getQuntityPostsByAuthor).toBe('function');
    })
    it('there is no such author in the data', function(){
        expect(getQuntityPostsByAuthor(listOfPosts2, "rrr")).toBe('rrr post:0 comments:0');
    })
    it('there is no such author in the data (not)', function(){
        expect(getQuntityPostsByAuthor(listOfPosts2, "rrr")).not.toBe('Rimus post:2 comments:5');
    })
    it('answer', function(){
        expect(getQuntityPostsByAuthor(listOfPosts2, "Rimus")).toBe('Rimus post:2 comments:5');
    })
    it('answer (not)', function(){
        expect(getQuntityPostsByAuthor(listOfPosts2, "Rimus")).not.toBe('rrr post:0 comments:0');
    })
})
var listOfPosts2 = [
    {
        id: 1,
        post: 'some post1',
        title: 'title 1',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            }
        ]
    },
    {
        id: 2,
        post: 'some post2',
        title: 'title 2',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            },
            {
                id: 1.3,
                comment: 'some comment3',
                title: 'title 3',
                author: 'Rimus'
            }
        ]
    },
    {
        id: 3,
        post: 'some post3',
        title: 'title 3',
        author: 'Rimus'
    },
    {
        id: 4,
        post: 'some post4',
        title: 'title 4',
        author: 'Uncle'
    }
  
];

describe('Task4', function(){
    it('cache should be defined', function(){
        expect(cache).toBeDefined();
    })
    it('cache should be function', function(){
        expect(typeof cache).toBe('function');
    })
    it('complexFunction should be defined ', function(){
        expect(complexFunction).toBeDefined();
    })
    it('complexFunction should be function', function(){
        expect(typeof complexFunction).toBe('function');
    })
    it('cachedFunc should be defined ', function(){
        expect(cachedFunc).toBeDefined();
    })
    it('complexFunction should be function', function(){
        expect(typeof cachedFunc).toBe('function');
    })
    test.each([
        ['foo', 'bar', 'foo bar'],
        ['foo', 'bar', 'In cache: foo bar'],
        ['foo', 'baz', 'foo baz'],

    ])('testing arguments %s %s with expected result %s', function(arg1, arg2, result) {
        expect(cachedFunc(arg1, arg2)).toBe(result)
    })
    test.each([
        ['foo', 'bar', 'In cache: foo baz'],
        ['foo', 'bar', 'foo baz'],
        ['foo', 'baz', 'foo bar'],
        ['foo', 'baz', 'In cache: foo bar'],
    ])('testing arguments %s %s with expected not result %s', function(arg1, arg2, result) {
        expect(cachedFunc(arg1, arg2)).not.toBe(result)
    })
})