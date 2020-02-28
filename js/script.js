/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * Creates the quotes array
 * Creates 5 objects inside of the array
***/
var quotes = [
  {
      quote: "Nothing is original. Steal from anywhere that resonates with inspiration or fuels your imagination.",
      source: "Jim Jarmusch",
      citation: "MovieMaker Magazine #53",
      year: "Winter, January 22, 2004"   
  },
  {
      quote: "And one day we must ask the question, ‘Why are there forty million poor people in America? And when you begin to ask that question, you are raising questions about the economic system, about a broader distribution of wealth.",
      source: "Martin Luther King Jr",
      citation: "Speech to Southern Christian Leadership Conference Atlanta, Georgia",
      year: "August 16, 1967"   
  },
  {
      quote: "I maintain that Truth is a pathless land, and you cannot approach it by any path whatsoever, by any religion, by any sect.",
      source: "Jiddu Krishnamurti",
      citation: "Truth is a Pathless Land",
      year: "1929"   
  },
  {
      quote: "Trees are poems the earth writes upon the sky, We fell them down and turn them into paper, That we may record our emptiness.",
      source: "Kahlil Gibran",
      citation: "The Prophet",
      year: "1923"   
  },
  {
      quote: "We seldom realize, for example that our most private thoughts and emotions are not actually our own. For we think in terms of languages and images which we did not invent, but which were given to us by our society.",
      source: "Alan W. Watts",
      citation: "The Book on the Taboo Against Knowing Who You Are",
      year: "1966"   
  },
  {
      quote: "I have found that it is the small everyday deed of ordinary folks that keep the darkness at bay. Small acts of kindness and love.",
      source: "Gandalf",
      citation: "J. R. R. Tolkein ~ The Hobbit",
      year: "September 21, 1937"   
  }
];


// Creates empty variable to hold the output html
let html = "";

/***
 * Creates getRandomQuote function
 * Generates a random number
 * Uses the random number to access a random object inside of the quotes 
 * array and return it.
 ***/
function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
}


/***
 * Creates printQuote function
 * Stores the returned object from the getRandomQuote variable currentQuote
 * Creates a concatenated html from the value of quote and source keys
 * Uses if statements to check if there are citation and year values
 * If so adds concatenates them into the html variable
 * Adds a closing </p> tag
 * Sends the html variable to the provided code snippet to be displayed
 * in the DIV with the id of "quote-box"
***/
function printQuote() {
    let currentQuote = getRandomQuote();
    html = '<p class="quote">' + currentQuote["quote"] + "</p>";
    html += '<p class="source">' + currentQuote["source"];
    if (currentQuote.citation !== "") {
        html += '<span class="citation">' + currentQuote["citation"] + '</span>';
    }
    if (currentQuote.year !== "") {
        html += '<span class="year">' + currentQuote["year"] + '</span>';
    }
    html += '</p>';
    document.getElementById('quote-box').innerHTML = html;
}

// Stores the returned value of the printQuote function in html variable
//getRandomQuote();
html = printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);