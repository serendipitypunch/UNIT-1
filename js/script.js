/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** QUOTES ARRAY OF OBJECTS
 * Creates the quotes array
 * Creates 5 objects inside of the array
***/
var quotes = [
  {
      quote: "Nothing is original. Steal from anywhere that resonates with inspiration or fuels your imagination.",
      source: "Jim Jarmusch",
      citation: "MovieMaker Magazine #53",
      year: "Winter, January 22, 2004",
      tags: "Inspirational"   
  },
  {
      quote: "The ability to observe without evaluating is the highest form of intelligence.",
      source: "Jiddu Krishnamurti",
      citation: "Think on These Things",
      year: "October 11th 1989",
      tags: "Spiritual"   
  },
  {
      quote: "“Truth is in everyone; it is not far, it is not near; it is eternally there.",
      source: "Jiddu Krishnamurti",
      citation: "Total Freedom: The Essential Krishnamurti",
      year: "1996",
      tags: "Spiritual" 
  },
  {
      quote: "Trees are poems the earth writes upon the sky, We fell them down and turn them into paper, That we may record our emptiness.",
      source: "Kahlil Gibran",
      citation: "The Prophet",
      year: "1923",
      tags: "Spiritual, Poetry"    
  },
  {
      quote: 'Only words and conventions can isolate us from the entirely undefinable something which is everything.',
      source: "Alan W. Watts",
      citation: "The Wisdom of Insecurity",
      year: "September 12th 1968",
      tags: ""   
  },
  {
    quote: 'Those who know don’t talk. Those who talk don’t know.',
    source: "Lao Tzu",
    citation: "Tao Te Ching",
    year: "",
    tags: ""   
  },
  {
    quote: 'Meditation is the discovery that the point of life is always arrived at in the immediate moment.',
    source: "Alan W. Watts",
    citation: "",
    year: "",
    tags: ""   
},
  {
      quote: "I have found that it is the small everyday deed of ordinary folks that keep the darkness at bay. Small acts of kindness and love.",
      source: "Gandalf",
      citation: "J. R. R. Tolkein ~ The Hobbit",
      year: "September 21, 1937",
      tags: "Fantasy Literature"   
  }
];

// VARIABLES
// Creates empty variable to hold the output html
let html = "";
let rgbColor;
const rgbNum = 256;

/*** RANDOM NUMBER GENERATOR
 * A function that generates a random number from given argument
 ***/
function randomNumGen(num){
    return Math.floor(Math.random() * num );
}

/*** RANDOM COLOR GENERATOR
 * A function that generates a random rgb color and returns it
***/
function getRandomColor() {
    let color = 'rgb(';
    color += randomNumGen(rgbNum) + ',';
    color += randomNumGen(rgbNum) + ',';
    color += randomNumGen(rgbNum) + ')';
    return color;
  }

/*** RANDOM QUOTE FUNCTION
 * Creates getRandomQuote function
 * Generates a random number
 * Uses the random number to access a random object inside of the quotes 
 * array and return it.
 ***/
function getRandomQuote() {
    let randomNumber = randomNumGen(quotes.length);
    return quotes[randomNumber];
}

/*** PRINT QUOTE FUNCTION
 * Creates printQuote function
 * Stores the returned object from the getRandomQuote in variable currentQuote
 * Stores the returned value from getRandomNumber in variable currentColor
 * Creates a concatenated html from the value of quote and source keys
 * Uses if statements to check if there are citation, year and tag values
 * If so concatenates them into the html variable
 * Adds a closing </p> tag
 * Applies value of currentColor variable to document body background property
 * Sends the html variable to the provided code snippet to be displayed
 * in the DIV with the id of "quote-box"
***/
function printQuote() {
    let currentQuote = getRandomQuote();
    let currentColor = getRandomColor();
    html = `<p class="quote"> ${currentQuote.quote} "</p>`;
    html += `<p class="source"> ${currentQuote.source}`;
    if (currentQuote.citation !== "") {
        html += `<span class="citation"> ${currentQuote.citation} </span>`;
    }
    if (currentQuote.year !== "") {
        html += '<span class="year">' + currentQuote["year"] + '</span>';
    }
    if (currentQuote.tags !== "") {
        html += `<span class="tags"> <br> ${currentQuote.tags} </span>`;
    }
    html += '</p>';
    document.body.style.backgroundColor = currentColor;
    document.getElementById('quote-box').innerHTML = html;
}


// Stores value of the printQuote function in html variable
html = printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);

/***
 * Calls the printQuote function every 7 seconds
***/
setInterval(printQuote, 7000);