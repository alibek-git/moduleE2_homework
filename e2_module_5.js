let arr = [1, 2, 3, 'somestring', true, 'a', "b", 55];
let result = arr.map(function(item, index, array){
  return item
});

console.log(arr.length);
console.log(result);