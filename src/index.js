const adjs = require('corpora/data/words/adjs.json').adjs,
    fs = require("fs"),
    shuffle = require('knuth-shuffle').knuthShuffle,
    getWords = () => { 
      return shuffle(adjs).slice(0,20)
    },
    getTitles = () => {
      return getWords().map((word)=>{
        return `JavaScript: The ${capitalizeWord(word)} Parts`;
      }); 
    },
    capitalizeWord = (word) => { 
      return word.split("-").map((word)=>{
        return word.slice(0,1).toUpperCase()+word.slice(1);
      }).join("-");
    },
    logTitles = (titles) => {
      titles.map((title)=>{
        console.log(title);
      });
    },
    writeTitles = (titles) => {
      filename = "./"+Date.now()+".txt";
      titles.map((title)=>{
        fs.appendFileSync(filename, title + "\n");
      });
    };


const titles = getTitles();
logTitles(titles);
writeTitles(titles);