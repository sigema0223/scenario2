import Split from "react-split";
import "./Course.css";
import ChapterContext from "./ChapterContext.js";
import { useState } from "react";
import Outline from "./Outline";
import Learn from "./Learn";
import quizes from "./quizes";
import "typeface-anonymous-pro";

function Course(props) {
  const { pathname } = props.location;
  const pathnames = pathname.split("/");
  const course = pathnames[pathnames.length - 1];

  const [curChapter, setCurChapter] = useState([course, 0, false]); // course, chapter index, isQuiz

  const quiz = quizes[2];

  return (
    <ChapterContext.Provider value={{ curChapter, setCurChapter }}>
      <Split sizes={[25, 75]} direction="horizontal" className="split-flex">
        <Outline course={course} />
        <Learn quiz={quiz} />
      </Split>
    </ChapterContext.Provider>
  );
}

export default Course;
