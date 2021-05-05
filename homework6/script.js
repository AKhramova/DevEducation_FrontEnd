//1
function getCookingTime (eggsAmount) {
    var result;
    result = Math.ceil(eggsAmount/5)*5;
    return result;
}
getCookingTime(0); 
getCookingTime(5); 
getCookingTime(9); 


//2
function getNumber(array) {
    var resultEven, resultOdd, count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            resultEven = array[i];
            count++;
        } else {
            resultOdd = array[i];
        }
    }

    if (count === 1) {
        return resultEven;
    } else {
        return resultOdd;         
    }
}
getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]);
getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]); 

//3
var arr = [{
    title: 'Some title1'
    }, {
    title: 'I like JS'
    }, {
    user: 'This obj doesn\’t have key title js'
    }, {
    title: 'Js - is the best!'
    }];
    
function findTitle(array, str) {
    var result = [];
    for(var i = 0; i < array.length; i++){
        if(array[i].user){
            array.splice(i, 1);
        }
        if(array[i].title.toLowerCase().includes(str)){
            result.push(array[i]);
        }
    }
    return result;
}
findTitle(arr, 'js'); 

//4
function countCharacters(string){
    var result ={};
  for(var i=0; i < string.length; i++){
    if(!result[string[i]]){
          result[string[i]] = 1;
        } else {
            result[string[i]] += 1;
        }
    }
    return result;
}
countCharacters("sparrow"); 
countCharacters("aabcddeffge");
countCharacters("a 2ab !d");

//5

function isPalindrome(number){
    var revers = "";
    var k = number;
    while(Math.floor(number)>0){
        revers += Math.floor(number%10);
        number/=10;
    }
    return revers ==  k;
}

function getNextPalindrome(number) {
    var result = null;
    if (number < 10) {
        number = 10;
    } 
    while (!isPalindrome(++number)){
    }
    result = number;
    return result;

}
getNextPalindrome(7) // returns 11
getNextPalindrome(99) //returns 101
getNextPalindrome(132) // returns 141
getNextPalindrome(888) // returns 898
getNextPalindrome(999) // returns 1001
