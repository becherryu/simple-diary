import propTypes from "prop-types";
import "./HistoryView.css";

function HistoryView({ setView }) {
  const answers = JSON.parse(localStorage.getItem("diary")) || {};
  const history = Object.entries(answers);

  // Object.keys(answers).map((key) => {
  //   const value = answers[key];
  //   key, value;
  //   return (
  //     <div key={key}>
  //       {key} : {value}
  //     </div>
  //   );
  // });

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          className="back-btn"
          onClick={() => {
            // MainView 화면으로 전환
            setView("main");
          }}
        >
          &lt;
        </button>
        <h4>다이어리 기록</h4>
      </div>
      {history.map(([date, answer], index) => (
        <div className="diary-item">
          <div key={index} className="diary-date">
            {date}일
          </div>
          <div> {answer}</div>
        </div>
      ))}
    </>
  );
}

// 들고 있을 수 있는 prop 정의
HistoryView.propTypes = {
  setView: propTypes.func,
};

export default HistoryView;
