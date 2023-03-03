// util
const hasUpper = function doesStringHaveUpperCaseLetter(st) {
	return /[A-Z]/.test(st);
};

// higher-order function that changes one word to the next, preserving case
// eg preserveCase('result')('FoObAr') -> 'ReSuLt'
const preserveCase = (replace) => (portion) => (
	replace.split('')
		.map((letter, i) => {
			const find = portion.text;
			return (hasUpper(find.charAt(i))
				? letter.toUpperCase()
				: letter.toLowerCase()
			);
		}).join('')
);

// this var gets used in fixer.js
// eslint-disable-next-line no-unused-vars
const replacements = [
	{
		find: /(?:r[3e]t[4a]rd)(?!ant)/i,
		replace: preserveCase('stupid'),
	},
	{
		find: /(?:f[4a]g(g[0o]t)?)/i,
		replace: preserveCase('dude'),
	},
	{
		// jb 87, ps 801, hs 735
		find: /slit (your|my) wrists/,
		// I figure this preserves the joke but removes SH reference
		replace: 'cut someone',
	},
	{
		find: 'flog your carapace',
		replace: 'flog their carapace',
	},
	{
		find: 'flog myself raw with my own brain stem',
		replace: 'lose my fucking mind',
	},
];

// removed some stuff, added some others. using this for my school
