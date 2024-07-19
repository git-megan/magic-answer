// strings for the output
let answerStrings = {
  yes: "Yes",
  yesSources: "My sources say yes",
  noSources: "My sources say no",
  yesFuture: "It will be so",
  noPresent: "At the moment, no",
  wait: "The answer will reveal itself",
  friend: "Ask a friend",
  gutFeeling: "Trust your gut",
  always: "It has always been yes",
  never: "When pigs fly...",
  likely: "Most likely",
  positive: "Outlook good",
  later: "Ask again later",
  askAgain: "Concentrate and ask again",
  dontCount: "Don't count on it",
  doubtful: "Very doubtful",
  rely: "You may rely on it",
  certain: "It is certain",
  noDoubt: "Without a doubt",
  luck: "With a bit of luck, yes",
  known: "It is known",
};

// access to the magic 8 ball
let ball = document.getElementById("ball");

// access to button and output area
let shakeButton = document.getElementById("shake-button");
let answerOutput = document.getElementById("answer-output");

// helper functions for getting 8 Ball answers
function getRandomIndex(totalIndices) {
  return Math.floor(Math.random() * totalIndices);
}

function getAnswer() {
  let answerKeys = Object.keys(answerStrings);
  let answerKey = answerKeys[getRandomIndex(answerKeys.length)];
  return answerStrings[answerKey];
}

// shake magic 8 ball
function shakeBall() {
  // clear answer text
  answerOutput.textContent = "";

  // add the shake animation
  ball.classList.add("shake");

  // remove shake animation after 1s of shaking
  setTimeout(function () {
    // stop shake animation
    ball.classList.remove("shake");
    // update to show new answer
    answerOutput.textContent = getAnswer();
  }, 1000);
}

// listen for a button click to shake the Magic 8 Ball
shakeButton.addEventListener("click", shakeBall);
