import propTypes from "prop-types";
import "./HistoryView.css";

function HistoryView({ setView }) {
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
      <div className="diary-item">
        <div className="diary-date">(날짜)</div>
        <div>(내용)</div>
      </div>
    </>
  );
}

// 들고 있을 수 있는 prop 정의
HistoryView.propTypes = {
  setView: propTypes.func,
};

export default HistoryView;
