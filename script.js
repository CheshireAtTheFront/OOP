// Операторы Rest и Spread
// Rest - остаточный параметр, Spread - оператор расширения

// Rest
const sum = (...params) => {
	// (a, b, c,...params)
	// console.log(a);
	// console.log(b);
	// console.log(c);
	// let sum = 0;
	// for(let i = 0; i < params.length; i++){
	// 	sum += params[i];
	// }
	// console.log(sum);

	return params.reduce((num1, num2) => num1 + num2)
}

console.log(sum(1, 2, 3, 4, 5, 6));;
// Rest примет остальные аргументы, которые потом можно импользовать в коде -> ...params
// ...params - по этому имени можно достучаться до остаточных параметров. Выводится массив из остаточных параметров [ 4, 5, 6 ]
// Rest должен быть самым последним среди перечисленных параметров функции

// Spread
// Spread - позволяет быстро и легко соеденять разные массивы
const firstAr = [1, 2, 3, 4];
const secondAr = [5, 6, 7, 8];

console.log([...firstAr, ...secondAr]);
/* 
[
  1, 2, 3, 4,
  5, 6, 7, 8
]
*/
// можно добавлять другие значения
console.log([123, 4444, ...firstAr, 555, ...secondAr]);
/* 
[
  123, 4444,   1, 2,
    3,    4, 555, 5,
    6,    7,   8
]
*/

