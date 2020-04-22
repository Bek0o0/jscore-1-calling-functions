let answer;

function shakeBall() {
  console.log("The ball has shaken!");
  answer = Math.floor(Math.random() * 17);
  console.log(answer);
  if (answer === 0) {
    return " It is certain";
  }
  if (answer === 1) {
    return "Without a doubt";
  }
  if (answer === 2) {
    return "Yes - definitely";
  }
  if (answer === 3) {
    return "You may rely on it";
  }
  //very positive
  if (answer === 4) {
    return " As I see it, yes";
  }
  if (answer === 5) {
    return "Most likely";
  }
  if (answer === 6) {
    return "Yes";
  }
  if (answer === 7) {
    return "Signs point to yes";
  }

  if (answer === 8) {
    return "Outlook good";
  }

  //Negative
  if (answer === 9) {
    return " Reply hazy, try again";
  }
  if (answer === 10) {
    return "Ask again later";
  }
  if (answer === 11) {
    return "Better not tell you nows";
  }
  if (answer === 12) {
    return "Cannot predict now";
  }

  if (answer === 13) {
    return "Concentrate and ask again";
  }

  //Very negative
  if (answer === 14) {
    return " Don't count on it";
  }
  if (answer === 15) {
    return "My reply is no";
  }
  if (answer === 16) {
    return "My sources say no";
  }
  if (answer === 17) {
    return "Outlook not so good";
  }

  if (answer === 18) {
    return "Very doubtful";
  }
}

function checkAnswer() {
  //Very positive
  if (answer === 0 || answer === 1 || answer === 2 || answer === 3) {
    return "Very positive";
  }

  //Positive
  if (
    answer === 4 ||
    answer === 5 ||
    answer === 6 ||
    answer === 7 ||
    answer === 8
  ) {
    return "Positive";
  }

  //Negative
  if (
    answer === 9 ||
    answer === 10 ||
    answer === 11 ||
    answer === 12 ||
    answer === 13
  ) {
    return "Negative";
  }
  // very Negative
  if (
    answer === 14 ||
    answer === 15 ||
    answer === 16 ||
    answer === 17 ||
    answer === 18
  ) {
    return " Very negative";
  }
}

console.log(shakeBall());
console.log(checkAnswer());
