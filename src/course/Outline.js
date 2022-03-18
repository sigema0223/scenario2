import "./Course.css";
import ChapterContext from "./ChapterContext.js";
import { useContext } from "react";
import { getCourseTitle, chapters } from "./chapters";
import React from "react";
import { Link } from "react-router-dom";

function selectChapter(course, chapter, isQuiz, setCurChapter) {
  console.log("what: ", isQuiz);
  setCurChapter([course, chapter, isQuiz]);
}

function Outline() {
  const { curChapter, setCurChapter } = useContext(ChapterContext);
  const [course, chapter_idx, _] = curChapter;
  const courseTitle = getCourseTitle(course);

  return (
    <div className="Outline">
      <p className="CourseTitle">{courseTitle}</p>
      <ul>
        {chapters
          .filter((c) => c.course == course)
          .map((el, i) => {
            return (
              <li key={el.chapter}>
                {i == chapter_idx ? (
                  <p className="ChapterText CurrentChapter">{el.chapter}</p>
                ) : (
                  <p
                    onClick={() =>
                      selectChapter(course, i, el.isQuiz, setCurChapter)
                    }
                    className="ChapterText"
                  >
                    {el.chapter}
                  </p>
                )}
              </li>
            );
          })}
      </ul>
      <Link to="/">
        <p className="ChapterText Bottom">Home</p>
      </Link>
    </div>
  );
}

export default Outline;
