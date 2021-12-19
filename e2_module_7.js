// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, 
// то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

let evenCount = 0;
let oddCount = 0;
let zerosCount = 0;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0, 'a', 'b', true, [1, 2, 4], null];

for (let i = 0; i < arr.length - 1; i += 1){
	if (typeof(arr[i]) !== 'number'){
		{};
	} else if (arr[i] === 0){
		zerosCount += 1;
	} else if (arr[i] % 2 === 0){
		evenCount += 1;
	}
	else if (arr[i] % 2 === 1){
		oddCount += 1;
	}
}

console.log(`Number of even numbers in the array: ${evenCount}`);
console.log(`Number of odd numbers in the array: ${oddCount}`);
if (zerosCount > 0){console.log(`Number of zeros in the array: ${zerosCount}`)}
