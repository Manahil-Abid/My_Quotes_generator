let quotes = [
"The greatest glory in living lies not in never falling, but in rising every time we fall. ~Nelson Mandela",
"The way to get started is to quit talking and begin doing. ~Walt Disney",
"Your time is limited, so don't waste it living someone else's life ~Steve Jobs",
"If life were predictable it would cease to be life, and be without flavor.  ~Eleanor Roosevelt",
"If you look at what you have in life, you'll always have more. ~Oprah Winfrey",
"Spread love everywhere you go. Let no one ever come to you without leaving happier. ~Mother Teresa",
];

    generateFunction = () => {
        let randomIndex = Math.floor(Math.random() * quotes.length);
        let randomQuote = quotes[randomIndex];
        document.getElementById("quotes").textContent = randomQuote;
    };

