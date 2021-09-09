import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

const SingleExercise = ({ exercises, match, edit, deleteExercise, addFavorites }) => {
  const id = parseInt(match.params.id); 
  const exercise = exercises.find((exercise) => exercise.id === id);

  return (
      <div className="exercise_container">
        <div className="exercise_title_block">
            <h1>{exercise.title}</h1>
            <h4>Rest(seconds): {exercise.rest}</h4>
        </div>
        <div className="exercise_extra_info">
        <div className="exercise_reps">
                <h4>{exercise.reps} Reps</h4>
                <h6>X</h6>
                <h4>{exercise.sets} Sets</h4>
            </div>
        </div>
        <div className="buttons">
          <Link to="/">
            <i class="fas fa-3x fa-angle-double-left"></i>
          </Link>
          <Link to="/edit">
            <a onClick={() => edit(exercise)}><i class="far fa-3x fa-edit"></i></a>
          </Link>
          <Link to="/">
          <a onClick={() => deleteExercise(exercise)}><i class="far fa-3x fa-trash-alt"></i></a>
          </Link>
          <a onClick={()=> addFavorites(exercise)}><i class="fas fa-3x fa-heart"></i></a>

        </div>
    </div>
  );
};

export default SingleExercise;