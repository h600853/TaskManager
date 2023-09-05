import React from "react";
import InputField from "./Inputfield";
import { Task } from "./classes/Task";
import { useRouter } from "next/router";

const CreateTask = () => {  
    const [title , setTitle] = React.useState<string>("")
    const [description , setDescription] = React.useState<string>("")
    const [dueDate , setDueDate] = React.useState<string>("")
    const [priority , setPriority] = React.useState<string>("")
    
    const Router = useRouter();

    const handleCreateTask = () => {
        const task = new Task(title, description, new Date(dueDate), parseInt(priority), false)
        console.log(task)
        
        const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

        tasks.push(task);

        localStorage.setItem("tasks", JSON.stringify(tasks));   

       Router.push("/");    
    }

    return (
        <div className="container">
            <h1>Create Task</h1>
            <div className="mb-3">
                <InputField labelText="Title" value={title} onChange={(e) => setTitle(e.target.value)} type="text"/>
            </div>
            <div className="mb-3">
                <InputField labelText="Description" value={description} onChange={(e) => setDescription(e.target.value)} type="text" />
            </div>
            <div className="mb-3">
                <InputField labelText="Due Date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} type="date" />
            </div>
            <div className="mb-3">
                <InputField labelText="Priority" value={priority} onChange={(e) => setPriority(e.target.value)} type="number" />
            </div>
            <button onClick={handleCreateTask} className="btn btn-primary">Create Task</button> 
        </div>
    )
}

export default CreateTask;
