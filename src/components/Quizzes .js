import image from "../assets/images/3.jpg";
import videoStyles from "../styles/Quizzes.module.css";
import Video from "./Video";

function Quizzes() {
  return (
    <div className={videoStyles.videos}>
      <Video
        to="/view"
        image={image}
        title="This is a quize title"
        score="Not taken yet"
        qunty="10"
      />
      <Video
        to="/view"
        image={image}
        title="This is a quize title"
        score="Not taken yet"
        qunty="10"
      />
      <Video
        to="/view"
        image={image}
        title="This is a quize title"
        score="Not taken yet"
        qunty="10"
      />
      <Video
        to="/view"
        image={image}
        title="This is a quize title"
        score="Not taken yet"
        qunty="10"
      />
      <Video
        to="/view"
        image={image}
        title="This is a quize title"
        score="Not taken yet"
        qunty="10"
      />
      <Video
        to="/view"
        image={image}
        title="This is a quize title"
        score="Not taken yet"
        qunty="10"
      />
      <Video
        to="/view"
        image={image}
        title="This is a quize title"
        score="Not taken yet"
        qunty="10"
      />
    </div>
  );
}

export default Quizzes;
