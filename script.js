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

// Function to pick a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = `"${quotes[randomIndex].text}"`;
    authorText.textContent = `- ${quotes[randomIndex].author}`;
}

// Function to toggle dark mode
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Event Listeners
quoteBtn.addEventListener('click', getRandomQuote);
themeBtn.addEventListener('click', toggleTheme);
