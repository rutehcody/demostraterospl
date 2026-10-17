// List of quotes to display
const quotes = [
    { text: "Progress over perfection.", author: "Unknown" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
    { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" }
];

// Elements
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const quoteBtn = document.getElementById('quote-btn');
const themeBtn = document.getElementById('theme-btn');

// TODO 1: Write a function to pick a random quote from the array 
// and update the HTML text (`quoteText` and `authorText`).
function getRandomQuote() {
    // Your code here
}

// TODO 2: Write a function to toggle the class 'dark-mode' on the <body> element.
function toggleTheme() {
    // Your code here
}

// Event Listeners
quoteBtn.addEventListener('click', getRandomQuote);
themeBtn.addEventListener('click', toggleTheme);
