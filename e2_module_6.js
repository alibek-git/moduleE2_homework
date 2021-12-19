//Дан массив. Проверить, одинаковые ли элементы 
//в массиве и вывести результат true или false в консоль. 
//Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. 
//Проверить, все ли элементы в массиве одинаковые.
let indicator = true;
let arr = [1, 1, 1, 1, 2];

for (let i = 0; i < arr.length - 1; i += 1){
  if (arr[i] !== arr[i + 1]){
    indicator = false;
    break;
  }
  else if(arr[i] === arr[i + 1]){
       {};
          }
}
console.log(indicator)