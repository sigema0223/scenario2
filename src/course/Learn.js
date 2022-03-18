import "./Learn.css";
import ChapterContext from "./ChapterContext.js";
import { useContext } from "react";
import { getContents } from "./contents";

function Learn(props) {
  const { curChapter } = useContext(ChapterContext);
  const [course, chapter_index, isQuiz] = curChapter;

  return (
    <div
      className="Learn"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isQuiz ? Quiz(props.quiz) : Contents(course, chapter_index)}
    </div>
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

function Quiz(quiz) {
  const { question, choices } = quiz;

  return (
    <div className="Container">
      <p className="Question">Q. {question}</p>
      <ul>
        {choices.map((choice, i) => {
          return (
            <li key={i}>
              <button
                onClick={() => console.log(choice)}
                className="ChoiceButton"
              >
                <p className="ChoiceText">
                  {i + 1}. {choice}
                </p>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Learn;
