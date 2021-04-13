//Part2
//1
/*function summaQuantity(min, max){
    var result = '';
    var sum = 0, counter = 0;
    if( typeof min !== 'number' || typeof max !== 'number'){
        return "only number"
    }
    if( min === 1 && max === 99){
        for( min = 1; min <= max; min += 1){
            if( min%2 === 0){
                sum += min;
                counter++;
            } 
        }
        result = sum + ' ' + counter;
        return result;
    } else return "error"
}

//2
function primeNumber(number){
    if( typeof number !== 'number'){
        return "only number"
    }
    for(var i = 2; i < number; i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}

//3
function consistentSelection(number){
    if( typeof number !== "number"){
        return "only number"
    }
    if( number < 0){
        return "number < 0"
    }
    var i = 1;
    while( i*i <= number){
        i++;
    } return i-1
}

function binarySearch(number){
    var result = number;
    if( typeof number !== "number"){
        return "only number"
    }
    if( number < 0 ){
        return "number < 0"
    }
    while(result*result > number){
        result /=2;
    }
    while(result*result < number){
        result++;
    }
    return Math.floor(result);   
}

//4
function factorialNumber(number){
    var result = 1;
    if( typeof number !== "number"){
        return "only number";
    }
    if( number <= 0){
        return "number <= 0";
    }
    if( number % 1 !== 0){
        return "number with float";
    }
    for( var i = 2; i <= number; i++){
        result *= i;
    }
    return result;
}
console.log(factorialNumber("g"));

//5
function summa(number){
    var result = 0;
    if( typeof number !== "number"){
        return "only number"
    }
    if( number <= 0){
        return "number <= 0";
    }
    if( number % 1 !== 0){
        return "number with float";
    }
    while(Math.floor(number) > 0){
        result += number%10;
        number /=10;
    }
    return Math.floor(result);
}
   
//6
function reverseNumbers(number){
    var result = "";
    if( typeof number !== "number"){
        return "only number"
    }
    if( number <= 0){
        return "number <= 0";
    }
    if( number % 1 !== 0){
        return "number with float";
    }
    while( Math.floor(number) > 0){
        result += Math.floor(number%10);
        number /=10;
    }
    return result;
}

module.exports = {
    summaQuantity,
    primeNumber,
    consistentSelection,
    binarySearch,
    factorialNumber,
    summa,
    reverseNumbers
}*/