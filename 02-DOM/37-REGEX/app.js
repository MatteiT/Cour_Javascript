const r1 = /ou/;
const r2 = /[ou]/;
console.log(r1, r1.test('bonjour'), r1.test('Salut'));
console.log(r2, r2.test('bonjour'), r2.test('Salut'));

const r3 = /^ou/; //qui commence par ou
console.log(r3, r3.test('bonjour'), r3.test('outre'));

const r4 = /ou$/; // qui fini par ou
console.log(r4, r4.test('bonjour'), r4.test('mou'));

const r5 = /ou|oi/; // soit par ou soit par oi
console.log(r5, r5.test('bonjour'), r5.test('bonsoir'));

const r6 = /[a - z]/; // tout les lettre ene a et Z
console.log(r6, r6.test('bonjour'), r6.test('03652246'));

const r7 = /[^a - zA-Z]/; // toute les lettre en majuscule aussi
console.log(r7, r7.test('bonjour'), r7.test('023548568'));

const r8 = /[(ou)?]/; // eentre 0 et une fois
console.log(r8, r8.test('bonjour'), r8.test('03652246'));

const r9 = /[(ou)+]/; // entre une fois et infini
console.log(r9, r9.test('bonjour'), r9.test('03652246'));

const r10 = /[(ou){2}]/; // eles deux ou d'affiller
console.log(r10, r10.test('bonjour'), r10.test('coucou'));

const r11 = /[(ou){2,4}]/; // eles deux ou d'affiller
console.log(r11, r11.test('bonjour'), r11.test('coucou'));

const r12 = /[(ou){2,}]/; // eles deux ou d'affiller
console.log(r12, r12.test('bonjour'), r12.test('coucou'));

const r13 = /\^/; // echapper un character
console.log(r13, r13.test('^^'), r13.test('coucou'));

const r14 = /\s/; // rechercher un espace
console.log(r14, r14.test('bonjour tout le monde'), r14.test('coucou'));

const r15 = /\d/; // un chiffre (équivalent [1-9])
console.log(r15, r15.test('bonjour'), r15.test('coucou'));

const r16 = /./; // un chiffre (équivalent [1-9])
console.log(r1, r16.test('bonjour'), r16.test('coucou'));

const r17 = /(ou).*\1/; // un chiffre (équivalent [1-9])
console.log(r17, r17.test('bonjour'), r17.test('coucou'));

// match
const phrase = "j'aime la pizza, les cannelés et les okonomiyaki";
console.log(phrase.match(/pizza/));
console.log(phrase.match(/les/g));
const phrase2 = 'vive les regex et vive le javascript';
console.log(phrase2.match(/vive/gi));
// console.log(phrase.replace('pizza', 'salade'));
console.log(phrase.replace(/pizza/, 'salade'));
console.log(phrase2.replace(/javascript|regex/g, '******'));
console.log(phrase2.replace(/javascript/, '$& et css'));
const phrase3 = '1er : maurice 2eme : Paul 3eme : charli';

console.log(phrase3.match(/^\d/gm));
