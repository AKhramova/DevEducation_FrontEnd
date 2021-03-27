//Функции

//1.	Получить строковое название дня недели по номеру дня. 
/*function stringName(numberOfTheDay){
  if(typeof numberOfTheDay === "number"){
    switch(numberOfTheDay){
      case 1: return "Monday";
      case 2: return "Thuesday";
      case 3: return "Wednesday";
      case 4: return "Thuersday";
      case 5: return "Friday";
      case 6: return "Saturday";
      case 7: return "Sunday";
    }
  }
   return "Incorrect input data";
}
console.log(stringName(1));*/

//2.Найти расстояние между двумя точками в двухмерном декартовом пространстве.
/*function distance(x1, x2, y1,  y2){
  var result=1;
  while (typeof x1 === "number" && typeof x2 === "number"
   && typeof y1 === "number" && typeof y2 === "number"){
    var intermediate = (x2-x1)*(x2-x1) +(y2-y1)*(y2-y1);  //=>intermediate = Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2);
     while(result*result <=intermediate){
       result ++;
     }
     return result-1;  //=>return Math.floor(Math.sqrt(intermediate));
    }
  return "Incorrect input data";

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
  var strZero = "ноль";

  if(num >=0 && num <=999){
    
    //сотни
    var indexOfhundreds = Math.floor(num/100);
    str += hundreds[indexOfhundreds] + " ";
  
    num = num%100;

    if (num > 10 && num < 20){
      // от 11 до 19 (включительно)
      var indexElevenToNineteen = num%10;
      str += elevenToNineteen[indexElevenToNineteen] + " ";
    }
    else if(num >= 20 || num === 10){
      // десятки
      var indexDozens = Math.floor(num/10);
      str += dozens[indexDozens] + " ";

      if(num/10 < 1){ //если есть 0 => 105
        var indexUnits = num%10;
        str += units[indexUnits];
      }
  
      //единицы
      var indexUnits = num%10;
      str += units[indexUnits];
    }
    else if (num > 0 && num < 10){
      str +=units[num];
    }
    else if(num%10 === 0){
      str += strZero;
    }
    return str;
  } 
  return "Incorrect input data";
}
console.log(getString(105));*/


/*4.	Вводим строку, которая содержит число, написанное прописью (0-999).
 Получить само число*/

 /*function fromString(str){
  var arrayString = str.split(" ");
  var result=0;
  
  var arrayHundreds = ["", "сто", "двести", "триста", "четыреста",
  "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"];

  var arrayDozens = ["", "десять", "двадцать", "тридцать", "сорок",
  "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];//
  var arrayUnits =["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];

   for(var i=0; i<arrayString.length; i++){
     for(var j=0; j<arrayHundreds.length; j++){ //проверка сотни
       if(arrayString[i].includes(arrayHundreds[j])){
        var  result1 = j*100;
       }
     } 
     result += result1;

     for(var k=0; k<arrayDozens.length; k++){ // проверка десятки, не работает на 80 и 90 
       if(arrayString[i].includes(arrayDozens[k])){
         var result2 = k*10;
       }
     } 
     result +=result2;

     switch(arrayString[i]){ //проверка от 11 до 19
      case "одиннадцать" : result += 11; break;
      case "двенадцать" : result += 12; break;
      case "тринадцать" : result += 13; break;
      case "четырнадцать" : result += 14; break;
      case "пятнадцать" : result += 15; break;
      case "шестнадцать" : result += 16; break;
      case "семнадцать" : result += 17; break;
      case "восемнадцать" : result += 18; break;
      case "девятнадцать" : result += 19;break;
    }

    for(var k=0; k<arrayUnits.length; k++){ //проверка цифры
      if(arrayString[i].includes(arrayUnits[k])){
        var result4 = k;
      }
    }
  }
    return result +result4;  

}
console.log(fromString("сто сорок семь"));
console.log(fromString("девятьсот восемнадцать"));*/



