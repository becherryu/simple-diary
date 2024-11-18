import propTypes from "prop-types";
import "./MainView.css";
import { useEffect, useState } from "react";

function MainView({ setView }) {
  const [questions, setQuestions] = useState();
  const now = new Date();

  // 년/월/일 출력용
  const date = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  // 첫 렌더링 시 한번만 출력하기
  useEffect(() => {
    // 질문 가져오기
    fetch(
      "https://raw.githubusercontent.com/hackurity01/simple-diary/main/src/questions.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }, []);

  if (!questions) {
    return null;
  }

  return (
    <>
      <div className="header">
        <div>
          {year}년 {month}월 {date}일
        </div>
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
      <div className="question">{questions[date]}</div>
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
