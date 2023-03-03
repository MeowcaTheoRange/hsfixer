// replacements defined in fixer.js
// findAndReplaceDOMText from the library
/* global replacements findAndReplaceDOMText */

// eslint-disable-next-line no-console
console.log('Ruining Homestuck...');
const textElement = document.querySelector('body');

function replace() {
	replacements.forEach((word) => {
		findAndReplaceDOMText(textElement, {
			preset: 'prose',
			...word,
		});
	});
}

// just in case lol
replace();
setTimeout(replace, 1000);
setTimeout(replace, 2000);
setTimeout(replace, 5000);

// eslint-disable-next-line no-console
console.log('Ruined Homestuck.');
