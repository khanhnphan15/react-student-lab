import Score from "./Score";
import React from "react";

export default function Student({ student }) {

  return (
   

    <div>
      <h2>{student.name}</h2>
      <p>{student.bio}</p>
      <h3>Scores:</h3>
      <ul>
        {student.scores.map((score, index) => (
          <li key={index}>
            <Score score={score} />
          </li>
        ))}
      </ul>
    </div>
  );
}