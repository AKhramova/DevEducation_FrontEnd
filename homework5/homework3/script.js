var countClickGenerate = 0, min = 1, max=100, attemps=5, attempsLeft, countClickChange=1;

//block main
var buttonGenerate = document.querySelector('.data__generate');
var textStart = document.querySelector('.data__text-start');
var numberAnswer = document.querySelector('.data__answer');
var hints = document.querySelector('.data__hints');
var textFinally = document.querySelector('.data__text-finally')

//block change setting
var attempsChange = document.querySelector('.setting__attemps');
var minChange = document.querySelector('.setting__min-value');
var maxChange = document.querySelector('.setting__max-value');
var changeButton = document.querySelector('.setting__change');

//проверка на плавающую точку
function checkFloat(numberAnswer, attempsChange, minChange, maxChange){
    if (numberAnswer.value.indexOf(".") != '-1') {
        numberAnswer.value=numberAnswer.value.substr(0, numberAnswer.value.indexOf(".") + 1);
    } else if (attempsChange.value.indexOf(".") != '-1') {
        attempsChange.value=attempsChange.value.substr(0, attempsChange.value.indexOf(".") + 1);
    } else if (minChange.value.indexOf(".") != '-1') {
        minChange.value=minChange.value.substr(0, minChange.value.indexOf(".") + 1);
    } else if (maxChange.value.indexOf(".") != '-1') {
        maxChange.value=maxChange.value.substr(0, maxChange.value.indexOf(".") + 1);
    }
}
checkFloat(numberAnswer, attempsChange, minChange, maxChange);

//block change setting
function changeSetting(){
    var userAttemps = Number(attempsChange.value);
    var userMin = Number(minChange.value);
    var userMax = Number(maxChange.value);
    var wrong ="";
    if(countClickChange >=1 ){
        textStart.textContent="";
        if(userAttemps >= 1 && userAttemps <=15){
            attemps = userAttemps; 
        } else{
            wrong +="Диапазон попыток от 1 до 15. ";
        } 
        if(userMin > 0 ){
            if(userMax !== userMin){
                if(userMax > userMin && userMax <=200){
                    min = userMin;
                    max = userMax;
                } else wrong +="Диапазон max числа от min до 200. ";
            } else wrong ="max = min. ";
        } else wrong +="min число должно быть больше 0. ";
      textStart.textContent = wrong;   
    }
    randomNumber = Math.ceil(Math.random() * max); //параметры заданые пользователем
}
randomNumber = Math.ceil(Math.random() * max); //если параметры по умолчанию

//block main
function check(){
    
    var userAnswer = Number(numberAnswer.value);
        if(userAnswer >= min && userAnswer <= max){
            if(countClickGenerate >= 0){
                textStart.textContent = "Привет, я загадал число от " + min + " до " + max +
                " вашего диапазона. Попробуй угадать его за " + attemps + " попыток!";
                if (userAnswer >= 1){
                    attempsChange.disabled = true;
                    minChange.disabled = true;
                    maxChange.disabled = true;
                    changeButton.disabled = true;
                    if(userAnswer === randomNumber){
                        textFinally.textContent = "Поздравляю! Ты угадал задуманное число за " + countClickGenerate + " попыток";
                        disabledButton();
                    } else if (countClickGenerate === attemps){
                        textFinally.textContent = "Ты проиграл, попробуй заново";
                        attempsLeft=0;
                        disabledButton();
                       return hints.textContent = "";
                    } else{
                        if(attemps-countClickGenerate > 0){
                            attempsLeft=attemps-countClickGenerate;
                        } else attempsLeft=0;
                        if(userAnswer < randomNumber){
                            textStart = ' ';
                            hints.textContent = "Число маленькое, введи больше. У тебя осталось: " + attempsLeft  +" попыток";
                        } else if(userAnswer > randomNumber){
                            hints.textContent = "Большое, введи меньше число. У тебя осталось: " + attempsLeft +" попыток";
                        }
                    }
                }
            }
        } else {  textStart.textContent ="Вы не правильно ввели число";
                  hints.textContent='';
            }
        countClickGenerate++;
}
function disabledButton(){
    buttonGenerate.disabled = true;
}
//block exit
function refreshPage(){
    window.location.reload();
}

buttonGenerate.addEventListener('click', check);
changeButton.addEventListener('click', changeSetting);
