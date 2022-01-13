import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import { useState, useEffect } from "react";
import Quiz from "../components/Quiz";
import Results from "../components/Results";
import HighScore from "../components/HighScore";
import Footer from "../components/Footer";

export default function Home() {
  const [screen, setScreen] = useState("main");
  const [score, setScore] = useState(0);
  const [time, setTIme] = useState(50000);

  useEffect(() => {
    let array = [];
    return () => {
      window.localStorage.setItem("users", JSON.stringify(array));
    };
  }, []);

  function changeScreen(screenName) {
    setScreen(screenName);
  }

  function updateScore(currentScore) {
    setScore((prevScore) => prevScore + currentScore);
  }

  function updateTime(deductTime) {
    setTIme((prevTime) => prevTime - deductTime);
  }

  function goToMain() {
    setScreen("main");
    setTIme(50000);
    setScore(0);
  }

  return (
    <div className="relative h-screen font-verdana">
      <Head>
        <title>Quiz Project</title>
      </Head>
      <Header time={time} changeScreen={changeScreen} />
      {screen === "main" && <Main changeScreen={changeScreen} />}
      {screen === "quiz" && (
        <Quiz
          score={score}
          updateScore={updateScore}
          updateTime={updateTime}
          changeScreen={changeScreen}
          time={time}
        />
      )}
      {screen === "result" && (
        <Results score={score} changeScreen={changeScreen} />
      )}
      {screen === "highscore" && <HighScore goToMain={goToMain} />}
      <Footer />
    </div>
  );
}
