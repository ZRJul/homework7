//1. Вивести на сторінку в один рядок через кому числа від 10 до 20
console.log('Вивести на сторінку в один рядок через кому числа від 10 до 20')
let strOne = '';
let numOne
for (let numOne = 10; numOne <= 20; numOne++) {
   if (numOne == 20) {
       strOne += (numOne+ '');
   } else {
       strOne += (numOne+ ',');
   }

}
console.log(strOne);
console.log('');

//2. Вивести квадрати чисел від 10 до 20
console.log('Вивести квадрати чисел від 10 до 20');
let strTwo = '';
let numTwo;
for (let numTwo = 10; numTwo <= 20; numTwo++) {
  let  numTwoSq = Math.pow(numTwo,2);
    if (numTwo == 20) {
        strTwo += (numTwoSq+ '');
    } else {
        strTwo += (numTwoSq+ ',');
    }
}
console.log(strTwo);
console.log('');

//3. Вивести таблицю множення на 7
console.log('Вивести таблицю множення на 7');
let a = 7;
for (let b =1; b <= 10; b ++) {
    console.log(`${a} x ${b} = ${a * b}`)
}
console.log();
console.log('');

//4. Знайти суму всіх цілих чисел від 1 до 15
console.log('Знайти суму всіх цілих чисел від 1 до 15');
let sumFour = 0;
for (let numFor = 1; numFor <= 15; numFor ++) {
sumFour += numFor;
}
console.log(sumFour);
console.log('');

// 5. Знайти добуток усіх цілих чисел від 15 до 35
console.log('Знайти добуток усіх цілих чисел від 15 до 35')

let result = 1;
for(let i = 15; i <= 35; i++){
    result = result * i;
}
console.log(result);
console.log('');

//6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500
console.log('Знайти середнє арифметичне всіх цілих чисел від 1 до 500');

// let arr=[];
// for (let i=1;i<=500;i++){
//     arr.push(i);
// }
// console.log(arr);

let N = 500;
let arr = Array.from({length: N}, (_, index) => index + 1);
// console.log(arr);

let getAverage = function (numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i += 1){
        sum += numbers[i];
    }
    return sum / numbers.length;
}
console.log(getAverage(arr));

// let getAverage = (numbers) => {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i += 1) {
//         sum += numbers[i];
//     }
//     return sum / numbers.length;
// };
//
// console.log(getAverage(arr));
console.log('');

// 7. Вивести суму лише парних чисел у діапазоні від 30 до 80
console.log('Вивести суму лише парних чисел у діапазоні від 30 до 80');
let sumSeven = 0;
for (let i = 30; i <= 80; i ++) {
    if (i%2 == 0) {
        sumSeven += i;
    }
}
console.log(sumSeven);
console.log('');

// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3
console.log('Вивести всі числа в діапазоні від 100 до 200 кратні 3')

let strEight = '';
for (let i=100; i <=200; i++) {
    if (i%3 == 0) {
        strEight += (i+ ',');
    }
}
console.log(strEight);
console.log('');

// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники. Визначити кількість його парних дільників. Знайти суму його парних дільників
console.log('Дано натуральне число. Знайти та вивести на сторінку всі його дільники. \n Визначити кількість його парних дільників')
let strNine = '';
let sumNine = 0;
let count = 0;
let natNumber = +prompt('Введіть натуральне число');
for (let i = 1; i <= natNumber; i++) {
    if (natNumber % i == 0) {
        strNine += (i+ ',');
        if (i % 2 === 0){
            count++;
            sumNine += i;
        }
    }
}
alert(`Дільники числа ${strNine} \nкількість парних ${count}, \nїх сума ${sumNine}`);
console.log(`Дільники числа ${strNine} \nкількість парних ${count}, \nїх сума ${sumNine}`)
console.log('');

// 10. Надрукувати повну таблицю множення від 1 до 10
console.log('Надрукувати повну таблицю множення від 1 до 10');
for (let i = 1; i <= 10;  i += 1) {
    for (let j = 1; j <= 10; j += 1) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('');
}