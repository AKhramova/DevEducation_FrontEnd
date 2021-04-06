//1.	Найти минимальный элемент массива
/*function minElem(arr){
  var min = arr[0];
  for(var i=0; i<arr.length; i++){
    if(min > arr[i]){
      min=arr[i];
    }
  }
  return  min;
}
console.log(minElem([2, 0, 6, -5,]));*/

//2. Найти максимальный элемент массива
/*function maxElem(arr){
  var max = arr[0];
  for(var i=0; i<arr.length; i++){
    if(max < arr[i]){
      max=arr[i];
    }
  }
  return  max;
}
console.log(maxElem([2, 0, 6, -5,]));*/

//3.	Найти индекс минимального элемента массива

/*function minIndex(arr){
  var min = arr[0], index = 0;
  for(var i=0; i<arr.length; i++){
    if(min > arr[i]){
      min=arr[i];
      index = i;
    }
  }
  return  min + " " + index;
}
console.log(minIndex([2, 0, 6, -5]));*/

//4.	Найти индекс максимального элемента массива 
/*function maxElem(arr){
  var max = arr[0], index = 0;
  for(var i=0; i<arr.length; i++){
    if(max < arr[i]){
      max=arr[i];
      index = i;
    }
  }
  return  max + " " + index;;
}
console.log(maxElem([2, 0, 6, -5,]));*/

//5.	Посчитать сумму элементов массива с нечетными индексами

/*function summa(array){
  var result =0;
  for(var i=1; i < array.length; i++){
    result +=array[i];
    i++;
  }
  return result;
}
console.log(summa([6, 5, 2, 1, 9, 10]));*/
//6.	Сделать реверс массива (массив в обратном направлении)

/*function reverseArray(arr){
  var result = [];
  for(var i=arr.length; i > 0; i--){
    result.push(arr[i-1]);
  }
  return result;
}
console.log(reverseArray([6, 5, 2, 1, 9, 10]));*/

//7.	Посчитать количество нечетных элементов массива

/*function summa(arr){
  var result = 0;
  for( var i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0){
      result +=1
    }
  }
  return result;
}
console.log(summa([6, 5, 2, 1, 9, 10, 3]));*/

/*8.	Поменять местами первую и вторую половину массива, 
например, для массива  1 2 3 4, результат 3 4 1 2*/

/*function changeArray(arr){
  var firstHalfArray = Math.floor(arr.length / 2);
  var secondHalfArray = arr.length - firstHalfArray;
  var result =[];
  if(!Array.isArray(arr)){
    return "error";
  }
  for(var i = 0; i < secondHalfArray; i++){
    result[i] = arr[i + firstHalfArray];
  }
  for(var i = 0; i < firstHalfArray; i++){
    result[i + secondHalfArray] = arr[i];
  }
  return result;

}
console.log(changeArray([1,2,3,4,5]));*/
/*
9.	Отсортировать массив (пузырьком (Bubble), выбором (Select),
 вставками (Insert)) 
*/

/*function sortBubble(arr){
  for(var i=0; i<arr.length-1; i++){
    for(var j=0; j<arr.length-i; j++){
      if(arr[j] > arr[j+1]){
        var intermediateValue = arr[j];
         arr[j] = arr[j+1];
         arr[j+1] = intermediateValue; 
       }
    }
  }
  return arr;
}
console.log(sortBubble([6, 3, 0, 2, 4, -1]));*/

/*function sortSelect(arr){
  for(var i=0; i<arr.length; i++){ 
    var min = arr[i];
    var index =i;
    //цикл выбора наименьшего элемента
    for(var j=i+1; j<arr.length; j++){
      if(min > arr[j]){
        min=arr[j];
        index =j;
      }
    }
    if(index !== i){
      arr[index] = arr[i];
      arr[i] = min;
    }
  }
  return arr;
}
console.log(sortSelect([6, 3, 0, 2, 4, -1]));*/

/*function sortInsert(arr){
  for(var i=1; i<arr.length; i++){
    var intermediateValue = arr[i];
    var index = i;
    while(arr[index-1] > intermediateValue){
      arr[index] = arr[index-1];
      index--;
    }
    arr[index] = intermediateValue;
  }
  return arr;
}
console.log(sortInsert([6, 3, 0, 2, 4, -1]));*/