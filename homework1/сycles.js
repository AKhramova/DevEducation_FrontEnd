//1.Найти сумму четных чисел и их количество в диапазоне от 1 до 99
/*function summa(min, max){
    var result = 0, counter = 0;
    for( min =1; min <= max; min += 1){
        if( min%2 === 0){
            result += min;
            counter++;
        }
    }
    return result + ' ' + counter;
}
console.log(summa(1, 99));*/
/*2.	Проверить простое ли число? (число называется простым, 
если оно делится только само на себя и на 1)*/

/*function primeNumber(number){
    for(var i=2; i < number; i++){
        if(number % i ===0){
            return false;
        }
    }
    return true;
}
console.log(primeNumber(5));
console.log(primeNumber(15));*/

/*3.	Найти корень натурального числа с точностью до целого
 (рассмотреть вариант последовательного подбора и метод бинарного поиска)*/
//последовательного подбора
/*function consistentSelection(number){
    var i=1;
    while( i*i <= number){
        i++;
    } return i-1
}
console.log(consistentSelection(100));*/

//метод бинарного поиска
/*function binarySearch(number){
    var result = number;
    while(result*result > number){
        result /=2;
    }
    while(result*result < number){
        result++;
    }
    return Math.floor(result);   
}
console.log(binarySearch(81));*/

//4.Вычислить факториал числа n. n! = 1*2*…*n-1*n
/*function factorialNumber(number){
    var result = 1;
    if( number < 0){
        return "error";
    }
    for( var i = 2; i <= number; i++){
        result *=i;
    }
    return result;
}
console.log(factorialNumber(-5));*/
//5.	Посчитать сумму цифр заданного числа

/*function summa(number){
    var result = 0;
    if( typeof number !== "number"){
        return "error"
    }
    if( number <= 0){
        return "error";
    }
    if( number % 1 !== 0){
        return "error";
    }
    while(Math.floor(number) > 0){
        result += number%10;
        number /=10;
    }
    return Math.floor(result);
}
console.log(summa(0));
 */   

/*6.	Вывести число, которое является зеркальным отображением
 последовательности цифр заданного числа, например,
  задано число 123, вывести 321.*/

/*function reverseNumbers(number){
    var result = "";
    if( number <= 0){
        return "error";
    }
    while( Math.floor(number) > 0){
        result += Math.floor(number%10);
        number /=10;
    }
    return result;
}
console.log(reverseNumbers(123));*/