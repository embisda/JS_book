function reverseArray(array) {
	array.reverse();
  return array;
}
console.log(reverseArray([1,5]));

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
