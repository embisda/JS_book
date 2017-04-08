function range(begin, end, step) {
	var array = [];
  if(step == null) {
  	step = 1;
  }
  if(step > 0) {
  	for (var i=begin; i<=end; i+=step) {
     array.push(i);
    }
  } else {
    	for (var i=begin; i>=end; i+=step) {
        array.push(i);
      }
  }
  return array;
}

function sum (array) {
	var total = 0;
  var count = array[0];
  while (count<=array.length) {
  	total += count;
    count ++;
  }
  return total;
}

console.log(range(2,7));
console.log(range(10,50,10));
console.log(range(5,2,-1));
console.log(sum(range(1,10)));
