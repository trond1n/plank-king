import React from "react";
// import { useState } from "react";

import classes from "./Results.module.css";

export const Results = (props) => {
  // const [res, setRes] = useState([
  //   {
  //     date: "12.12.21",
  //     result: "01:12",
  //   },
  //   {
  //     date: "13.12.21",
  //     result: "01:13",
  //   },
  //   {
  //     date: "14.12.21",
  //     result: "01:14",
  //   },
  //   {
  //     date: "15.12.21",
  //     result: "01:15",
  //   },
  // ]);
  const res = [
    {
      date: "12.12.21",
      result: "01:12",
    },
    {
      date: "13.12.21",
      result: "01:13",
    },
    {
      date: "14.12.21",
      result: "01:14",
    },
    {
      date: "15.12.21",
      result: "01:15",
    },
  ];
  console.log(res);
  return (
    <div className={classes.Results}>
      <h1>Результаты</h1>

      <div className={classes.Results__table}>
        <div className={classes.results__head}>
          <p>Дата</p>
          <p>Время</p>
        </div>
        <ul>
          {res.map((i) => {
            return (
              <li>
                <p>{i.date}</p>
                <p>{i.result}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
