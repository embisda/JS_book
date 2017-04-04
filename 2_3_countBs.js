function countBs(N, symbol) {
  var count = 0;
  for(var i=0; i<=N.length; i++) {
  	if (N.toLowerCase(i).charAt(i) == symbol.toLowerCase()) {
    count ++;
    }  
	}
	return count;
}
console.log(countBs(prompt("Напишите любую строку"), prompt("Какой символ будем искать?")));
