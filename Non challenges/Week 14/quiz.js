// Create the quiz object
var quiz = {
    questions: [],
    unsortedQuestions: [],
    questionSequence: [0,1,2,3,4,5],
    questionID: 0,
    QuestionNumber: 0,
    answers: [],
    unsortedAnswers
};
 
// randomize the questionSequence array
for(let i = quiz.questionSequence.length -1; i > -1; i--){
    const j = Math.floor(Math.random() * i)
    const temp = quiz.questionSequence[i]
    quiz.questionSequence[i] = quiz.questionSequence[j]
    quiz.questionSequence[j] = temp

}


// Questions order before it is given a random order
quiz.unsortedquestions[0]="What is the name for the Jewish New Year?";
quiz.unsortedquestions[1]="How many blue stripes are there on the U.S flag?";
quiz.unsortedquestions[2]="Which one of these characters is not friends with Harry Potter?";
quiz.unsortedquestions[3]="What is the rarest blood type?";
quiz.unsortedquestions[4]="What was the name of the band Lionel Richie was a part of?";
quiz.unsortedquestions[5]="Which animal does not appear in the Chinese zodiac?";

var seq = quiz.questionSequence;

// Questions with random sequence
quiz.questions[seq[0]]="What is the name for the Jewish New Year?";
quiz.questions[seq[1]]="How many blue stripes are there on the U.S flag?";
quiz.questions[seq[2]]="Which one of these characters is not friends with Harry Potter?";
quiz.questions[seq[3]]="What is the rarest blood type?";
quiz.questions[seq[4]]="What was the name of the band Lionel Richie was a part of?";
quiz.questions[seq[5]]="Which animal does not appear in the Chinese zodiac?";

quiz.questionID = quiz.unsortedQuestions.indexOf(quiz)


QuestionID = quiz.unsortedQuestions.indexOf(quiz.questions[0]);

document.getElementById("questionText").innerHTML = quiz.questions[0] + "Question ID: " quiz.questionID;





