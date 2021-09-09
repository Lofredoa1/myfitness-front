import { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Form from './pages/Form';
import SingleExercise from './pages/SingleExercise';
import AllExercises from './pages/AllExercises';


function App(props) {
  /////////////////////
  // State & Variables
  ////////////////////
  const url = "https://my-fitness1.herokuapp.com/exercise/";
  const [exercises, setExercises] = useState([]);
  const nullExercise = {
    title: "",
    reps: "",
    sets: "",
    rest: "",
    completed: "false",
  }

  const [targetExercise, setTargetExercise] = useState(nullExercise)
  const [favorites, setFavorites] =useState([])

  ///////////////////
  // Functions
  ///////////////////

      //////////
      // CRUD
      /////////
  const getExercises = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setExercises(data)
  };

  const addExercise = async (newExercise) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExercise),
    });
    getExercises();
  };

  const getTargetExercise = (exercise) => {
    setTargetExercise(exercise)
    props.history.push("/edit")
  };

  const updateExercise = async (exercise) => {
    const response = await fetch(url + exercise.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exercise),
    });
    getExercises();
  };

  const deleteExercise = async (exercise) => {
    const response = await fetch(url + exercise.id + "/", {
      method: "delete",
    });
    getExercises();
    props.history.push("/");
  };

      //////////
      // Favorites
      /////////
  const addFavorites = (exercise) => {
    setFavorites([...favorites, exercise])
  };

  const removeFavorites = (exercise) => {
    const index = favorites.findIndex((e) => exercise.id === e.id)
    const updatedArray = [...favorites]
    updatedArray.splice(index, 1)
    setFavorites(updatedArray)
  };

  ///////////////////
  // useEffects
  ///////////////////
  useEffect(() => {getExercises()}, [])

  //////////////////
  // returned JSX
  /////////////////
  return (
    <div className="App">
      <h1>myFitness Exercise List</h1>
      <Link to="/new"><button>New Exercise</button></Link>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerprops) => (
            <AllExercises 
              {...routerprops} 
              exercises={exercises}
              addFavorites={addFavorites}
            />
          )}
        />
        <Route
          path="/exercise/:id"
          render={(routerprops) => (
            <SingleExercise 
              {...routerprops}
              exercises={exercises}
              edit={getTargetExercise}
              deleteExercise={deleteExercise}
              addFavorites={addFavorites} 
            />
          )}
        />
        <Route
          path="/new"
          render={(routerprops) => (
            <Form
              {...routerprops}
              currentExercise={nullExercise}
              handleSubmit={addExercise}
              buttonLabel="create exercise"
            />
          )}
        />
        <Route
          path="/edit"
          render={(routerprops) => (
            <Form
              {...routerprops}
              currentExercise={targetExercise}
              handleSubmit={updateExercise}
              buttonLabel="update exercise"
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
