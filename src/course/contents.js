function getContents(course, chapter_index) {
  return contents
    .filter((content) => content.course == course)
    [chapter_index].contents.split("\n");
}

const contents = [
  {
    course: "negation",
    contents:
      "Definition of negation is the action or logical operation of negating or making negative. \n \
      \n \
      For example, let initial statement as “I know where the box is.” \n \
      Negation of this statement would be “I don’t know where the box is.” \n ",
  },
  {
    course: "syllogism",
    contents:
      "Definition of syllogism is a logical argument that applies deductive reasoning to arrive at a conclusion based on two propositions that are assumed to be true. \n \
      \n \
      The following sentences would be the most well-known example of syllogism. \n \
      All men are mortal. \n \
      Socrates is a man. \n \
      Therefore, Socrates is mortal.",
  },
];

export { getContents, contents };
