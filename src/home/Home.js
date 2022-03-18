import "./Home.css";

function Home() {
  return (
    <div
      className="Description"
      style={{ backgroundImage: "url(/home_wallpaper.png)" }}
    >
      <div className="description_context">
        <span className="description_title">Interactive Courses</span>
        <span className="description_text">
          Today, there is an almost unlimited number of educational apps and
          programs on the internet with their own weaknesses. <br />
          <br />
          Therefore, our team has decided to pursue an app that can procedurally
          generate new questions for its users. <br />
          <br />
          Provide more comprehensive way of practising their knowledge.
        </span>
      </div>
      {/* <img className="description_image" src="draw.png" /> */}
    </div>
  );
}

export default Home;
