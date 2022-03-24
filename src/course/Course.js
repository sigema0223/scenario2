import Split from "react-split";
import ChapterContext from "./ChapterContext.js";
import { useState, useEffect } from "react";
import Outline from "./Outline";
import Quiz from "./Quiz.js";
import { getContents } from "./contents";

import "./Course.css";
import "./Learn.css";

function Course(props) {
  const { pathname } = props.location;
  const pathnames = pathname.split("/");
  const course = pathnames[pathnames.length - 1];

  const [curChapter, setCurChapter] = useState([course, 0, false]); // course, chapter index, isQuiz
  const [_, chapter_index, isQuiz] = curChapter;
  const [quizes, setQuizes] = useState([]);
  const [numRight, setNumRight] = useState(0); // number of questions the user got right
  const [numAnswered, setNumAnswered] = useState(0); // number of questions answered
  const [quizIndex, setQuizIndex] = useState(0);
  const [isQuizLoaded, setIsQuizLoaded] = useState(false);

  function loadQuizzes(course) {
    // generate a quiz
    console.log("new quizzes loaded");
    const quiz_path = "http://localhost:3000/questions/" + course + ".json";
    fetch(quiz_path, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setQuizes(myJson);
      });

    setIsQuizLoaded(true);
  }

  useEffect(() => {
    loadQuizzes(course);
  }, []);

  return (
    <ChapterContext.Provider
      value={{
        curChapter,
        setCurChapter,
        quizes,
        quizIndex,
        setQuizIndex,
        isQuizLoaded,
        numRight,
        setNumRight,
        numAnswered,
        setNumAnswered,
      }}
    >
      <Split sizes={[25, 75]} direction="horizontal" className="split-flex">
        <Outline course={course} />
        <div
          className="Learn"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isQuiz ? (
            <Quiz loadQuizzes={loadQuizzes} course={course} />
          ) : (
            Contents(course, chapter_index)
          )}
        </div>
      </Split>
    </ChapterContext.Provider>
  );
}

function Contents(course, chapter_index) {
  const contents = getContents(course, chapter_index);
  return (
    <div className="Container">
      <ul>
        {contents.map((content) => {
          return (
            <li>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Course;
