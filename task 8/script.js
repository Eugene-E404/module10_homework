let arrayMap = new Map([
	[1, 'шар'],
	['2', 'автомобиль'],
	[3, false],
	['четыре', 'масть'],
	[NaN, undefined],
]);

for (let key of arrayMap.keys()) {
	console.log(`ключ - ${key}, значение - ${arrayMap.get(key)}`);
}