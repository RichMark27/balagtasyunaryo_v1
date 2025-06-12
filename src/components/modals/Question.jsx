import React from "react";

function Question({
  question,
  handleOnSubmit,
  handleOnChange,
  selectedOption,
  error,
}) {
  return (
    <div className="flex flex-col w-full items-start p-2">
      {error && (
        <p className="text-red-500 text-xs p-2 border-1 text-center font-semibold ">
          Please Select your Answer
        </p>
      )}

      <h3 className="text-2xl font-bold ">Question {question.id}</h3>
      <p>{question.question}</p>
      <form
        onSubmit={handleOnSubmit}
        className="w-full px-8 flex flex-col items-start"
      >
        <div className="py-4">
          {question.options.map((question, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="radio"
                name="option"
                checked={selectedOption === question}
                value={question}
                onChange={handleOnChange}
              />
              <label className="font-medium">{question}</label>
            </div>
          ))}
        </div>
        <div className="w-full flex">
          <button
            type="submit"
            className="bg-blue-500 px-4 py-2 text-white font-bold rounded-lg mx-auto"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Question;
