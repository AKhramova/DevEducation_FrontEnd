let { 
    init
 } = require('./index');

describe('function init', function(){
    it('should be defined', function(){
        expect(init).toBeDefined();
    })
    it('should be function', function(){
        expect(typeof init).toBe('function');
    })
    it('open modal window', function(){
        const body = document.createElement('div');
        function openWindow(){
           body.classList.toggle("show")
        }
        openWindow();
        expect(body.classList.contains("show")).toBe(true);
    })
    it('close modal window', function(){
        const body = document.createElement('div');
        function closeWindow(){
           body.classList.remove("show")
        }
        closeWindow();
        expect(body.classList.contains("show")).toBe(false);
    })
})