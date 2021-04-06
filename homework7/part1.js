//Part1
// 1
function result(a, b){
    if( typeof a !== 'number' || typeof b !== 'number'){
        return "not number"
    }
    if ( a%1 !== 0){
        return "error"
    } else if(a%2 === 0){
        return a*b;
    } else return a + b;
}

//2
function  coordinates(x, y){
  if( typeof x !== 'number' || typeof y !== 'number'){
    return "error"
  }
  if( x === 0 && y === 0){
    return "Начало координат";
  }
  if( x > 0 && y > 0){
    return 1;
  }
  if( x < 0 && y > 0){
    return 2;
  }
  if( x < 0 && y < 0){
    return 3;
  }
  if( x > 0 && y < 0){
    return 4;
  }
}

//3
function sum(a, b, c){
  var result = 0;
  if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
    return "error"
  }
  if( a > 0){
    result += a;
  } 
  if( b > 0){
    result += b;
  }
  if( c > 0){
    result += c;
  }
  return result;

}

//4
function maxMin(a, b, c){
  var summa = a + b + c;
  var multiplication = a*b*c;
  var max=0;
  if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
    return "error"
  }
  if( multiplication >= summa ){
    max = multiplication +3;
  } else max = summa + 3;

  return max;
}

//5
function grade(number){
  if(number > 100 ){
    return "error"
  }
  if(number < 0 ){
    return "error"
  }
  if( number >= 0 && number <= 19 ){
    return "F";
  }
  if( number >= 20 && number <= 39 ){
    return "E";
  }
  if( number >= 40 && number <= 59 ){
    return "D";
  }
  if( number >= 60 && number <= 74 ){
    return "C";
  }
  if( number >= 75 && number <= 89 ){
    return "B";
  }
  if( number >= 90 && number <= 100 ){
    return "A";
  }
}

module.exports ={ 
  result,
  coordinates,
  sum,
  maxMin,
  grade,
}