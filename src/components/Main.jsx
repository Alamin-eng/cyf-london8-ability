import React from "react";

const Main = ({ subject }) => {
  return subject ? (
    <main className="main">
      <div className="container" key={subject.id}>
        <h2 className="mainh2">{subject.title}</h2>
        <h3>Objectives</h3>
        <hr className="objectiveHr"></hr>
        {subject.objectives.map((objective, index) => {
          return (
            <ul key={index} className='objectives'>
              <li>{objective}</li>
            </ul>
          );
        })}
        <h3>Coursework</h3>
        <hr className="courseHr"></hr>
        {subject.coursework.map((work, index) => {
          return (
            <ul key={index} className='courseWork'>
              <li>{work}</li>
            </ul>
          );
        })}
      </div>
    </main>
  ) : (
    <p>Please choose a module</p>
  );
};

export default Main;
