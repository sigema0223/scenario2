import "./Learn.css";
import ChapterContext from "./ChapterContext.js";
import { useContext, useEffect, useState } from "react";
import { getContents } from "./contents";
import Quiz from "./Quiz.js";

function Learn() {
  const context = useContext(ChapterContext);
  const [course, chapter_index, isQuiz] = context.curChapter;

  return (
    <ChapterContext.Provider
      value={{
        ...context,
      }}
    >
      <div
        className="Learn"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isQuiz ? <Quiz /> : Contents(course, chapter_index)}
      </div>
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

export default Learn;
