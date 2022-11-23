import { useState, useEffect } from "react";

const AddTask = ({onTaskAdded}) => {
    const [taskname, setTaskName] = useState("");

    const addTask = () => {
        onTaskAdded(taskname);
    }

    const handleChange = (event) => {
        setTaskName(
           event.target.value
        )
    }

    return ( 
        <div>
            <input type="text" value={taskname} onChange={handleChange}/>
            <button onClick={addTask}>
                Add Task
            </button>
        </div>
     );
}

export default AddTask;