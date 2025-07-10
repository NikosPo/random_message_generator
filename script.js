// Create a program that takes whatever input from a user (string) and
// randomly the program output a confucio's quote.
const prompt = require ("prompt-sync")({sigint: true})

// const userInput = prompt("Please enter your message and see the Confucius quote of the day: ");

let text = ['It does not matter how slowly you go as long as you do not stop.', 'I hear and I forget. I see and I remember. I do and I understand.',
 'Wherever you go, go with all your heart.','Life is really simple, but we insist on making it complicated.',
 'Everything has beauty, but not everyone sees it.','Never give a sword to a man who cannot dance.'];

text = text[Math.floor(Math.random() * text.length)];
console.log(`Confucius said: ${text}`);
