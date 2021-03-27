// 1.Если а – четное посчитать а*б, иначе а+б
/*var a=6, b=6;
if(a%2 === 0){
    console.log(a*b);
}
else console.log(a+b);
*/

//2.Определить какой четверти принадлежит точка с координатами (х,у)
/*var x=prompt("Введите любое число x");
var y=prompt("Введите любое число y");
if((Number(x)>0) && (Number(y)>0)){
console.log("1");
}
else if ((Number(x)<0) && (Number(y)>0)){
    console.log("2");
}
else if((Number(x)<0) && (Number(y)<0)){
    console.log("3");
}
else if((Number(x)>0) && (Number(y)<0)){
    console.log("4");
}
else if ((Number(x) ===0) && (Number(x) === 0)){
    console.log("Начало координат");
}*/

//3.Найти суммы только положительных из трех чисел
/*var a=-1, b=-1, c=3, result=0;
if(a>0){
    result+=a;
}
else result=result;
if(b>0){
    result+=b;
}
else result=result;
if(c>0){
    result+=c;
}
else result=result;
console.log(result);*/

//4.Посчитать выражение (макс(а*б*с, а+б+с))+3
/*var a=-2, b=2, c=3;
var summa=a+b+c;
var multiplication=a*b*c;
var max=0;
if(multiplication>summa){
  max=multiplication+3
  console.log("max: " + max);
} else {
  max=summa+3;
  console.log(max);
}*/

//5.Написать программу определения оценки студента по его рейтингу ...
/*var x=prompt("0-100: " );
if(x>0){
  switch (true){
    case x>=0 && x<=19 :
      console.log("F"); 
      break;
    case x>=20 && x<=39:
      console.log("E"); 
      break;
    case x>=40 && x<=59:
      console.log("D"); 
      break;
    case x>=60 && x<=74:
      console.log("C"); 
      break;
    case x>=75 && x<=89:
      console.log("B"); 
      break;
    case x>=90 && x<=100:
      console.log("A"); 
      break; 
  }
}
else console.log("Введите от 0 до 100");
*/