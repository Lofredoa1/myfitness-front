import React from "react";
import Exercise from "../components/Exercise";

const AllExercises = (props) => {

  return <>
      <div>{props.exercises.map((exercise) => <Exercise exercise={exercise} key={exercise.id}/>)}</div>
    </>
};

export default AllExercises;