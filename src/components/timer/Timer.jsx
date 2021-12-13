import React, { useRef, useState } from "react";
import { CircleButton } from "../UI/circleButton/CircleButton";
import classes from "./Timer.module.css";
import check from "../../assets/check.svg";
import repeat from "../../assets/repeat.svg";

export const Timer = (props) => {
  const [buttonName, setButtonName] = useState("Start!");
  const [timer, setTimer] = useState(0);

  const [handleStatus, setHandleStatus] = useState(true);
  const increment = useRef(null);
  const [timerVisible, setTimerVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);

  const handleStart = () => {
    setTimerVisible(true);
    setButtonName("Stop!");
    setHandleStatus(false);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };
  const handlePause = () => {
    setButtonVisible(false);

    clearInterval(increment.current);
  };

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className={classes.Timer}>
      {buttonVisible ? (
        <CircleButton
          buttonName={buttonName}
          handle={handleStatus ? handleStart : handlePause}
        />
      ) : (
        <p>Ваш результат:</p>
      )}
      {timerVisible ? <p>{formatTime()}</p> : null}

      {buttonVisible ? null : (
        <div>
          <button className={classes.resultButton}>
            {
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
              </svg>
            }
          </button>{" "}
          <button className={classes.resultButton}>
            {
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200">
                <path
                  d="M600,0C268.629,0,0,268.629,0,600s268.629,600,600,600
	c222.411,0,416.39-121.103,520.02-300.879l-211.23-121.509C847.217,884.405,732.127,956.47,600,956.47
	c-196.873,0-356.47-159.597-356.47-356.47S403.127,243.53,600,243.53c84.387,0,161.732,29.521,222.729,78.589L665.186,434.18
	L1200,612.524V53.613l-174.17,123.926C917.124,67.952,766.553,0,600,0z"
                />
              </svg>
            }
          </button>
        </div>
      )}
    </div>
  );
};
