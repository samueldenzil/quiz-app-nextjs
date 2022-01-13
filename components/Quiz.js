import { useState, useEffect } from "react";
import questions from "../pages/api/questions";

const Quiz = (props) => {
  const [currentQustion, setCurrentQuestion] = useState(questions[0]);
  const [displayStatus, setDisplayStatus] = useState(false);
  const [isCorrct, setIsCorrect] = useState(true);
  const [startTimer, setStartTimer] = useState(true);
  const [deductTime, setDeductTime] = useState(false);

  useEffect(() => {
    if (props.time <= 0) {
      setStartTimer(false);
    }
    return () => {
      if (props.time <= 0) props.changeScreen("result");
    };
  });

  useEffect(() => {
    let interval = null;
    if (startTimer) {
      interval = setInterval(() => {
        props.updateTime(1000);
        console.log("inside interval");
      }, 1000);
    } else if (!startTimer) {
      clearInterval(interval);
    }

    if (deductTime) {
      props.updateTime(10000);
      setDeductTime(false);
      setStartTimer(true);
    }

    return () => {
      clearInterval(interval);
    };
  }, [startTimer, deductTime]);

  function checkAnswer(clickedOption) {
    if (currentQustion.answer === clickedOption) {
      setIsCorrect(true);
      props.updateScore(10);
    } else {
      setIsCorrect(false);
      setDeductTime(true);
      setStartTimer(false);
    }
    setDisplayStatus(true);
    setTimeout(() => {
      const nextQuestion = questions.indexOf(currentQustion, 0) + 1;
      if (nextQuestion === questions.length) {
        props.changeScreen("result");
      }
      setCurrentQuestion(questions[nextQuestion]);
      setDisplayStatus(false);
    }, 800);
  }

  return (
    <main className="my-16 px-24">
      <div className="mx-auto max-w-4xl  bg-white px-8 pt-16 pb-10 rounded-2xl border-2 drop-shadow-2xl">
        <h1 className="text-3xl font-bold mb-6">
          {currentQustion.questionText}
        </h1>
        {currentQustion.options.map((option) => {
          return (
            <div
              key={option}
              className="bg-primary text-white rounded-lg mb-2 px-4 py-3 cursor-pointer hover:bg-secondary transition ease-in-out duration-200"
              onClick={() => {
                checkAnswer(option);
              }}
            >
              {option}
            </div>
          );
        })}
        {displayStatus && (
          <p className={`mt-8 ${isCorrct ? "text-green-600" : "text-red-600"}`}>
            {isCorrct ? "Correct!" : "Incorrect!"}
          </p>
        )}
      </div>
    </main>
  );
};

export default Quiz;
