import "./Catalogue.css";
import CardView from "./Card";

function Catalogue() {
  return (
    <div className="CatalogueContainer">
      <CardView
        // image="https://jordanrussiacenter.org/wp-content/uploads/2020/09/putin-iron-throne.jpg"
        image="syllogism.png"
        title="Intro to Syllogism"
        description="A student learns Syllogism. You are a student. Thus you study Syllogism!"
        course="syllogism"
      />
      <CardView
        image="logic.png"
        title="Practice Negation with AI"
        description="Learn the negation with the power of our finetuned GPT-3."
        course="negation"
      />
    </div>
  );
}

export default Catalogue;
