function getCourseTitle(course) {
  switch (course) {
    case "syllogism":
      return "Intro to syllogism";
    case "negation":
      return "Practice Negation with AI";
  }
}

const chapters = [
  {
    course: "syllogism",
    chapter: "What's syllogism",
    isQuiz: false,
  },
  {
    course: "syllogism",
    chapter: "Practice syllogism",
    isQuiz: true,
  },
  {
    course: "negation",
    chapter: "What's negation?",
    isQuiz: false,
  },
  {
    course: "negation",
    chapter: "Practice negation",
    isQuiz: true,
  },
];

export { getCourseTitle, chapters };
