//Demonstration
const robots = [
  { name: "Johnny 5", modes: 5, isActivated: false },
  { name: "C3PO", modes: 3, isActivated: false },
  { name: "Sonny", modes: 2.5, isActivated: false },
  { name: "Baymax", modes: 1.5, isActivated: false },
];

const activatedRobots = robots.map((robot) => {
  return Object.assign({}, robot, {modes: robot.modes * 2, isActivated: true});
});

//console.log(activatedRobots);

///////// LAB //////////
const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//how to go on about this? Put down your thoughts here
//map over each element; each element represents a sentence
//break down each sentence into words, separated by a space, and save to an array
//map over the second array and capitalise the first character of each word
//join the words back
//repeat for each element
//return the modified array
const titleCased = () => {
  const titleCasedTutorials = tutorials.map(sentence => {
    const wordArray = sentence.split(" ");
    const updatedWordArray = wordArray.map(word => word[0].toUpperCase() + word.slice(1));
    const newSentence = updatedWordArray.join(" ");
    //console.log(newSentence);
    return newSentence;
  });
  return titleCasedTutorials;
}

console.log(titleCased());