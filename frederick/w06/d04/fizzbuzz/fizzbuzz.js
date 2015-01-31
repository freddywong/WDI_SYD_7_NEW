function fizzBuzz(n) {
	console.log(n);

	if (n != 100) {
		fizzBuzz(n += 1);
	}
}

fizzBuzz(1);