//Одномерные массивы

//1.	Найти минимальный элемент массива
/*var array=[-9, 2, 0, 6, -5,]; //min=-5
var min=array[0];
for(var i=0; i<array.length; i++){
  if(min > array[i]){
    min=array[i];
  }
}
console.log("min: " + min);
*/

//2. Найти максимальный элемент массива
/*var array=[6, 5, 2, 1, 9]; //9
var max=array[0];
for(var i=0; i<array.length; i++){
  if(max < array[i]){
    max = array[i];
  }
}
console.log("max: " + max);*/

//3.	Найти индекс минимального элемента массива
/*var array=[-9, 2, 0, 6, -5]; //min=-9, index=0
var min=array[0], index=0;
for(var i=0; i<array.length; i++){
  if(min > array[i]){
    min=array[i];
    index=i;
  }
}
console.log("min: " + min);
console.log("index: " + index);
*/

//4.	Найти индекс максимального элемента массива 
/*var array=[6, 5, 2, 1, 9]; // max=9, index=4
var max=array[0], index=0;
for(var i=0; i<array.length; i++){
  if(max < array[i]){
    max = array[i];
    index=i;
  }
}
console.log("max: " + max);
console.log("index: " + index);*/

//5.	Посчитать сумму элементов массива с нечетными индексами
/*var array=[6, 5, 2, 1, 9, 10];
var result=0;
for(i=1; i<array.length; i++){
  result += array[i];
  i++;
}
console.log(result);
*/

//6.	Сделать реверс массива (массив в обратном направлении)
/*var array=[6, 5, 2, 1, 9, 10];
var result="";
for(i=array.length; i>0; i--){
 result +=array[i-1] + " ";
}
console.log(result);
*/

//7.	Посчитать количество нечетных элементов массива
/*var array=[6, 5, 2, 1, 9, 10];
var result=0;
for(i=0; i<array.length; i++){
  if(array[i]%2 != 0){
    result +=1;
  }
}
console.log(result);*/

/*8.	Поменять местами первую и вторую половину массива, 
например, для массива  1 2 3 4, результат 3 4 1 2*/
/*var array=[1,2,3,4];
var halfArray = Math.floor((array.length/2)+array.length%2);
for(var i=0; i<halfArray; i++){
  var intermediateValue = array[i];
  array[i] = array[halfArray+i];
  array[halfArray+i] = intermediateValue;
}
console.log(array);*/
//если array=[1,2,3,4,5] => [4, 5, undefined, 1, 2, 3]

/*
9.	Отсортировать массив (пузырьком (Bubble), выбором (Select),
 вставками (Insert)) 
*/

//пузырьком (Bubble)
//var array = [6, 3, 0, 2, 4, -1];
/*for(var i=0; i<array.length-1; i++){
  for(var j=0; j<array.length-i; j++){
    if(array[j] > array[j+1]){
      var intermediateValue = array[j];
       array[j] = array[j+1];
       array[j+1] = intermediateValue; 
     }

  }
  
}
console.log(array);*/


//выбором (Select)
/*for(var i=0; i<array.length; i++){ 
  var min = array[i];
  var index =i;
  //цикл выбора наименьшего элемента
  for(var j=i+1; j<array.length; j++){
    if(min > array[j]){
      min=array[j];
      index =j;
    }
  }
  if(index !== i){
    array[index] = array[i];
    array[i] = min;
  }
}
console.log(array);*/

//вставками (Insert)) 
/*for(var i=1; i<array.length; i++){
  var intermediateValue = array[i];
  var index = i;
  while(array[index-1] > intermediateValue){
    array[index] = array[index-1];
    index--;
  }
  array[index] = intermediateValue;
  
}
console.log(array);*/