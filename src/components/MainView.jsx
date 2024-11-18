import propTypes from "prop-types";
import "./MainView.css";

function MainView({ setView }) {
  return (
    <>
      <div className="header">
        <div>(오늘 날짜)</div>
        <div>
          <button
            className="history-btn"
            onClick={() => {
              // HistoryView 화면으로 전환 (props로 전달)
              setView("history");
            }}
          >
            기록 보기
          </button>
        </div>
      </div>
      <div className="question">(질문)</div>
      <div className="content">
        <textarea
          onChange={() => {
            console.log("onChange");
          }}
        />
      </div>
    </>
  );
}

// 들고 있을 수 있는 prop 정의
MainView.propTypes = {
  setView: propTypes.func,
};

export default MainView;
