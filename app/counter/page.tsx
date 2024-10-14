"use client";

import { FC, useState } from "react";

const Counter: FC = () => {
  // stateを個別ではなくオブジェクトで定義する
  const initState = {
    isBeforeStart: true,
    count: 0,
    answerValue: Math.floor(Math.random() * 31),
    isShowResult: false,
    resultMessage: "",
  };

  const [state, setState] = useState(initState);
  const { isBeforeStart, count, answerValue, isShowResult, resultMessage } =
    state;

  const startHandler = () => {
    setState({
      ...state,
      isBeforeStart: false,
    });
  };

  const countUpHandler = () => {
    setState({
      ...state,
      count: count + 1,
    });
  };
  const countDownHandler = () => {
    if (count > 0) {
      setState({
        ...state,
        count: count - 1,
      });
    }
  };

  const handleSubmit = () => {
    const result = Math.abs(answerValue - count);
    const message = () => {
      switch (result) {
        case 0:
          return "Excellent!!";
        case 1:
          return "Great!!";
        case 2:
          return "Good!!";
        default:
          return "Try Again!";
      }
    };
    setState({
      ...state,
      isShowResult: true,
      resultMessage: message(),
    });
  };

  const handleReset = () => {
    setState({ ...initState, isBeforeStart: false });
  };

  return (
    <>
      {isBeforeStart ? (
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 bg-blue-300 rounded"
            onClick={startHandler}
          >
            {"START"}
          </button>
        </div>
      ) : (
        <>
          {isShowResult && (
            <div className="flex justify-center mt-4">
              <span>{`Answer is ${answerValue}: ${resultMessage}`}</span>
            </div>
          )}
          <div className="flex justify-center mt-4">
            <span className="bg-gray-200 border border-gray-300 px-4 w-16 text-center">
              {count}
            </span>
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="px-4 py-2 bg-green-300 rounded"
              onClick={countUpHandler}
            >
              {" + "}
            </button>
            <button
              className="px-4 py-2 ml-4 bg-red-300 rounded"
              onClick={countDownHandler}
            >
              {" - "}
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="px-4 py-2 bg-orange-300 rounded"
              onClick={handleReset}
            >
              {" Reset "}
            </button>
            <button
              className="px-4 py-2 ml-4 bg-gray-300 rounded"
              onClick={handleSubmit}
            >
              {" Submit "}
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Counter;
