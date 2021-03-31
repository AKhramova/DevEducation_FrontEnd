var min = document.querySelector('.content__number-min');
var max = document.querySelector('.content__number-max');
var buttonGenerate = document.querySelector('.content__generate');
var textFinally = document.querySelector('.content__answer');
var buttonReset = document.querySelector('.content__reset');
var str = "Generate number: ";
var generate = false;
var arrayValue = [], arrayAnswer = [];
var randomNumber, minValue, maxValue;

function isValid(minValueCheck, maxValueCheck){
    if(minValueCheck <= 0 || maxValueCheck <=0 ){
        return false
    }
    if(minValueCheck % 1 !== 0 || maxValueCheck % 1 !==0 ){
        return false
    }
    if( minValueCheck >= maxValueCheck){
        return false
    }
}

function randomNumbers(minValue, maxValue){
    return Math.floor(Math.random()*(maxValue - minValue) + minValue);
}

function generateNumber(){
    minValue = Number(min.value);  
    maxValue = Number(max.value);

    if(isValid(minValue, maxValue) !== false){
        textFinally.textContent = "Start Game";
        if(!generate){
            for(var i = 0; i <= maxValue - minValue; i++){
                arrayValue[i] = minValue + i;
            }
            generate = true;
        }
    } else {
        return  textFinally.textContent = "Invalid data";
    }
    if(arrayValue.length === 0){
        buttonGenerate.disabled = true;
        textFinally.textContent = str + "Elements are over";
        return
    } 
        randomNumber = randomNumbers(0, arrayValue.length);
        arrayAnswer += arrayValue[randomNumber]+ "\n";

        textFinally.textContent  = str + arrayAnswer ;
        arrayValue.splice(randomNumber, 1);
} 

function refreshPage(){
    window.location.reload();
}

buttonGenerate.addEventListener('click', generateNumber);
