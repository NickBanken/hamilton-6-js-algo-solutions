
var array = [1, 2, 3, 4, 5];
var sum = 0;

function average (array) {

for (i = 0; i < array.length; i++) {
  sum = sum + array[i];
}
array_1_length = array.length;
return sum / array_1_length;
}


// Test de la fonction

let array2 = [101, 102, 103, 104, 105, 106, 107];
console.log(average(array2));