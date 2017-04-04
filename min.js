function min(a,b) {
	if (a<b && Math.sign(a)==-1 && Math.sign(b)==-1) {
  	return b;
  } else if (a>b && Math.sign(a)==-1 && Math.sign(b)==-1) {
  	return a;
  } else if (a<b) {
  	return a;
  } else if (a>b) {
  	return b;
  } else {
    return "a = b";
  }
}
console.log(min(prompt("a = "), prompt("b = ")));
