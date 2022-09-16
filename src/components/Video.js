import videoStyles from "../styles/Quizzes.module.css";

function Video({ image, title, qunty, to, score }) {
  return (
    <a href={to}>
      <div className={videoStyles.video}>
        <img src={image} alt="Quize thumble" />
        <p>{title}</p>
        <div className={videoStyles.qmeta}>
          <p>{qunty} Questions</p>
          <p>Score: {score}</p>
        </div>
      </div>
    </a>
  );
}

export default Video;
