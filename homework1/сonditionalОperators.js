// 1.Если а – четное посчитать а*б, иначе а+б
/*function result(a, b){
  if(a%2 === 0){
    return a*b;
  } else return a + b;

}
//console.log(result(1,6));

//2.Определить какой четверти принадлежит точка с координатами (х,у)

function  coordinates(x, y){
  if( x === 0 && y === 0){
    return "Начало координат";
  }
  if( x > 0 && y > 0){
    return 1;
  }
  if( x < 0 && y > 0){
    return 2;
  }
  if( x < 0 && y< 00){
    return 3;
  }
  if( x > 0 && y < 0){
    return 4;
  }
}
/*console.log(coordinates(0, 0));
console.log(coordinates(3, 4));
console.log(coordinates(-3, 4));
console.log(coordinates(3, -4));
console.log(coordinates(-3, -4));*/

//3.Найти суммы только положительных из трех чисел
/*function sum(a, b, c){
  var result = 0;
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
console.log(sum(-1, -3, -7));*/

//4.Посчитать выражение (макс(а*б*с, а+б+с))+3

/*function maxMin(a, b, c){
  var summa = a + b + c;
  var multiplication = a*b*c;
  var max=0;
  if(multiplication > summa ){
    max = multiplication +3;
  } else max = summa + 3;
  return max;

}
console.log(maxMin(-2, 2, 3));*/

//5.Написать программу определения оценки студента по его рейтингу ...

/*function grade(number){
  if( number >= 0 && number <= 19){
    return "F";
  }
  if( number >= 20 && number <= 39){
    return "E";
  }
  if( number >= 40 && number <= 59){
    return "D";
  }
  if( number >= 60 && number <= 74){
    return "C";
  }
  if( number >= 75 && number <= 89){
    return "B";
  }
  if( number >= 90 && number <= 100){
    return "A";
  }
}
grade(5);
grade(25);
grade(45);
grade(65);
grade(85);
grade(95);*/