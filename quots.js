let quotes = ["Vær den forandring, du ønsker at se i verden.", 
                "To be, or not to be, that is the question.",
                "I think, therefore I am.",
                "The only thing we have to fear is fear itself.",
                "Happiness is not something ready-made. It comes from your own actions.",
                "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.",
                "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                "The future belongs to those who believe in the beauty of their dreams.",
                "Injustice anywhere is a threat to justice everywhere.",
                "Life is what happens when you're busy making other plans."];

let quotesElmt = document.querySelector("blockquote");

console.log(quotes)

let randomIndex = Math.floor(Math.random() * quotes.length);    //generer et index som vælger et random quote

quotes.forEach(function(quote, index) {         //'(quote, index) =>'  er samme som 'function(quote, index)'
    if (index === randomIndex) {
        quotesElmt.innerHTML = quote; // Opdatér teksten med det tilfældige citat
    }
});

//Det er ikke optimalt eller nødvendigt at bruge loop til dette, men jeg forstår som om det er meningen øvelsen skal laves med loop/løkke. 


/* 
Her er 10 kendte citater:

"Vær den forandring, du ønsker at se i verden."
– Mahatma Gandhi

"To be, or not to be, that is the question."
– William Shakespeare

"I think, therefore I am."
– René Descartes

"The only thing we have to fear is fear itself."
– Franklin D. Roosevelt

"Happiness is not something ready-made. It comes from your own actions."
– Dalai Lama

"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world."
– Albert Einstein

"Success is not final, failure is not fatal: it is the courage to continue that counts."
– Winston Churchill

"The future belongs to those who believe in the beauty of their dreams."
– Eleanor Roosevelt

"Injustice anywhere is a threat to justice everywhere."
– Martin Luther King Jr.

"Life is what happens when you're busy making other plans."
– John Lennon
*/