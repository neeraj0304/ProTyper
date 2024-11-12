import React, { useRef, useEffect, useState } from "react";
import { generate } from "random-words";
import service from "../appwrite/Config_overall";
import { DailyService } from "../appwrite/Config_daily";
import keyboard from "../assets/keyboard.png";
import { ID } from "appwrite";
import UniversalButton from "./UniversalButton";
var randomwords = generate(50); //generate random words

function Typingbox() {
  const [words, setwords] = useState(() => {
    return randomwords;
    // this hook returns the words as a call back from random words
  });

  const [currentwordindex, setcurrentwordindex] = useState(0);
  const [currentcharindex, setcurrentcharindex] = useState(0);

  const [startTime, setstartTime] = useState(0);
  const [endTime, setendTime] = useState(0);
  const [totalTime, settotalTime] = useState(0);
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);
  const [correctChars, setcorrectChars] = useState(0);
  const [incorrectChars, setincorrectChars] = useState(0);
  const [testend, settestend] = useState(false);
  const [levelsCompleted, setLevelsCompleted] = useState(0);
  const [topSpeed, setTopSpeed] = useState(0);
  const [avgSpeed, setAvgSpeed] = useState(0);
  const [topAccuracy, setTopAccuracy] = useState(0);
  const [avgAccuracy, setAvgAccuracy] = useState(0);

  const inputref = useRef(null); // used for focusing the input box
  const focusInput = () => {
    inputref.current.focus(); // focus the input box
  };
  useEffect(() => {
    focusInput();
  }, []); // focus the input box
  

  // used for creating a blinking cursor effect before each char in random words if needed in future and this "wordSpanRef" is given reference in the outer span tag in the "Typingbox" function

  const wordSpanRef = useRef({});

  words.forEach((word, index) => {
    wordSpanRef.current[index] = React.createRef();
  });

  function wpm() {
    return Math.round(correctChars / 5 / (timer / 60));
  }
  function accuracy() {
    return Math.round((correctChars / (correctChars + incorrectChars)) * 100);
  }

  function dateformat() {
    const newdate = new Date().toISOString().split("T")[0];
    const parts = newdate.split("-");
    return parts[2] + "-" + parts[1] + "-" + parts[0]; // converts yyyy-mm-dd to dd-mm-yyyy
  }

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        const currentTime = Math.round(
          Math.floor(Date.now() - startTime) / 1000
        );
        setTimer(currentTime);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [running, startTime]);

  const handleKeyUp = (e) => {
    if (
      currentcharindex === words[currentwordindex].length &&
      currentwordindex === words.length - 1
    ) {
      const endTime = Date.now();
      setendTime(endTime);
      settotalTime(Math.floor(endTime - startTime) / 1000);
      setRunning(false);
      settestend(true);

      const wpmValue = wpm();
      const accuracyValue = accuracy();
      const date = dateformat();

      const user_Id = ID.unique(); // replace with your user id
      const total_time_spent = totalTime;
      const levels_completed = levelsCompleted + 1;
      const top_speed = Math.max(topSpeed, wpmValue);
      const avg_speed =
        (avgSpeed * levelsCompleted + wpmValue) / (levelsCompleted + 1);
      const top_accuracy = Math.max(topAccuracy, accuracyValue);
      const avg_accuracy =
        (avgAccuracy * levelsCompleted + accuracyValue) / (levelsCompleted + 1);

      setLevelsCompleted(levels_completed);
      setTopSpeed(top_speed);
      setAvgSpeed(avg_speed);
      setTopAccuracy(top_accuracy);
      setAvgAccuracy(avg_accuracy);

      service.Create_details(
        user_Id,
        total_time_spent,
        lessons_completed,
        0, //levels_completed is not calculated here,
        top_speed,
        avg_speed,
        top_accuracy,
        avg_accuracy,
        date
      );
    }
  };

  const handleNewWords = () => {
    const newwords = Array.from(generate(50));
    setwords(newwords); // generate new random words
    setcurrentwordindex(0);
    setcurrentcharindex(0);
    setstartTime(0);
    setendTime(0);
    settotalTime(0);
    setTimer(0);
    setRunning(false);
    setcorrectChars(0);
    setincorrectChars(0);
    settestend(false);
  };

  const handleUserInput = (e) => {
    if (startTime === 0) {
      setstartTime(Date.now());
      setRunning(true);
    }

    const currentWordElement =
      wordSpanRef.current[currentwordindex].current.children;

    const childNodes = currentWordElement;

    const currentCharElement = childNodes[currentcharindex];

    if (e.key === words[currentwordindex].charAt(currentcharindex)) {
      currentCharElement.style.color = "green";
      setcorrectChars(correctChars + 1);
    } // checking the key pressed by the user with the current word and char index and applying the color  green for correct
    setcurrentcharindex(currentcharindex + 1); // incrementing the char index by 1 after typing a char

    if (e.key === " ") {
      setcurrentwordindex(currentwordindex + 1); // incrementing the word index by 1 after typing a word
      setcurrentcharindex(0);
    }

    // checking the key pressed by the user with the current word and char index and applying the color  red for incorrect

    if (e.key !== words[currentwordindex].charAt(currentcharindex)) {
      currentCharElement.style.color = "red";
      setincorrectChars(incorrectChars + 1);
    }
  };

  return (
    <>
      <div className=" flex justify-center items-center ">
        <div className=" text-white text-xl">
          timer : <span className="text-cyan-500 font-bold ">{timer}</span> sec
        </div>
      </div>
      {testend ? (
        <div className=" flex justify-center items-center h-[65vh]">
          <div>
            <h1 className=" text-red-500 text-center text-sm md:text-2xl lg:text-4xl font-bold font-kay 2xl:text-5xl ">
              Test Completed!
            </h1>
            <p className=" text-center text-white text-xl font-semibold">
            Words per minute : <span className=" text-green-500 font-bold "> {wpm()}</span> <br />
            Accuracy : <span className=" text-green-500 font-bold ">
                 {accuracy()}%
              </span>
            </p> <br />
            {/* {isLoggedIn && (
          <div>
            <h2 className=' text-white text-center text-sm md:text-2xl lg:text-4xl font-bold font-kay 2xl:text-5xl '>
              User Details:
            </h2>
            <ul>
              <li>
                <strong>User ID:</strong> {user_Id}
              </li>
              <li>
                <strong>Total Time Spent:</strong> {totalTime} seconds
              </li>
              <li>
                <strong>Levels Completed:</strong> {levelsCompleted + 1}
              </li>
              <li>
                <strong>Top Speed:</strong> {topSpeed} WPM
              </li>
              <li>
                <strong>Average Speed:</strong> {avgSpeed} WPM
              </li>
              <li>
                <strong>Top Accuracy:</strong> {topAccuracy}%
              </li>
              <li>
                <strong>Average Accuracy:</strong> {avgAccuracy}%
              </li>
              <li>
                <strong>Date:</strong> {dateformat()}
              </li>
            </ul>
          </div>
        )} */}
            <div className=" flex justify-center items-center ">
            <button
              className=" text-black bg-cyan-500 border-2 border-black hover:bg-black hover:text-white hover:border-2 hover:border-white duration-500 font-bold py-2 px-4 rounded-xl text-center"
              onClick={handleNewWords}
            >
              restart
            </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="   m-2 "
          onClick={focusInput}
        >
          <div className=" flex justify-center items-center ">
            <div className=" items-center justify-center w-3/4  border-2 border-red-500">
              <div className=" text-white flex flex-wrap text-base md:text-xl lg:text-2xl font-kay weight-700 p-2">
                {words.map((word, i) => (
                  <span
                    key={i}
                    className=" p-1"
                    ref={(el) => (wordSpanRef.current[i] = { current: el })}
                  >
                    {word.split("").map((char) => (
                      <span>{char}</span>
                    ))}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className=" flex justify-center p-4">
            <img src={keyboard} alt="keyboard" className="" />
          </div>
        </div>
      )}

      <input
        className="opacity-0"
        type="text"
        onKeyDown={handleUserInput}
        onKeyUp={handleKeyUp}
        ref={inputref}
      />
    </>
  );
}

export default Typingbox;
