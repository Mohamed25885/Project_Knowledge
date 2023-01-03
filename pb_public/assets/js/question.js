//this would be the object shape for storing the questions
//you can change the questions to your own taste or even add more questions..
const questions = [

];

let shuffledQuestions = []; //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() {
  //function to shuffle and push 10 questions to shuffledQuestions array
  //app would be deDo you have symptomng with 10questions per session
  while (shuffledQuestions.length <= (questions.length - 1)) {
    const random = questions[Math.floor(Math.random() * questions.length)];
    if (!shuffledQuestions.includes(random)) {
      shuffledQuestions.push(random);
    }
  }
}

let questionNumber = 1; //holds the current question number
//let playerScore = 0  //holds the player score
// let wrongAttempt = 0; //amount of wrong answers picked by player
let indexNumber = 0; //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
  handleQuestions();
  const currentQuestion = shuffledQuestions[index];
  document.getElementById("question-number").innerHTML = questionNumber;
  //document.getElementById("player-score").innerHTML = playerScore
  document.getElementById("display-question").innerHTML =
    currentQuestion.question;
  document.getElementById("option-one-label").innerHTML =
    currentQuestion.optionA;
  document.getElementById("option-two-label").innerHTML =
    currentQuestion.optionB;
  // document.getElementById("option-three-label").innerHTML =
  //   currentQuestion.optionC;
  // document.getElementById("option-four-label").innerHTML =
  //   currentQuestion.optionD;
}
let trueSymptoms = [];
function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber]; //gets current Question
  if (currentQuestion == null) {
    return;
  }
  const currentQuestionAnswer = currentQuestion.correctOption; //gets current Question's answer
  const options = document.querySelectorAll(`[name='option']:checked`); //gets all elements in dom with name of 'option' (in this the radio inputs)
  let correctOption = null;
  options.forEach((option) => {
    if (option.value === "optionA") {
      //get's correct's radio input with correct answer
      trueSymptoms.push(currentQuestion.id)
    }
  });
  //checking to make sure a radio input has been checked or an option being chosen
  if (
    options[0].checked === false &&
    options[1].checked === false &&
    options[2].checked === false &&
    options[3].checked == false
  ) {
    document.getElementById("option-modal").style.display = "flex";
  }

  //checking if checked radio button is same as answer
  options.forEach((option) => {
    if (option.checked === true && option.value === currentQuestionAnswer) {
      document.getElementById(correctOption).style.backgroundColor = "green";
      //playerScore++ //adding to player's score
      indexNumber++; //adding 1 to index so has to display next question..
      //set to delay question number till when next question loads
      setTimeout(() => {
        questionNumber++;
      }, 1000);
    } else if (option.checked && option.value !== currentQuestionAnswer) {
      const wrongLabelId = option.labels[0].id;
      // document.getElementById(wrongLabelId).style.backgroundColor = "red";
      // document.getElementById(correctOption).style.backgroundColor = "green";
      // wrongAttempt++; //adds 1 to wrong attempts
      indexNumber++;
      //set to delay question number till when next question loads
      setTimeout(() => {
        questionNumber++;
      }, 1000);
    }
  });
}

//called when the next button is called
function handleNextQuestion() {
  checkForAnswer(); //check if player picked right or wrong option
  unCheckRadioButtons();
  //delays next question displaying for a second just for some effects so questions don't rush in on player
  setTimeout(() => {
    if (indexNumber <= shuffledQuestions.length - 1) {
      //displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
      NextQuestion(indexNumber);
    } else {
      handleEndGame(); //ends game if index number greater than 9 meaning we're already at the 10th question
    }
    resetOptionBackground();
  }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
  const options = document.getElementsByName("option");
  options.forEach((option) => {
    document.getElementById(option.labels[0].id).style.backgroundColor = "";
  });
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
    options[i].checked = false;
  }
}

// function for when all questions being answered
async function handleEndGame() {
  let query = "(";
  for (let i = 0; i < trueSymptoms.length; i++) {
    query += `symptoms~'${trueSymptoms[i]}'`;
    if ((i + 1) === trueSymptoms.length) {
      break;
    }
    query += "&&";
  }
  query += ")";
  const result = await pb.collection('disease').getFullList(500, {
    sort: '-created',
    filter: query
  });
  if (!result[0]) {
    return;
  }
  alert(result[0].disease);
  document.querySelector(`.grade-details`).innerHTML = `<p class='text-dark'>${result[0].disease}</p>`;
  //$('#score-modal').modal('toggle');
}

//closes score modal, resets game and reshuffles questions
// function closeScoreModal() {
//   questionNumber = 1;
//   playerScore = 0;
//   wrongAttempt = 0;
//   indexNumber = 0;
//   shuffledQuestions = [];
//   NextQuestion(indexNumber);
//   document.getElementById("score-modal").style.display = "none";
// }

//function to close warning modal
function closeOptionModal() {
  document.getElementById("option-modal").style.display = "none";
}


function COVID19() {
  if (symptoms) {

  }
  if (numberHands > 1) {
    wonOrLost(h2.cards, h2);
  }
  if (numberHands > 2) {
    wonOrLost(h3.cards, h3);
  }
  playAgainOption();
}

function initialize_questions() {

  for (const symptom of SYMPTOMS) {
    questions.push({
      question: `Do you have ${symptom.name}?`,
      id: symptom.id,
      optionA: "YES",
      optionB: "NO",
    });
  }

  document.getElementById("question-total").innerHTML = SYMPTOMS.length;

  NextQuestion(0);

}