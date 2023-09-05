import React from "react";
import InputField from "./Inputfield";
import { Task } from "./classes/Task";
import { useRouter } from "next/router";

const EditTask = () => {  
    const [tasknumber , setTaskNumber] = React.useState<string>("")
    const [dueDate , setDueDate] = React.useState<string>("")
    const [priority , setPriority] = React.useState<string>("")
    const [completed , setCompleted] = React.useState<boolean>(false)
    
    const Router = useRouter();

    const handleEditTask = () => {
        if(tasknumber != "" ) {

            const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
            const taskData = tasks[parseInt(tasknumber, 10) - 1];
            
            taskData.title = taskData.title;
            taskData.description = taskData.description;
            taskData.dueDate = dueDate !== "" ? new Date(dueDate) : taskData.dueDate;
            taskData.priority = priority !== "" ? parseInt(priority) : taskData.priority;
            taskData.completed = completed !== false ? completed : taskData.completed;
            
            localStorage.setItem("tasks", JSON.stringify(tasks));   
            
            Router.push("/");    
        }
    }

    return (
        <div className="container">
            <h1>Edit Task</h1>
            <div className="mb-3">
                <InputField labelText="Edit task number" value={tasknumber} onChange={(e) => setTaskNumber(e.target.value)} type="number" />
            </div>
            <div className="mb-3">
                <InputField labelText="Due Date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} type="date" />
            </div>
            <div className="mb-3">
                <InputField labelText="Priority" value={priority} onChange={(e) => setPriority(e.target.value)} type="number" />
            </div>
           
            <div className="mb-3 form-check">
                <label htmlFor="completedCheckbox" className="form-check-label">Completed</label>
                <input
                    id="completedCheckbox"
                    type="checkbox"
                    className="form-check-input"
                    checked={completed}
                    onChange={(e) => setCompleted(e.target.checked)}
                />
            </div>
            
            <button onClick={handleEditTask} className="btn btn-primary">Edit Task</button> 
        </div>
    )
}

export default EditTask;
