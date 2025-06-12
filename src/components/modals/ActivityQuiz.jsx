import React, { useState } from "react";
import questionBank from "./quiz_1";
import Question from "./Question";
import { IoMdClose } from "react-icons/io";

function ActivityQuiz({ setOpenQuiz }) {
  const [questions] = useState(questionBank);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [completeQuiz, setCompleteQuiz] = useState(false);
  const [error, setError] = useState(false);

  const handleOnChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (selectedOption === "") {
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }
    checkAnswers();
    handleQuestionIndex();
  };

  const checkAnswers = () => {
    if (selectedOption === questions[questionIndex].answer) {
      setScore((prev) => prev + 1);
      setSelectedOption("");
    } else {
      setSelectedOption("");
    }
  };
  const handleQuestionIndex = () => {
    if (questionIndex + 1 < questions.length) {
      console.log(questionIndex);
      setQuestionIndex((prev) => prev + 1);
      console.log(questionIndex);
    } else {
      setCompleteQuiz(true);
    }
  };

  const resetQuiz = () => {
    setQuestionIndex(0);
    setScore(0);
    setCompleteQuiz(false);
  };

  return (
    <div className="absolute top-0 left-0 z-50 h-full w-full bg-black/25 backdrop-blur-2xl">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg">
        <section className="py-4 w-[300px] flex flex-col justify-center items-center">
          <div className="flex items-center justify-end w-full px-2  pb-4">
            <span
              className="flex text-white w-fit p-1 bg-red-500 rounded-full cursor-pointer"
              onClick={() => setOpenQuiz(false)}
            >
              <IoMdClose size={20} />
            </span>
          </div>
          {completeQuiz ? (
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold">Quiz Complete!</h3>
              <span className="font-semibold py-4">Your score: {score}</span>
              <button
                className="bg-blue-500 px-4 py-2 text-white font-bold rounded-lg mx-auto"
                onClick={resetQuiz}
              >
                Reset Quiz!
              </button>
            </div>
          ) : (
            <Question
              question={questions[questionIndex]}
              handleOnChange={handleOnChange}
              selectedOption={selectedOption}
              handleOnSubmit={handleOnSubmit}
              error={error}
            />
          )}
        </section>
      </div>
    </div>
  );
}

export default ActivityQuiz;
