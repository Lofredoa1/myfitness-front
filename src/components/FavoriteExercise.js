import React from "react";
import {Link} from "react-router-dom";
import "../App.css"

const FavoriteExercise = ({exercise, remove}) => {


    return(
    <div className="exercise_container">
        <div className="exercise_title_block">
            <h1 className="exercise_title">{exercise.title}</h1>
            <h3 className="rest">Rest: {exercise.rest} seconds</h3>
        </div>
        <div className="exercise_extra_info">
        <div className="exercise_reps">
                <h4 className="reps">{exercise.reps} Reps</h4>
                <h5 className="X">X</h5>
                <h4 className="sets">{exercise.sets} Sets</h4>
            </div>
            <Link to={`/exercise/${exercise.id}`}>
                <i class="fas fa-2x fa-info-circle"></i>
            </Link>
            <a onClick={()=> remove(exercise)}><i class="fas fa-2x fa-minus-circle remove_button"></i></a>
        </div>
    </div>
    )
};

export default FavoriteExercise;