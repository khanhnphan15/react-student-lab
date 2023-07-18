import React from "react";

export default function Score({ score }) {
  // const { date, score: scoreValue } = score;

  return (
    <li>
      Date: {score.date}, Score: {score.score}
    </li>
  
  );
}
