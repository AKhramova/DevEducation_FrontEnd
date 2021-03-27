var min = document.querySelector('.content__number-min');
var max = document.querySelector('.content__number-max');
var buttonGenerate = document.querySelector('.content__generate');
var textFinally = document.querySelector('.content__answer');
var buttonReset = document.querySelector('.content__reset');
var str = "Generate number: ";
var generate = false;
var arrayValue = [], arrayAnswer = [];
var randomNumber, minValue, maxValue;

//сheck float and minus
function checkFloatInput(min, max){
    if(min.value.indexOf(".") != '-1' || min.value.indexOf('-') != '-1'){
        min.value = min.value.substr(0, min.value.indexOf('.') +1, min.value.indexOf('-') +1);
    }
    if(max.value.indexOf(".") !== '-1' || max.value,indexOf('-') != "-1"){
        max.value = max.value.substr(0, max.value.indexOf('.') +1, max.value.indexOf('-') +1);
    }
}

function generateNumber(){
    minValue = Number(min.value);  
    maxValue = Number(max.value);
    if(!generate){
        if(maxValue !== minValue){
            if(maxValue > 0 && minValue > 0){
                if(maxValue > minValue){
                    textFinally.textContent = "Start Game";
                    for(var i = 0; i <= maxValue - minValue; i++){
                        arrayValue[i] = minValue + i;
                    }
                    generate = true;
                } else textFinally.textContent = "Incorrect input data: max < min";
            } else textFinally.textContent = "Incorrect input data: max>0 or min>0";
        } else textFinally.textContent = "Incorrect input data: min = max";
        return
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

function randomNumbers(minValue, maxValue){
    return Math.floor(Math.random()*(maxValue - minValue) + minValue);
}
function refreshPage(){
    window.location.reload();
}
buttonGenerate.addEventListener('click', generateNumber);
buttonReset.addEventListener('click', resetData);
