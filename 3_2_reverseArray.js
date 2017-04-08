function reverseArray(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--)
    newArray.push(array[i]);
  return newArray;
}
console.log(reverseArray([1,2,3,4,5]));

function reverseArrayInPlace(myArray) {
  var newArray = [];
  var lastElem = '';  
  
  while(myArray.length>0) {
    lastElem = myArray[myArray.length - 1]; 
    newArray.push(lastElem);
    var i = myArray.length;
    myArray.splice(i-1,1); 
  }  
  return newArray;
}

console.log(reverseArrayInPlace(["Я", "пишу", "задом", "на", "перед"]));
