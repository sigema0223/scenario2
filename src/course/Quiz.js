import ChapterContext from "./ChapterContext.js";
import { useState, useContext, useEffect } from "react";
import "./Learn.css";
import "./Course.css";

function ChoiceButton({
  index,
  choice,
  answerIndex,
  userAnswer,
  setUserAnswer,
  numRight,
  setNumRight,
  numAnswered,
  setNumAnswered,
}) {
  let postfix = "";

  if (userAnswer != -1 && index == answerIndex) {
    // user got it right
    postfix = "Right";
  } else if (userAnswer != answerIndex && index == userAnswer) {
    // user got it wrong
    postfix = "Wrong";
  }

  return (
    <button
      onClick={() => {
        checkAnswer(
          index,
          answerIndex,
          userAnswer,
          setUserAnswer,
          numRight,
          setNumRight,
          numAnswered,
          setNumAnswered
        );
      }}
      className={"ChoiceButton " + postfix}
    >
      <p className="ChoiceText">
        {index + 1}. {choice}
      </p>
    </button>
  );
}

function moveToNextQuestion({ quizIndex, setQuizIndex, setUserAnswer }) {
  setQuizIndex(quizIndex + 1);
  setUserAnswer(-1); // reset
}

function checkAnswer(
  choiceIndex,
  answerIndex,
  userAnswer,
  setUserAnswer,
  numRight,
  setNumRight,
  numAnswered,
  setNumAnswered
) {
  if (userAnswer == -1) {
    setUserAnswer(choiceIndex);
    setNumAnswered(numAnswered + 1);

    if (choiceIndex == answerIndex) {
      // user got it right
      setNumRight(numRight + 1);
    }
  }
}

function Quiz({ loadQuizzes, course }) {
  // manage the answer
  const [userAnswer, setUserAnswer] = useState(-1);

  // load a question
  const {
    quizes,
    quizIndex,
    setQuizIndex,
    isQuizLoaded,
    numRight,
    setNumRight,
    numAnswered,
    setNumAnswered,
  } = useContext(ChapterContext);

  if (!isQuizLoaded) {
    return <></>;
  }

  let quiz = quizes[quizIndex];
  const { question, answerIndex, wrongAnswers } = quiz;
  const choices = wrongAnswers;

  return (
    <div className="Container">
      <p>
        <span className="NumRight">{numRight}</span>
        <span> / {numAnswered}</span>
      </p>
      <p className="Question">Q. {question}</p>
      <ul>
        {choices.map((choice, i) => {
          return (
            <li key={i}>
              <ChoiceButton
                index={i}
                choice={choice}
                numRight={numRight}
                setNumRight={setNumRight}
                numAnswered={numAnswered}
                setNumAnswered={setNumAnswered}
                answerIndex={answerIndex}
                userAnswer={userAnswer}
                setUserAnswer={setUserAnswer}
              />
            </li>
          );
        })}
        {userAnswer !== -1 && (
          <button
            className="NextButton Bottom"
            onClick={() => {
              moveToNextQuestion({ quizIndex, setQuizIndex, setUserAnswer });
              if (numAnswered % 10 == 3) {
                loadQuizzes(course);
              }
            }}
          >
            <p>Next</p>
          </button>
        )}
      </ul>
    </div>
  );
}

export default Quiz;
