import React from "react"
import FavoriteExercise from "../components/FavoriteExercise"

const Favorites = (props) => {
    return <div>
        {props.favorites.map((exercise) => <FavoriteExercise exercise={exercise} remove={props.remove} key={exercise.id} handleClick={props.remove}/>)}
    </div>
}

export default Favorites