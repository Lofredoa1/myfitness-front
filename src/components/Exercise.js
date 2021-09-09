import React from "react";
import {Link} from "react-router-dom";
import "../App.css"

const Exercise = ({exercise}) => {


    return(
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
            <Link to={`/exercise/${exercise.id}`}>
                <button>More Info</button>
            </Link>
        </div>
    </div>
    )
};

export default Exercise;