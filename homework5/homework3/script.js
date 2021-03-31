var count = 0, min = 1, max=100, attemps=5, countClickChange=1;
var isGenerate = true;

//block main
var buttonGenerate = document.querySelector('.data__generate');
var buttonExit = document.querySelector('.data__exit');
var textStart = document.querySelector('.data__text-start');
var numberAnswer = document.querySelector('.data__answer');
var hints = document.querySelector('.data__hints');
var textFinally = document.querySelector('.data__text-finally')

//block change setting
var attempsChange = document.querySelector('.setting__attemps');
var minChange = document.querySelector('.setting__min-value');
var maxChange = document.querySelector('.setting__max-value');
var changeButton = document.querySelector('.setting__change');

// is valid min, max, attemps (input)
function isValid(attempsValue, minValue, maxValue){
    if(attempsValue <= 0 || minValue <= 0 || maxValue <=0){
        return false
    }
    if(attempsValue % 1 !== 0 || minValue % 1 !== 0 || maxValue % 1 !== 0){
        return false
    }
    if(attempsValue > 15){
        return false
    }
    if(minValue >= maxValue){
        return false
    }
    if(maxValue > 200){
        return false
    }

}

//block change setting
function changeSetting(){
    var userAttemps = Number(attempsChange.value);
    var userMin = Number(minChange.value);
    var userMax = Number(maxChange.value);
    textFinally.textContent = "";
    if(isValid(userAttemps, userMin, userMax) !== false){
        min = userMin;
        max = userMax;
        attemps = userAttemps;
    } else {
        textFinally.textContent = "Вы не правильно ввели значение j";
    }   
}

// is valid answer
function isValidAnswer(answerValue){ 
    if(answerValue < min || answerValue > max){
        return false
    }
    if(answerValue % 1 !== 0){
        return false
    }
}


function check(){
    var userAnswer = Number(numberAnswer.value);
    changeSetting();

    if(isGenerate === true){
        randomNumber = Math.ceil(Math.random() * max); 
    } 
    count++;

    if(isValidAnswer(userAnswer) !== false){
        textStart.textContent = "Привет, я загадал число от " + min + " до " + max +
        " вашего диапазона. Попробуй угадать его за " + attemps + " попыток!";
        attempsChange.disabled = true;
        minChange.disabled = true;
        maxChange.disabled = true;
        changeButton.disabled = true;
        isGenerate = false;
        if(count !== attemps){
            if(userAnswer === randomNumber){
                textFinally.textContent = "Поздравляю! Ты угадал задуманное число за " + count + " попыток";
                buttonGenerate.disabled = true;
            } else if (userAnswer > randomNumber){
                hints.textContent = "Большое, введи меньше число. У тебя осталось: " + (attemps - count) +  " попыток" ;
            } else {
                hints.textContent = "Число маленькое, введи больше. У тебя осталось: " + (attemps - count) +" попыток";
            }
        } else{
            textFinally.textContent = "Ты проиграл, попробуй заново";
            hints.textContent = "";
            buttonGenerate.disabled = true; 
        } 
    } else{
        count--;
        textStart.textContent = "Вы не правильно ввели значение m";  
    } 
}
    
function refreshPage(){
    window.location.reload();
}

changeButton.addEventListener('click', changeSetting);
buttonGenerate.addEventListener('click', check);
