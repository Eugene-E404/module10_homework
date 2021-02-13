let array = [1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], result = true;

outer: for (i = 0; i < array.length; i++) {
	for (j = 0; j < array.length; j++) {
		if (array[i] != array[j]) {
			result = false;
			break outer;
		}
	}
}

console.log(result);