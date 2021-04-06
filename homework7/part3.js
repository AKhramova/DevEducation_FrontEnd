//Part3
//1
/*function minElem(arr){
  if(Array.isArray(arr) !== true){
    return "its not array"
  }
  if( arr.length === 0){
    return "array is empty"
  }
  var min = arr[0];
  for(var i=0; i<arr.length; i++){
    if(min > arr[i]){
      min=arr[i];
    }
  }
  return  min;
}

//2
function maxElem(arr){
  if(Array.isArray(arr) !== true){
    return "its not array"
  }
  if( arr.length === 0){
    return "array is empty"
  }
  var max = arr[0];
  for(var i=0; i<arr.length; i++){
    if(max < arr[i]){
      max=arr[i];
    }
  }
  return  max;
}

//3

function minIndex(arr){
  if(Array.isArray(arr) !== true){
    return "its not array"
  }
  if( arr.length === 0){
    return "array is empty"
  }
  var min = arr[0], index = 0;
  for(var i=0; i<arr.length; i++){
    if(min > arr[i]){
      min=arr[i];
      index = i;
    }
  }
  var result = '';
  result =  min  + " " + index;
  return result;
}
console.log(minIndex([2, 0, 6, -5]));

//4
function maxIndex(arr){
  if(Array.isArray(arr) !== true){
    return "its not array"
  }
  if( arr.length === 0){
    return "array is empty"
  }
  var max = arr[0], index = 0;
  for(var i=0; i<arr.length; i++){
    if(max < arr[i]){
      max=arr[i];
      index = i;
    }
  }
  var result = '';
  result =  max  + " " + index;
  return result;
}

//5

function sumByIndex(array){
  if(Array.isArray(array) !== true){
    return "its not array"
  }
  if( array.length === 0){
    return "array is empty"
  }
  var result =0;
  for(var i=1; i < array.length; i++){
    result +=array[i];
    i++;
    
  }
  return result;
}

//6

function reverseArray(arr){
  var result = [];
  if(Array.isArray(arr) !== true){
    return "its not array"
  }
  if( arr.length === 0){
    return "array is empty"
  }
  for(var i=arr.length; i > 0; i--){
    result.push(arr[i-1]);
  }
  return result;
}

//7

function summa(arr){
  var result = 0;
  if(Array.isArray(arr) !== true){
    return "its not array"
  }
  if( arr.length === 0){
    return "array is empty"
  }
  for( var i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0){
      result +=1
    }
  }
  return result;
}

//8

function changeArray(arr){
  var firstHalfArray = Math.floor(arr.length / 2);
  var secondHalfArray = arr.length - firstHalfArray;
  var result =[];
  if(Array.isArray(arr) !== true){
    return "its not array"
  }
  if( arr.length === 0){
    return "array is empty"
  }
  for(var i = 0; i < secondHalfArray; i++){
    result[i] = arr[i + firstHalfArray];
  }
  for(var i = 0; i < firstHalfArray; i++){
    result[i + secondHalfArray] = arr[i];
  }
  return result;

}

//9

function sortBubble(arr){
  if(Array.isArray(arr) !== true){
    return "its not array"
  }
  if( arr.length === 0){
    return "array is empty"
  }
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

function sortSelect(arr){
  if(Array.isArray(arr) !== true){
    return "its not array"
  }
  if( arr.length === 0){
    return "array is empty"
  }
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

function sortInsert(arr){
  if(Array.isArray(arr) !== true){
    return "its not array"
  }
  if( arr.length === 0){
    return "array is empty"
  }
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

module.exports = {
  minElem,
  maxElem,
  minIndex,
  maxIndex,
  sumByIndex,
  reverseArray,
  summa,
  changeArray,
  sortBubble,
  sortSelect,
  sortInsert,
}*/