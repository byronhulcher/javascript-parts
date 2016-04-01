var adjs = require('corpora/data/words/adjs.json').adjs,
    fs = require("fs"),
    shuffle = require('knuth-shuffle').knuthShuffle,
    getWords = () => { return shuffle(adjs).slice(0,20)},
    getTitles = () => {return getWords().map((word)=>{return `JavaScript: The ${word.slice(0,1).toUpperCase()}${word.slice(1)} Parts` }); },
    logTitles = () => {getTitles().map((title)=>{console.log(title)});},
    writeTitles = () => {filename = "./"+Date.now()+".txt"; getTitles().map((title)=>{fs.appendFileSync(filename, title + "\n");})}


writeTitles();