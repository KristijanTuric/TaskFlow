import { useEffect, useState } from "react";

import api from "./services/api.js";

import TaskList from "./components/test/TaskList";
import AddTask from "./components/test/AddTask";
import SearchTask from "./components/test/SearchTask.jsx";
import UpdateTask from "./components/test/UpdateTask.jsx";
import DeleteTask from "./components/test/DeleteTask.jsx";
import DialogPortal from "./components/dialogs/DialogPortal.jsx";

import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadTasks = async () => {
        setLoading(true);
        try {
            const res = await api.getAll(); 
            setTasks(res);
        } catch (error) {
            console.error("Error fetching tasks: ", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadTasks();
    }, []);

    return (
        <div>
            <h1>Open a dialog</h1>
            <DialogPortal />          

            <h1>The Following Components are for Testing Only</h1>
            <h1>Task Manager</h1>
            <TaskList tasks={tasks} loading={loading} />

            <h1>Add a New Task</h1>
            <AddTask loadTasks={loadTasks} />

            <h1>Search for a task</h1>
            <SearchTask />

            <h1>Update Task Title</h1>
            <UpdateTask loadTasks={loadTasks} />

            <h1>Delete Task by Id</h1>
            <DeleteTask loadTasks={loadTasks} />

        </div>
    );
}

export default App;