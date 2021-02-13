str = prompt('Введите фразу');

for (let i = 0; i < str.length; i++) {
	str = str.slice(0, i) + str[str.length - 1] + str.slice(i, str.length - 1);
}

alert(str);