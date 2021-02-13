let value;

value = + prompt('Введите значение');

if ((value === value) && (typeof(value) === 'number')) {
	if (value % 2 === 0) {
		console.log('Число четное')
	} else {
		console.log('Число нечетное')
	}
} else {
	console.log('Упс, кажется, вы ошиблись')
}