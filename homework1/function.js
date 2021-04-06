//Функции
//1.	Получить строковое название дня недели по номеру дня. 
/*function getDay(number){
  var arr = ["Monday", "Thuesday", "Wednesday", "Thuersday", "Friday", "Saturday", "Sunday"];
  if(number >=1 && number <= 7){
    return arr[number - 1];
  } else return "Incorrect data"
  
}
console.log(getDay(1));
console.log(getDay(7));
console.log(getDay(0));
console.log(getDay(8));*/

//2.Найти расстояние между двумя точками в двухмерном декартовом пространстве.
/*function distance(x1, x2, y1,  y2){ 
  if(typeof x1 !== "number" || typeof x2 !== "number" || typeof y1 !== "number" || typeof y2 !== "number"){
    return "Incorrect input data";
  }
  var result=1;
  var intermediate = (x2-x1)*(x2-x1) +(y2-y1)*(y2-y1);  //=>intermediate = Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2);
  while(result*result <= intermediate){
    result ++;
  }
  return result-1;  //=>return Math.floor(Math.sqrt(intermediate));
}
console.log(distance(1, 1, 1, 5));*/

//3.Вводим число(0-999), получаем строку с прописью числа.
/*function getString(num){
  var str ="";
  var hundreds = ["", "сто", "двести", "триста", "четыреста",
   "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"];

  var dozens = ["", "десять", "двадцать", "тридцать", "сорок",
   "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];

  var elevenToNineteen = ["", "одиннадцать", "двенадцать", "тринадцать",
   "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];

  var units = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];

  var indexOfhundreds, indexElevenToNineteen, indexDozens, indexUnits;
  if( typeof num !== "number"){
    return "only number"
  }
  if( num % 1 !== 0){
    return "number with float";
  }
  if( num === 0 ){
    return "ноль"
  }

  if( num > 0 && num <= 999){
    indexOfhundreds = Math.floor(num/100);
    str += hundreds[indexOfhundreds] + " ";
    num = num%100;
    
    if ( num > 10 && num < 20){
      indexElevenToNineteen = num%10;
      str += elevenToNineteen[indexElevenToNineteen] + " ";
    }
    else if(num >= 20 || num === 10){
      indexDozens = Math.floor(num/10);
      str += dozens[indexDozens] + " ";
      indexUnits = num%10;
      str += units[indexUnits];
    }
    else if ( num > 0 && num < 10){
      str += units[num];
    }
    return str;
  } 
  return "Incorrect input data";
}*/


/*4.	Вводим строку, которая содержит число, написанное прописью (0-999).
 Получить само число*/

 /*function fromString(str){
  var arrayString = str.split(" ");
  var result = 0;
  
  var arrayHundreds = [ "", "сто", "двести", "триста", "четыреста",
  "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"];

  var arrayDozens = [ "", "", "двадцать", "тридцать", "сорок",
  "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];//

  var arrayFirstNumber =["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять",
  "десять", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать",
   "семнадцать", "восемнадцать", "девятнадцать"];
   
   for(var i=0; i<arrayString.length; i++){
     var number = arrayString[i];

     var index = indexSearch(arrayHundreds, number);
     if(index !== ""){
       result += index*100;
     }
     index = indexSearch(arrayDozens, number);
     if(index !== ""){
       result += index*10;
     }
     index = indexSearch(arrayFirstNumber, number);
     if( index !== ""){
       result += index;
     }
   }
   return result;
}
function indexSearch(array, target){
  for (var i = 0; i < array.length; i++) {
    if (target === array[i]) {
      return i;
    }
  }
  return null;
}
console.log(fromString("семь")); 
console.log(fromString("тринадцать")); 
console.log(fromString("девятьсот восемнадцать"));
console.log(fromString("девятьсот восемьдесят"));

*/
