import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Task } from './classes/Task';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Tasks: React.FC = () => {
  const Router = useRouter();
  const [taskList, setTaskList] = useState<Task[]>([]);

  const showTasks = () => {
    const taskjson = localStorage.getItem("tasks");

    if (taskjson) {
      const tasks = JSON.parse(taskjson);

      const newTaskList: Task[] = [];

      for (let i = 0; i < tasks.length; i++) {
        const taskData = tasks[i];
        const newTask = new Task(
          taskData.title,
          taskData.description,
          new Date(taskData.dueDate),
          taskData.priority,
          taskData.completed
        );
        newTaskList.push(newTask);
      }

      setTaskList(newTaskList); // Set the taskList to the newTaskList directly
    }
  }

  useEffect(() => { 
    showTasks();  
  }, []);

  return (
    <div className="container">
      <h1>Tasks</h1>
      {taskList.map((task, index) => (
        <div
          key={index}
          className="border p-3 mb-3" // Apply Bootstrap classes for styling
        >
          <h2>{index+1}. {task.getTitle()}</h2>
          <p className="text-muted">Description: {task.getDescription()}</p>
          <p className="text-primary">Due Date: {task.getDueDate().toLocaleDateString()}</p>
          <p className="text-success">Priority: {task.getPriority()}</p>
          <p className="text-danger">Completed: {task.getCompleted().toString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
