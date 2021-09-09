import React, {useState} from "react";
import "../App.css"


const Form = ({currentExercise, handleSubmit, buttonLabel, history}) => {
  ////////////////////
  // State
  ///////////////////
  const [formData, setFormData] = useState(currentExercise)

  //////////////////
  // Functions
  //////////////////
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  };

  const handleSubmission = (event) => {
    event.preventDefault()
    handleSubmit(formData)
    history.push("/")
  };

  return (
    <form onSubmit={handleSubmission}>
      <h4 className="form_title">Exercise Name:</h4>
      <input
        type="text"
        onChange={handleChange}
        value={formData.title}
        name="title"
        placeholder="Exercise Name"
      />
      <h4 className="form_title">Number of Repetitions:</h4>
      <input
        type="number"
        onChange={handleChange}
        value={formData.reps}
        name="reps"
        placeholder="Repetitions"
      />
      <h4 className="form_title">Number of Sets:</h4>
      <input
        type="number"
        onChange={handleChange}
        value={formData.sets}
        name="sets"
        placeholder="Number of Sets"
      />
      <h4 className="form_title">Rest Time Between Sets:</h4>
      <input
        type="number"
        onChange={handleChange}
        value={formData.rest}
        name="rest"
        placeholder="Rest Between Sets (seconds)"
      />
      <h4 className="form_title">Exercise Complete?</h4>
      <select
        type="boolean"
        onChange={handleChange}
        value={formData.completed}
        name="completed"
      >
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
      <input style={{backgroundColor: "#3737b9", border: "black"}} type="submit" value={buttonLabel} />
    </form>
  )
};

export default Form;