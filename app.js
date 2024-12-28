const quotes = [
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "If you look at what you have in life, you'll always have more.",
        author: "Oprah Winfrey"
    },
    {
        text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa"
    }
];

const quote = document.getElementById('quote');
const author = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

    generateFunction = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];

        quote.textContent = randomQuote.text;
        author.textContent = randomQuote.author;
    };

