const resultsArray = [];
const quizArray = [];
const answer1 = document.querySelector("#answer1-label");
const answer2 = document.querySelector("#answer2-label");
const answer3 = document.querySelector("#answer3-label");
const answer4 = document.querySelector("#answer4-label");
const submit = document.querySelector("#submit");
const form = document.querySelector("#form");
const testButton = document.querySelector("#testButton");
const content = document.querySelector("#content-container");

const startQuiz = (arr, quiz) => {
  for (let i = 0; i < 20; i++) {
    quiz.push(...arr.splice([Math.floor(Math.random() * arr.length)], 1));
  }
  console.log(quiz);
  return quiz;
};

const displayQuiz = () => {
  testButton.style.display = "none";
  content.style.display = "flex";
  startQuiz(questionsArray, quizArray);
};

testButton.addEventListener("click", displayQuiz);

class Questions {
  constructor(question, one, two, three, four, answer) {
    this.question = question;
    this.one = one;
    this.two = two;
    this.three = three;
    this.four = four;
    this.answer = answer;
  }
  returnAnswer() {
    return this.answer;
  }
  returnCorrect(x) {
    if (x === this.answer) {
      return resultsArray.push(1);
    } else {
      return resultsArray.push(0);
    }
  }
  returnRandomOrder() {
    const questionArr = [this.one, this.two, this.three, this.four];
    const filterArr = questionArr.filter((x) => x !== "");
    const randomArr = [];
    for (let i = 0; i < 4; i++) {
      randomArr.push(
        ...filterArr.splice([Math.floor(Math.random() * filterArr.length)], 1)
      );
    }

    console.log(quizArray);
    return randomArr;
  }
  formDisplay() {
    console.log(this.returnRandomOrder());
    for (let i of this.returnRandomOrder()) {
      console.log(i);
    }
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    console.log(radio);
    /* create a for loop that creates the label, div, and radio input with unique ids */
  }
}

const one = new Questions(
  "What did Teal'c say in response to Daniel asking, 'Their world is in flames and we're offering gasoline. How does that help?'",
  "Indeed",
  "That is disconcerning",
  "We had hope for better news",
  "We are in fact offering water",
  this.four
);
const two = new Questions(
  "What happened in after Carter blew up a sun?",
  "They were destroyed",
  "Carter and O'Neil make out",
  "The team is stranded",
  "Apothis destroys them",
  this.three
);
const three = new Questions(
  "Teal'c went to see a play by himself. What did he go see?",
  "Street Car Named Desire",
  "Vagina Monologues",
  "Climbing Mt.Rushmore",
  "Sleepless Nights",
  this.two
);
const four = new Questions(
  "When O'Neil tells Hammond to speed dial 1 on the red phone, what does Hammond say?",
  "Get the Janitor?",
  "My grandchildren?",
  "It's not time for pizza",
  "Yeah, I called earlier, he's in France",
  this.two
);
const five = new Questions(
  "Which team members had Asgard ships named after them in SG1?",
  "Carter and O'Neil",
  "Jackson and O'Neil",
  "Teal'c and Jackson",
  "Teal'c and Carter",
  this.two
);
const six = new Questions(
  "What alien race did SG1 eliminate from the series?",
  "Goa'uld",
  "Asgards",
  "Fifth Race",
  "None",
  this.four
);
const seven = new Questions(
  "Does the order of the Stargate address inputs matter?",
  "Yes",
  "No",
  "",
  "",
  this.one
);
const eight = new Questions(
  "Where can you watch Stargate content?",
  "Netflix",
  "Hulu",
  "Amazon",
  "Freebo",
  this.three
);
const nine = new Questions(
  "Can ZPMs be carried thru the Stargate?",
  "Yes",
  "No",
  "",
  "",
  this.one
);
const ten = new Questions(
  "Who is the Supreme Commander of the Asgards?",
  "Apollo",
  "Cupid",
  "Thor",
  "Zeus",
  this.three
);
const eleven = new Questions(
  "What race did Shepard wake?",
  "The Geni",
  "The Wraith",
  "The Asgards",
  "No one",
  this.two
);
const twelve = new Questions(
  'What was the name of the Stargate station the Taur"i" setup in deep space?',
  "The Carter",
  "The Prometheus",
  "The Hammond",
  "The Midway",
  this.four
);
const thirteen = new Questions(
  "What state was General Hammond from?",
  "Idaho",
  "Georgia",
  "Oklahoma",
  "Texas",
  this.four
);
const fourteen = new Questions(
  "What was the name of the Goa'uld handheld weapon the Tau'ri used?",
  "The Tripper",
  "The Zat Gun",
  "The MK46",
  "The Staff",
  this.two
);
const fifteen = new Questions(
  "What was the name of Teal'cs first prime?",
  "Bra'tac",
  "Apothis",
  "Abraham",
  "Karkoa",
  this.one
);
const sixteen = new Questions(
  "Who went back in time to stop Atlantis from sinking upon coming through the gate?",
  "McKay",
  "Shepard",
  "Weir",
  "Carter",
  this.three
);
const seventeen = new Questions(
  "All hallowed are the...?",
  "Tau'ri",
  "Ori",
  "Goa'uld",
  "O'Neill's",
  this.two
);
const eighteen = new Questions(
  "Who was Daniel Jackson's apprentice?",
  "Harris",
  "Rothman",
  "Grover",
  "Diggs",
  this.two
);
const nineteen = new Questions(
  "The Ancients created the Wraith",
  "True",
  "False",
  "",
  "",
  this.one
);
const twenty = new Questions(
  "Who played General O'Neil?",
  "Kurt Russell",
  "Michael Shanks",
  "Richard Dean Anderson",
  "Jason Mamoa",
  this.three
);
const twentyOne = new Questions(
  "Who is the last Goa'uld God left at the end of SG1?",
  "Apothis",
  "Baal",
  "Osiris",
  "Anubis",
  this.two
);
const twentyTwo = new Questions(
  "What material did the Tau'ri need more of all the time?",
  "Gold",
  "Naquada",
  "Snakes",
  "Minerals",
  this.two
);
const twentyThree = new Questions(
  "Ineed...was who's catchphrase?",
  "Carter",
  "Jackson",
  "O'Neil",
  "Teal'c",
  this.four
);
const twentyFour = new Questions(
  "What was the name Shepard gave to the wraith that helped him escape?",
  "Michael",
  "Todd",
  "Henry",
  "John",
  this.two
);

one.formDisplay();

const questionsArray = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
  fifteen,
  sixteen,
  seventeen,
  eighteen,
  nineteen,
  twenty,
  twentyOne,
  twentyTwo,
  twentyThree,
  twentyFour,
];

answer1.textContent = "hi";
answer2.textContent = "you";
answer3.textContent = "h";
answer4.textContent = "havi";

submit.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e);
});
