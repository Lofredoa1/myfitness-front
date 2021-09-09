import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

const SingleExercise = ({ exercises, match, edit, deleteExercise, addFavorites }) => {
  const id = parseInt(match.params.id); 
  const exercise = exercises.find((exercise) => exercise.id === id);

  return (
      <div className="exercise_container">
        <div className="exercise_title_block">
            <h1 className="exercise_title">{exercise.title}</h1>
            <div className="exercise_reps">
                <h3 className="reps">{exercise.reps} Reps</h3>
                <h4 className="X">X</h4>
                <h3 className="sets">{exercise.sets} Sets</h3>
            </div>
        </div>
        <div className="exercise_extra_info">
            <h3 className="rest">Rest: {exercise.rest} seconds</h3>
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