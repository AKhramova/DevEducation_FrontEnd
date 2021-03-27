
//1.Найти сумму четных чисел и их количество в диапазоне от 1 до 99
/*var summa=0, counter=0;
for(var i=1; i<=99; i+=1){
    if(i%2 === 0){ 
    summa +=i;
    counter++;
    }
}
console.log("summa " + summa); // 2450
console.log("counter " + counter); //49
*/

/*2.	Проверить простое ли число? (число называется простым, 
если оно делится только само на себя и на 1)*/
/*var number=1;
var result=true; 
for(i=2; i< number; i++){
    if(number%i === 0){
        result=false;
    }
}
console.log("result: " + result);
*/

/*3.	Найти корень натурального числа с точностью до целого
 (рассмотреть вариант последовательного подбора и метод бинарного поиска)*/
//последовательного подбора
 /*var a=100;
 var i=1;
    while (i*i<=a){
        i++;  
    } 
    console.log(i-1);

//метод бинарного поиска
var a=8;
var result=a;
while(result*result >a){
    result = result/2;
}
while(result*result < a){
    result++;
}
console.log(Math.floor(result));

//4.Вычислить факториал числа n. n! = 1*2*…*n-1*n
/*var n=5, result=1;
    for(var i=2; i<=n; i++){
    result = result*i;
}
console.log(result);
*/

//5.	Посчитать сумму цифр заданного числа
/*var a=113, result=0;
while(Math.floor(a) > 0){
  result += a%10;
  a /= 10;
}
console.log(Math.floor(result));
*/

/*6.	Вывести число, которое является зеркальным отображением
 последовательности цифр заданного числа, например,
  задано число 123, вывести 321.*/
 /*var a=123, result="";
  while(Math.floor(a)>0){
    result += Math.floor(a%10);
    a/=10;
  }
  console.log(result);*/