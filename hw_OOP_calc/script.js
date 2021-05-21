var memoryCurrentNumber = 0,
memoryNewNumber = false,
memoryPedingOperation = '';

var Calculator = function(){
   
}

Calculator.prototype.addDOMElements = function(){
    this.display = document.getElementById('display');
    this.panel = document.getElementById('panel');
    this.numbersBtn = document.querySelectorAll('#number');
    this.operationBtn = document.querySelectorAll('#operation');
    this.clean = document.getElementById('clean');
    this.del = document.getElementById('del');
    this.decimal = document.getElementById('decimal');
    this.equel = document.getElementById('equel');
    this.signChange = document.getElementById('sign-change');

    this.leftBkt = document.getElementById('bkt-left');
    this.rightBkt = document.getElementById('bkt-right');
    this.factorial = document.getElementById('factorial');

    this.sin = document.getElementById('sin');
    this.cos = document.getElementById('cos');
    this.tan = document.getElementById('tan');
    this.pi = document.getElementById('pi');

    this.ln = document.getElementById('ln');
    this.log = document.getElementById('log');
    this.e = document.getElementById('e');
    this.root = document.getElementById('root');

    this.square = document.getElementById('square-degree');
    this.cube = document.getElementById('cube-degree');
    this.tenInDegree = document.getElementById('ten-in-degree');

    this.oneDivideX = document.getElementById('one-divide-x');
    this.module = document.getElementById('module');
    this.exp = document.getElementById('exp');
}

Calculator.prototype.addElements = function(){
    this.addDOMElements();
    this.panel.addEventListener('click', this.functionClick.bind(this)); 
    this.panel.addEventListener('click', this.withMath.bind(this)); 
}

Calculator.prototype.functionClick = function(event){
    var button = event.target;
    if(button.getAttribute('data-id') === 'number'){ 
        this.addValues(button.textContent);
    } 
    if(button.getAttribute('data-id') === 'operation'){ 
        localOperationMemory = this.display.value;
        this.addOperations(button.textContent);
    }
    if(button.getAttribute('data-id') === 'decimal'){
        this.addDecimal(button.textContent);
    }
    if(button.getAttribute('data-id') === "clear"){
        this.clearField();
    }
    if(button.getAttribute('data-id') === 'del'){
        this.delate();
    }
    if(button.getAttribute('data-id') === 'sign-change'){
        this.changeSing();
    }
    if(button.getAttribute('data-id') === 'factorial'){
        this.calcFactorial();
    }
    if(button.getAttribute('data-id') === 'one-divide-x'){
       this.oneDivideNumber();
    }
}

Calculator.prototype.addValues = function(arguments){
    if(memoryNewNumber){
        this.display.value = arguments;
        memoryNewNumber = false;
    } else {
        if(this.display.value === '0'){
            this.display.value = arguments;
        } else{
         this.display.value += arguments;
        }
    }
}
Calculator.prototype.addOperations = function(operations){
    memoryNewNumber = true;
    if(memoryPedingOperation === '+'){
        memoryCurrentNumber += parseFloat(localOperationMemory);
    } else if(memoryPedingOperation === '-'){
        memoryCurrentNumber -= parseFloat(localOperationMemory);
    }else if(memoryPedingOperation === '*'){
        memoryCurrentNumber *= parseFloat(localOperationMemory);
    }else if(memoryPedingOperation === '/'){
        memoryCurrentNumber /= parseFloat(localOperationMemory);
    }else if(memoryPedingOperation === '^'){
        memoryCurrentNumber = parseFloat(Math.pow(memoryCurrentNumber, localOperationMemory));
    }else if(memoryPedingOperation === '%'){
        memoryCurrentNumber *= parseFloat(localOperationMemory)/100;
        memoryCurrentNumber = memoryCurrentNumber.toFixed(5);
    }else if(memoryPedingOperation === 'mod'){
        memoryCurrentNumber %= parseFloat(localOperationMemory);
    }else{
        memoryCurrentNumber = parseFloat(localOperationMemory);
    }
    this.display.value = memoryCurrentNumber;
    memoryPedingOperation = operations;
}

Calculator.prototype.clearField = function(){
    this.display.value = 0;
    localOperationMemory = '';
    memoryCurrentNumber = 0,
    memoryNewNumber = false,
    memoryPedingOperation = '';
}
Calculator.prototype.delate = function(){
    this.display.value = this.display.value.substring(0, this.display.value.length - 1);
    if(this.display.value.length === 0){
        return this.display.value = 0;
    }
}
Calculator.prototype.changeSing = function(){
    this.display.value = -this.display.value;
}
Calculator.prototype.addDecimal = function(float){
    if(this.display.value.includes(float)){
        return;
    } else{
        this.display.value += float;
    }
}

Calculator.prototype.withMath = function(event){
    var button = event.target;
    if(button.getAttribute('data-id') === 'sin'){
        this.display.value = Math.sin(this.display.value);
    }
    if(button.getAttribute('data-id') === 'cos'){
        this.display.value = Math.cos(this.display.value);
    }
    if(button.getAttribute('data-id') === 'tan'){
        this.display.value = Math.tan(this.display.value);
    }
    if(button.getAttribute('data-id') === 'pi'){
       this.display.value = Math.PI;
    }
    if(button.getAttribute('data-id') === 'ln'){
        this.display.value = Math.log(this.display.value);
    }
    if(button.getAttribute('data-id') === 'log'){
        this.display.value = Math.log10(this.display.value);
    }
    if(button.getAttribute('data-id') === 'e'){
        this.display.value = Math.E;
    }
    if(button.getAttribute('data-id') === 'square-degree'){
        this.display.value = Math.pow(this.display.value, 2);
    }
    if(button.getAttribute('data-id') === 'cube-degree'){
        this.display.value = Math.pow(this.display.value, 3);
    }
    if(button.getAttribute('data-id') === 'ten-in-degree'){
        this.display.value = Math.pow(10, this.display.value);
    }
    if(button.getAttribute('data-id') === 'root'){
        this.display.value = Math.sqrt(this.display.value);
    }
    if(button.getAttribute('data-id') === 'module'){
        this.display.value = Math.abs(this.display.value);
    }
    if(button.getAttribute('data-id') === 'exp'){
        this.display.value = Math.exp(this.display.value);
    } 
}

Calculator.prototype.calcFactorial = function(){
    if(this.display.value >= 0 && this.display.value % 1 === 0){
        var result = 1;
        for(var i = 1; i <= this.display.value; i++){
            result *= i;
        }
        this.display.value = result;
    } else{
        alert('Data is invalid');
    }
}

Calculator.prototype.oneDivideNumber = function(){
    this.display.value = 1/this.display.value;
}

window.addEventListener('DOMContentLoaded', function () {
    var calculator = new Calculator();
    calculator.addElements();
});
