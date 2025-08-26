//1.Задача “Квадрат всех чисел”
//Напишите функцию squareNumbers(numbers), 
// которая возвращает новый массив, 
// где каждый элемент исходного массива чисел возведен в квадрат.

console.log("====== Задача 1 =======");
const data = [1, 2, 3, 4, 5, 6];
const data_square = data.map(num => num * num);
console.log(data_square);

function squareNumbers(numbers){
    return numbers.map(num => num * num);
}

const data1 = [1, 2, 3, 4, 5, 6, 7];
const result = squareNumbers(data1);
console.log(result)

//2.Задача "Увеличение всех чисел на 2"
// Напишите функцию increaseByTwo(numbers), 
// которая принимает массив чисел и возвращает новый массив, 
// в котором каждое число увеличено на 2.

console.log("====== Задача 2 =======");

function increaseByTwo(numbers){
    return numbers.map(num => num * 2);
}

const data2 = [1, 2, 3, 4, 5, 6, 7];
const result2 = increaseByTwo(data2);
console.log(result2)


//3.Задача "Подсчет итогов"
// Напишите функцию calculateTotal(prices), 
// которая с помощью метода reduce подсчитывает сумму всех цен в массиве.

console.log("====== Задача 3 =======");

function calculateTotal(prices){
    return prices.reduce((acc, curr) => acc + curr, 0);
}

const data3 = [1, 2, 3, 4, 5];
const summ = calculateTotal(data3);
console.log(summ);


//4.Задача “Произведение всех чисел”
// Напишите функцию multiplyPrices(prices), 
// которая с помощью метода reduce находит произведение всех чисел в массиве цен.
console.log("====== Задача 4 =======");

function multiplyPrices(prices){
    return prices.reduce((acc, curr) => acc * curr, 1)
}

const data4 = [1, 2, 3, 4, 5];
const multiply = multiplyPrices(data4);
console.log(multiply);


//5.Задача “Фильтрация отрицательных чисел”
// Напишите функцию filterPositiveNumbers(numbers), 
// которая фильтрует все положительные числа из массива.
console.log("====== Задача 5 =======");

function filterPositiveNumbers(numbers){
    return numbers.filter(num => num > 0);
}

const data5 = [-1, 0, 1, 2, -3];
console.log(filterPositiveNumbers(data5));


//6.Задача “Фильтрация длинных сообщений”
//Напишите функцию filterLongMessages(messages), 
// которая фильтрует только те сообщения, длина которых больше 10 символов.
console.log("====== Задача 6 =======");

function filterLongMessages(messages){
    return messages.filter(msg => msg.length > 10);
}

const data6 = ["Hello", "This is a long message", "Short", "Another long message here"];

console.log(filterLongMessages(data6))
