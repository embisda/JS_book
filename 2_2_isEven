function isEven(N) {
	if (Math.sign(N) == -1) {
  	return isEven(parseInt(N) + 2);
  } else {
  	if (N == 0) {
     	return "Это четное число";
     } else if (N == 1) {
       return "Это не четное число";
     } else {
       return isEven(N - 2);
     }
 	}
 }
console.log(isEven(prompt("N =")));
