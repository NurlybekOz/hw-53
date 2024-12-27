import "./App.css";
import {useState} from "react";
import './components/Task/Task.css'
import Task from "./components/Task/Task.tsx";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm.tsx";
import * as React from "react";


interface ITask {
    task: string;
    id: string;
}

const App = () => {
    const [tasks, setTasks] = useState<ITask[]>([
        {task: 'Do homework', id: '1'},
        {task: 'Buy Milk', id: '2'},
        {task: 'Walk with dog', id: '3'},
    ]);
    const [newTask, setNewTask] = useState<string>('');


    const deleteTask = (idTask: string) => {
        setTasks(prevState => prevState.filter((task) => task.id !== idTask));
    };
    const addNewTask = () => {

        if (newTask.trim() === "") {
            return;
        }
        const newTaskObject: ITask = {
            task: newTask,
            id: String(new Date().getTime()),
        };
        setTasks(prevState =>[ ...prevState, newTaskObject]);
        setNewTask('')
    }
    const taskInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value);
    }
    return (
        <>
            <AddTaskForm addTaskBtn = {addNewTask}
                         onTaskInputChange={taskInput}
            />



            {tasks.map((task) => (

                <Task key = {task.id}
                      task = {task.task}
                      DeleteTaskBtn = {() => deleteTask(task.id)}
                ></Task>
            ))}
        </>
    )

};

export default App;
