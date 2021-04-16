
//1
function tickets(person) {
  if(Array.isArray(person) !== true){
    return "only array";
  }
  var cash25 = 0, cash50 = 0;
  for(var i = 0; i < person.length; i++){
   var numberOfArray = Number(person[i]);
     if(numberOfArray === 25){
      cash25++;
    }
    if(numberOfArray === 50){
      cash50++;
      cash25--;
    }
    if(numberOfArray === 100){
      cash25--;
      if(cash50 > 0){
        cash50--;
      } else{
        cash25 -=2;
      }
    }
    if(cash25 < 0 || cash50 < 0){
      return "no"
    }
  } 
  return "yes"; 
}


//3
var listOfPosts2 = [
  {
      id: 1,
      post: 'some post1',
      title: 'title 1',
      author: 'Ivanov',
      comments: [
          {
              id: 1.1,
              comment: 'some comment1',
              title: 'title 1',
              author: 'Rimus'
          },
          {
              id: 1.2,
              comment: 'some comment2',
              title: 'title 2',
              author: 'Uncle'
          }
      ]
  },
  {
      id: 2,
      post: 'some post2',
      title: 'title 2',
      author: 'Ivanov',
      comments: [
          {
              id: 1.1,
              comment: 'some comment1',
              title: 'title 1',
              author: 'Rimus'
          },
          {
              id: 1.2,
              comment: 'some comment2',
              title: 'title 2',
              author: 'Uncle'
          },
          {
              id: 1.3,
              comment: 'some comment3',
              title: 'title 3',
              author: 'Rimus'
          }
      ]
  },
  {
      id: 3,
      post: 'some post3',
      title: 'title 3',
      author: 'Rimus'
  },
  {
      id: 4,
      post: 'some post4',
      title: 'title 4',
      author: 'Uncle'
  }

];

var countComments = 0;
var  countPost = 0;
function getQuntityPostsByAuthor(obj, str) {
  for(var i = 0; i < obj.length; i++){
    for (var keys in obj[i]) {
      if( typeof obj[i][keys] === 'object'){
        getQuntityPostsByAuthor(obj[i][keys], str);
      }
      if(obj[i][keys] === str){
        if(obj[i].hasOwnProperty('comment')){
          countComments++;
        }
        if(obj[i].hasOwnProperty('post')){
          countPost++;
        }
      } 
    } 
  }
  return str + " post:" + countPost + " comments:" + countComments;
}
//4
var complexFunction = function(arg1, arg2){
  return arg1 + " " + arg2;
}
var cache = function(){
  var cacheObj = {};
  return function(arg1, arg2){
    if(cacheObj[arg1, arg2]){
      return "In cache: " + cacheObj[arg1, arg2];
    } else{
      cacheObj[arg1, arg2] = complexFunction(arg1, arg2);
      return complexFunction(arg1, arg2);
    }
  }
}


var cachedFunc = cache(complexFunction);
cachedFunc('foo', "bar");// foo bar
cachedFunc('foo', "bar");//In cache: foo bar
cachedFunc('foo', "baz");// foo baz

function getSum(str1, str2) {
  var sum = '', rememberNum = 0;
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
   return "Only string";
  }
  if(str1 % 1 !== 0 || str2 % 1 !== 0){
    return "Only number in string";
  }
  if( str1 < 0 || str2 < 0){
    return "only >= 0"
  }
  if (str2.length > str1.length) {
    var temp = str1;
    str1 = str2;
    str2 = temp;
  }
  var secondNumber = str1.length - str2.length;
  for (var i = str1.length - 1; i >= 0; i-- ){
    if ( i < str1.length - str2.length ){
      if ( +str1[i] + rememberNum >= 10 ){
        sum += +str1[i] + rememberNum - 10;
        rememberNum = 1;
      } else {
        sum += +str1[i] + rememberNum;
        rememberNum = 0;
      }
    } else if ( +str1[i] + +str2[i - secondNumber] >= 10 ) {
      sum += +str1[i] + +str2[i - secondNumber] - 10 + rememberNum;
      rememberNum = 1;
    } else {
      sum += +str1[i] + +str2[i - secondNumber] + rememberNum;
      rememberNum = 0;
    }
  }
  if( rememberNum !== 0){
   sum +=rememberNum;
  } 
  sum = sum.split('').reverse().join('');
  return  sum;
}

module.exports ={
 tickets,
  getQuntityPostsByAuthor,
  cache,
  complexFunction,
  cachedFunc,
  getSum
}