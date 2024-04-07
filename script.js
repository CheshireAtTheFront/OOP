// объект user
const user = {
	name: 'Alex',
	age: 33,
	// флажечек
	isAuth: false,
	// вложенный объект
	projects: {
		firstProject: 'firstProject',
		secondProject: 'secondProject',
	}
}

// const name = user.name
// const age = user.age
// const isAuth = user.isAuth

// через Деструктуризация
// const {name, age, isAuth} = user
// название переменной после Деструктуризация наследуется от названия свойств объекта, но это можно изменить
// const {name: nameUser, age, isAuth} = user

// Деструктурируем объект в нутри объекта
const {name: nameUser, age, isAuth, projects, projects: {firstProject, secondProject}} = user
// достаем значения из объекта в нутри объекта -> projects: {firstProject, secondProject}

console.log(nameUser);
console.log(age);
console.log(isAuth);
console.log(projects);
console.log(firstProject);
console.log(secondProject);

// Деструктурировать массив
// const names = ['Artryom', 'Max', 'Vasya', 'Petya', 'Alex'];
// const [art, max, vasya] = names

const names = ['Artryom', 'Max', 'Vasya', ['Petya', 'Alex']];
const [art, max, vasya, [petya, alex]] = names

console.log(art);
console.log(max);
console.log(vasya);
// получили значение массива ['Petya', 'Alex']
console.log(petya);
console.log(alex);

// const [art, max, vasya, other] = names
console.log(art);
console.log(max);
console.log(vasya);
// получили массив  ['Petya', 'Alex']
console.log(other);

// Где применяется диструктуризация
// const logger = (first, second, third) => {
// 	console.log(`${first} ${second} ${third}`);
// }

// logger('I', 'love', 'JavaScript');

const logger = ({first, second, third}) => { // был obj
	// используем деструктуризацию
	// console.log(obj);
	// const {first, second, third} = obj
	console.log(`${first} ${second} ${third}`);
}
// что если передадим объект со свойствами
logger({first: 'I', second: 'love', third: 'JavaScript'});
