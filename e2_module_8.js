//Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
let capitals = new Map([
	["Argentina", "Buenos-Aires"],
	["Ghana", "Acra"],
	["South Korea", "Seoul"],
	["Peru", "Lima"],
	["Denmark", "Copenhagen"]
	]);

for (let country of capitals.keys()){
	console.log(country);
}

for (let pair of capitals.entries()){
  console.log(`The capital of ${pair[0]} is ${[pair[1]]}`);
}